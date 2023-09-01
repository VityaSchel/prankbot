import { PayRyptogramCloudpaymentsBody, PayRyptogramCloudpaymentsResponse, PaymentMerchantResponse, PaymentResponse } from "@/data/ApiDefinitions"
import { apiURI, fetchAPI } from "@/data/api"
import { makeRedirect } from "@/utils"
import { CheckoutModalRef } from "@x5io/checkout-modal"

let merchant = ''

export async function openCheckout(paymentId: string, checkoutRef: CheckoutModalRef) {
  const paymentResponse = await fetchAPI<PaymentResponse>(`/payments/${paymentId}`, 'GET') as PaymentResponse

  const getMerchant = (response: PaymentResponse | PaymentMerchantResponse) => (
    response.merchantCode === 'cloudpayments'
      ? {
        name: 'cloudpayments',
        publicId: response.publicKey,
      } : /*response.merchantCode === 'payselection'
        ? */{
          name: 'payselection',
          publickey: response.publicKey,
        }// : null
  )

  checkoutRef.open({
    paymentInfo: {
      title: 'Оплата',
      priceInRub: paymentResponse.amount,
      priceString: paymentResponse.amount + '₽',
    },
    /** @ts-expect-error ... */
    paymentProcessor: 
      paymentResponse.merchantCode === 'auto'
        ? {
          name: 'auto',
          async resolver(cardNumber: string) {
            const resolveRequest = await fetch(`${apiURI}/payments/${paymentId}/merchant?filter%5BcardFirstSix%5D=${cardNumber.slice(0, 6)}`)
            const resolveResponse = await resolveRequest.json() as PaymentMerchantResponse
            merchant = resolveResponse.merchantCode
            return getMerchant(resolveResponse)
          }
        } : getMerchant(paymentResponse),
    checkboxes: paymentResponse.checkboxes
      .map(({ active, data }) => ({ defaultActive: active, htmlLabel: data })),
    initialValues: paymentResponse.email ? { email: paymentResponse.email } : undefined
  }, handlePaymentRequest(paymentId, (merchant || paymentResponse.merchantCode) as 'auto' | 'cloudpayments' | 'payselection'))
}

const handlePaymentRequest = (paymentID: string, merchantCode: 'auto' | 'cloudpayments' | 'payselection') => async (cryptogram: string, email: string) => {
  try {
    await fetchAPI(`/payments/${paymentID}/set-email`, 'POST', {
      email
    }, { parseBody: false })
    const payRequest = await fetch(apiURI + `/payments/${paymentID}/${merchantCode === 'auto' ? merchant : merchantCode}/pay_with_cryptogram`, {
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