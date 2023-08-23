import { PayRyptogramCloudpaymentsBody, PayRyptogramCloudpaymentsResponse, PaymentResponse } from "@/data/ApiDefinitions"
import { apiURI, fetchAPI } from "@/data/api"
import { makeRedirect } from "@/utils"
import { CheckoutModalRef } from "@x5io/checkout-modal"

export async function openCheckout(paymentId: string, checkoutRef: CheckoutModalRef) {
  const paymentResponse = await fetchAPI<PaymentResponse>(`/payments/${paymentId}`, 'GET') as PaymentResponse
  checkoutRef.open({
    paymentInfo: {
      title: 'Оплата',
      priceInRub: paymentResponse.amount,
      priceString: paymentResponse.amount + '₽',
    },
    paymentProcessor: 
      paymentResponse.merchantCode === 'cloudpayments'
        ? {
          name: 'cloudpayments',
          publicId: paymentResponse.publicKey
        } : {
          name: 'payselection',
          publickey: paymentResponse.publicKey
        },
    checkboxes: paymentResponse.checkboxes
      .map(({ active, data }) => ({ defaultActive: active, htmlLabel: data })),
  }, handlePaymentRequest(paymentId, paymentResponse.merchantCode as 'cloudpayments' | 'payselection'))
}

const handlePaymentRequest = (paymentID: string, merchantCode: 'cloudpayments' | 'payselection') => async (cryptogram: string) => {
  try {
    const payRequest = await fetch(apiURI + `/payments/${paymentID}/${merchantCode}/pay_with_cryptogram`, {
      method: 'POST',
      body: JSON.stringify({
        cryptogram
      } as PayRyptogramCloudpaymentsBody),
      headers: { 'Content-Type': 'application/json' }
    })
    const payResponse = await payRequest.json() as PayRyptogramCloudpaymentsResponse
    const isSuccess = payRequest.status === 201
    if(isSuccess) {
      if(payResponse.redirectParams) {
        makeRedirect(
          payResponse.redirectUrl, Object.fromEntries(
            payResponse.redirectParams.map(({ key, value }) => [key, value])
          ), payResponse.redirectMethod
        )
      } else {
        window.location.href = payResponse.redirectUrl
      }
    }
    return isSuccess
  } catch(e) {
    console.error(e)
    return false
  }
}