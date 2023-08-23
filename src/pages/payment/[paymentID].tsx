import React from 'react'
import { CheckoutModal, CheckoutModalRef } from '@x5io/checkout-modal'
import { openCheckout } from '@/shared/api/payment-handler'
import { notification } from 'antd'
import { useRouter } from 'next/router'

export default function PaymentPage() {
  const checkoutRef = React.useRef<CheckoutModalRef>()
  const [api, contextHolder] = notification.useNotification()
  const paymentId = useRouter().query.paymentID

  React.useEffect(() => {
    if(typeof paymentId !== 'string') return
    if (!checkoutRef.current) return
    openCheckout(
      paymentId,
      checkoutRef.current
    )
      .catch(e => {
        api.info({
          message: 'Что-то пошло не так',
          placement: 'bottomRight'
        })
      })
  }, [checkoutRef.current])

  return (
    <CheckoutModal
      ref={checkoutRef}
    />
  )
}