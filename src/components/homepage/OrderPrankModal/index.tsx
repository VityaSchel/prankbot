import styles from './styles.module.scss'
import Modal from '@/components/common/Modal'
import Checkout from '@x5io/checkout'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import type { Prank } from '@/components/common/Prank'

export default function OrderPrankModal(props: { prank: Prank, open: boolean, onClose: () => any }) {
  const handlePaymentRequest = async (cryptoram: string) => {
    return true
  }

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
          
        }}
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
      <Checkout
        subject={{
          publicID: '0',
          name: 'Оплата подписки',
          price: '0₽'
        }}
        onRequest={handlePaymentRequest}
      />
    </Modal>
  )
}