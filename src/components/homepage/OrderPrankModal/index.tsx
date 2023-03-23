import React from 'react'
import styles from './styles.module.scss'
import Modal from '@/components/common/Modal'
import Checkout, { CheckoutRefProperties } from '@x5io/checkout'
import { Formik, FormikProps } from 'formik'
import * as Yup from 'yup'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import type { Prank } from '@/components/common/Prank'
import { CloudpaymentsPaymentResponse, MakeCallBody, MakeCallResponse, PayCloudpaymentsBody, PayCloudpaymentsResponse, PaymentRequired } from '@/data/ApiDefinitions'
import { apiURI } from '@/data/api'
import { makeRedirect } from '@/utils'

export default function OrderPrankModal(props: { prank: Prank, open: boolean, onClose: () => any }) {
  const checkoutRef = React.useRef<CheckoutRefProperties>()
  const [checkoutProps, setCheckoutProps] = React.useState<null | { publicID: string, amount: number }>(null)
  const formikRef = React.useRef<FormikProps<{ phone: string, email: string }>>()

  const handlePaymentRequest = async (cryptogram: string) => {
    try {
      const payRequest = await fetch(apiURI + `/payments/${checkoutProps!.publicID}/cloudpayments/pay`, {
        method: 'POST',
        body: JSON.stringify({
          cryptogram
        } as PayCloudpaymentsBody),
        headers: { 'Content-Type': 'application/json' }
      })
      const payResponse = await payRequest.json() as PayCloudpaymentsResponse
      if(payResponse.redirectParams) {
        makeRedirect(
          payResponse.redirectUrl, Object.fromEntries(
            payResponse.redirectParams.map(({ key, value }) => [key, value])
          ), payResponse.redirectMethod
        )
      } else {
        window.location.href = payResponse.redirectUrl
      }
      return payRequest.status === 201
    } catch(e) {
      console.error(e)
      return false
    }
  }

  React.useEffect(() => {
    const inter = setInterval(() => {
      if(!checkoutRef.current) return
      clearInterval(inter)
      console.log('call to')
      checkoutRef.current.initialize({
        email: formikRef.current!.values.email
      })
    }, 10)
    return () => {
      clearInterval(inter)
    }
  }, [checkoutProps])

  React.useEffect(() => {
    if(!props.open) {
      checkoutRef.current = undefined
      setCheckoutProps(null)
    }
  }, [props.open])

  return (
    <Modal open={props.open} onClose={props.onClose} className={styles.modal}>
      <Formik
        initialValues={{ phone: '', email: '' }}
        validationSchema={
          Yup.object({
            phone: Yup.string()
              .matches(/^((8|\+7|7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{8,10}$/, 'Некорректный формат')
              .required(),
            email: Yup.string()
              .email()
              .required(),
          })
        }
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const callsMakeRequest = await fetch(apiURI + '/calls/make', {
              method: 'POST',
              body: JSON.stringify({
                callRecordId: Number(props.prank.id),
                phone: values.phone
              } as MakeCallBody),
              headers: { 'Content-Type': 'application/json' }
            })
            if(callsMakeRequest.status !== 402) throw new Error('Exepected status code to be 402')
            const callsMakeResponse = await callsMakeRequest.json() as PaymentRequired
            
            const paymentRequest = await fetch(apiURI + `/payments/${callsMakeResponse.paymentId}/cloudpayments`)
            const paymentResponse = await paymentRequest.json() as CloudpaymentsPaymentResponse
            await fetch(apiURI + `/payments/${callsMakeResponse.paymentId}/set-email`, {
              method: 'POST',
              body: JSON.stringify({
                email: values.email
              }),
              headers: {'Content-Type': 'application/json'}
            })
            setCheckoutProps({
              publicID: paymentResponse.cloudpaymentsPublicId,
              amount: paymentResponse.amount
            })
          } catch(e) {
            console.error(e)
            alert('Ошибка!')
          } finally {
            setSubmitting(false)
          }
        }}
        innerRef={formikRef as any}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formInputs}>
              <div className={styles.title}>
                <h1>{props.prank.title}</h1>
                <h3>Укажите номер телефона человека, которого хотите разыграть. Также укажите свой e-mail для регистрации.</h3>
              </div>
              <Input
                type="text"
                name="phone"
                label='Номер телефона'
                placeholder='+7'
                onChange={handleChange}
                onEnter={() => handleSubmit()}
                onBlur={handleBlur}
                value={values.phone}
                error={errors.phone}
                disabled={isSubmitting}
              />
              <Input
                type="email"
                name="email"
                label='E-mail для регистрации'
                placeholder='Введите e-mail'
                onChange={handleChange}
                onEnter={() => handleSubmit()}
                onBlur={handleBlur}
                value={values.email}
                error={errors.email}
                disabled={isSubmitting}
              />
            </div>
            <div className={styles.subscription}>
              <div className={styles.price}>
                <h2>29 рублей</h2>
                <h4>Стоимость первого месяца подписки</h4>
              </div>
              <Button type="submit" disabled={!values.email || !values.phone || isSubmitting}>
                Подписаться
              </Button>
            </div>
          </form>
        )}
      </Formik>
      {checkoutProps && <Checkout
        subject={{
          publicID: checkoutProps.publicID,
          name: 'Оплата подписки',
          price: checkoutProps.amount + '₽'
        }}
        onRequest={handlePaymentRequest}
        ref={checkoutRef}
      />}
    </Modal>
  )
}