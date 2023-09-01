import React from 'react'
import styles from './styles.module.scss'
import Modal from '@/components/common/Modal'
import { CheckoutModal, CheckoutModalRef } from '@x5io/checkout-modal'
import { Formik, FormikProps } from 'formik'
import * as Yup from 'yup'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import type { Prank } from '@/components/common/Prank'
import { AdvertisingCompanyResponse, MakeCallBody, MakeCallResponse, PayRyptogramCloudpaymentsBody, PayRyptogramCloudpaymentsResponse, PaymentRequired, PaymentResponse } from '@/data/ApiDefinitions'
import { apiURI, fetchAPI } from '@/data/api'
import { makeRedirect } from '@/utils'
import { useSelector } from 'react-redux'
import { selectAuthState } from '@/store/slices/authState'
import Checkbox from '@x5io/flat-uikit/dist/Checkbox'
import { notification } from 'antd'
import { useRouter } from 'next/router'
import { selectShowCheckboxes } from '@/store/slices/companyAdsState'
import ReactInputMask from 'react-input-mask'
import { openCheckout } from '@/shared/api/payment-handler'

const Context = React.createContext({ name: 'Default' });

type FormValues = { phone: string, email: string }

export default function OrderPrankModal(props: { prank: Prank, open: boolean, onClose: () => any }) {
  const checkoutRef = React.useRef<CheckoutModalRef>()
  const formikRef = React.useRef<FormikProps<FormValues>>()
  const authState = useSelector(selectAuthState)
  const [api, contextHolder] = notification.useNotification()
  const contextValue = React.useMemo(() => ({ name: 'Ant Design' }), [])
  const router = useRouter()
  const showCheckboxes = useSelector(selectShowCheckboxes).showCheckboxes

  const onSubmit = async (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => any }) => {
    try {
      let callsMake = await fetchAPI<MakeCallResponse | PaymentRequired>('/calls/make', 'POST', {
        callRecordId: Number(props.prank.id),
        phone: values.phone
      } as MakeCallBody)
      if (callsMake._.status === 200 && 'id' in callsMake) {
        api.info({
          message: 'Розыгрыш создан',
          placement: 'bottomRight'
        })
        props.onClose()
        router.push('/history')
      } else if (callsMake._.status === 402 && !('id' in callsMake)) {
        await fetchAPI(`/payments/${callsMake.paymentId}/set-email`, 'POST', {
          email: values.email
        }, { parseBody: false })
        await openCheckout(
          callsMake.paymentId, 
          checkoutRef.current!
        )
      } else {
        // api.info({
        //   message: 'Что-то пошло не так',
        //   placement: 'bottomRight'
        // })
        throw new Error('Exepected status code to be 402')
      }
    } catch (e) {
      console.error(e)
      api.info({
        message: 'Что-то пошло не так',
        placement: 'bottomRight'
      })
    } finally {
      setSubmitting(false)
    }
  }

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
                // ...(showCheckboxes && ({
                //   checkbox1: Yup.bool()
                //     .oneOf([true], ' ')
                //     .required(' '),
                //   checkbox2: Yup.bool()
                //     .oneOf([true], ' ')
                //     .required(' ')
                // })),
                email: Yup.string()
                  .email()
                  .required(),
              })),
            })
          }
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={onSubmit}
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
                <ReactInputMask
                  mask='+79999999999'
                  maskChar={null}
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                >
                  {/** @ts-expect-error ... */}
                  {inputProps => (
                    <Input
                      type="text"
                      name="phone"
                      label='Номер телефона'
                      placeholder='+7'
                      onEnter={() => handleSubmit()}
                      error={errors.phone}
                      {...inputProps}
                    />
                  )}
                </ReactInputMask>
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
                  {/* {showCheckboxes && (<>
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
                  </>)} */}
                  <Button type="submit" disabled={!values.email || !values.phone || isSubmitting}>
                    Оплатить
                  </Button>
                </div>
              )}
            </form>
          )}
        </Formik>
        <CheckoutModal
          ref={checkoutRef}
        />
      </Modal>
    </Context.Provider>
  )
}
