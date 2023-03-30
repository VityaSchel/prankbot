import React from 'react'
import styles from './styles.module.scss'
import Modal from '@/components/common/Modal'
import Checkout, { CheckoutRefProperties } from '@x5io/checkout'
import { Formik, FormikProps } from 'formik'
import * as Yup from 'yup'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import type { Prank } from '@/components/common/Prank'
import { AdvertisingCompanyResponse, CloudpaymentsPaymentResponse, MakeCallBody, MakeCallResponse, PayCloudpaymentsBody, PayCloudpaymentsResponse, PaymentRequired } from '@/data/ApiDefinitions'
import { apiURI, fetchAPI } from '@/data/api'
import { makeRedirect } from '@/utils'
import { useSelector } from 'react-redux'
import { selectAuthState } from '@/store/slices/authState'
import Checkbox from '@x5io/flat-uikit/dist/Checkbox'
import { notification } from 'antd'
import { useRouter } from 'next/router'
import { selectShowCheckboxes } from '@/store/slices/companyAdsState'

const Context = React.createContext({ name: 'Default' });

export default function OrderPrankModal(props: { prank: Prank, open: boolean, onClose: () => any }) {
  const checkoutRef = React.useRef<CheckoutRefProperties>()
  const [checkoutProps, setCheckoutProps] = React.useState<null | { paymentID: string, publicID: string, amount: number }>(null)
  const formikRef = React.useRef<FormikProps<{ phone: string, email: string, checkbox1: boolean, checkbox2: boolean }>>()
  const authState = useSelector(selectAuthState)
  const [api, contextHolder] = notification.useNotification()
  const contextValue = React.useMemo(() => ({ name: 'Ant Design' }), [])
  const router = useRouter()
  const showCheckboxes = useSelector(selectShowCheckboxes).showCheckboxes

  const handlePaymentRequest = async (cryptogram: string) => {
    try {
      const payRequest = await fetch(apiURI + `/payments/${checkoutProps!.paymentID}/cloudpayments/pay`, {
        method: 'POST',
        body: JSON.stringify({
          cryptogram
        } as PayCloudpaymentsBody),
        headers: { 'Content-Type': 'application/json' }
      })
      const payResponse = await payRequest.json() as PayCloudpaymentsResponse
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

  React.useEffect(() => {
    const inter = setInterval(() => {
      if(!checkoutRef.current) return
      clearInterval(inter)
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
    <Context.Provider value={contextValue}>
      {contextHolder}
      <Modal open={props.open} onClose={props.onClose} className={styles.modal}>
        <Formik
          initialValues={{ phone: '', email: '', checkbox1: false, checkbox2: false }}
          validationSchema={
            Yup.object({
              phone: Yup.string()
                .notOneOf(['+79019404698'], 'Этот номер забронирован 💀')
                .matches(/^((8|\+7|7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{8,10}$/, 'Некорректный формат')
                .required(),
              ...(!authState.loggedIn && ({
                ...(showCheckboxes && ({
                  checkbox1: Yup.bool()
                    .oneOf([true], ' ')
                    .required(' '),
                  checkbox2: Yup.bool()
                    .oneOf([true], ' ')
                    .required(' ')
                })),
                email: Yup.string()
                  .email()
                  .required(),
              })),
            })
          }
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              let callsMake = await fetchAPI<MakeCallResponse | PaymentRequired>('/calls/make', 'POST', {
                callRecordId: Number(props.prank.id),
                phone: values.phone
              } as MakeCallBody)
              if(callsMake._.status === 200 && 'id' in callsMake) {
                api.info({
                  message: 'Розыгрыш создан',
                  placement: 'bottomRight'
                })
                props.onClose()
                router.push('/history')
              } else if(callsMake._.status === 402 && !('id' in callsMake)) {
                const paymentResponse = await fetchAPI<CloudpaymentsPaymentResponse>(`/payments/${callsMake.paymentId}/cloudpayments`, 'GET')
                await fetchAPI(`/payments/${callsMake.paymentId}/set-email`, 'POST', {
                  email: values.email
                }, { parseBody: false })
                setCheckoutProps({
                  paymentID: callsMake.paymentId,
                  publicID: paymentResponse.cloudpaymentsPublicId,
                  amount: paymentResponse.amount
                })
              } else {
                api.info({
                  message: 'Что-то пошло не так',
                  placement: 'bottomRight'
                })
                throw new Error('Exepected status code to be 402')
              }
            } catch(e) {
              console.error(e)
              api.info({
                message: 'Что-то пошло не так',
                placement: 'bottomRight'
              })
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
                  <h3>Укажите номер телефона человека, которого хотите разыграть. {!authState.loggedIn && 'Также укажите свой e-mail для регистрации.'}</h3>
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
                {!authState.loggedIn && <Input
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
                />}
                {authState.loggedIn && authState.sessionRestored && (
                  <Button type="submit" disabled={!values.phone || isSubmitting}>
                    Создать розыгрыш
                  </Button>
                )}
                
              </div>
              {!authState.loggedIn && (
                <div className={styles.subscription}>
                  <div className={styles.price}>
                    <h2>1 рубль</h2>
                    <h4>Стоимость пробного звонка</h4>
                  </div>
                  {showCheckboxes && (<>
                    <Checkbox
                      name='checkbox1'
                      value={values.checkbox1}
                      onChange={handleChange}
                      error={errors.checkbox1}
                    >
                      {process.env.NEXT_PUBLIC_CHECKBOX1}
                    </Checkbox>
                    <Checkbox
                      name='checkbox2'
                      value={values.checkbox2}
                      onChange={handleChange}
                      error={errors.checkbox2}
                    >
                      {process.env.NEXT_PUBLIC_CHECKBOX2}
                    </Checkbox>
                  </>)}
                  <Button type="submit" disabled={!values.email || !values.phone || isSubmitting}>
                    Оплатить
                  </Button>
                </div>
              )}
            </form>
          )}
        </Formik>
        {checkoutProps && <Checkout
          color='rgba(75, 46, 255, 1)'
          subject={{
            publicID: checkoutProps.publicID,
            name: 'Оплата',
            price: checkoutProps.amount + '₽'
          }}
          onRequest={handlePaymentRequest}
          ref={checkoutRef}
          wrapClassName={styles.checkoutContainer}
        />}
      </Modal>
    </Context.Provider>
  )
}
