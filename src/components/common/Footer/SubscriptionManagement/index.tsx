import React from 'react'
import styles from './styles.module.scss'
import Modal from '@/components/common/Modal'
import { Button as AntdButton } from 'antd'
import Button from '@/components/common/Button'
import { fetchAPI } from '@/data/api'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectAuthState } from '@/store/slices/authState'
import PaymentSystems from '@/components/common/PaymentSystems'
import * as Yup from 'yup'
import { Formik } from 'formik'
import Input from '@/components/common/Input'
import { BsInputCursorText } from 'react-icons/bs'

export default function SubscriptionManagemnt() {
  const [screen, setScreen] = React.useState<'info' | 'prompt' | 'form'>('info')
  const [dialogVisible, setDialogVisible] = React.useState(false)
  const router = useRouter()
  const authState = useSelector(selectAuthState)

  React.useEffect(() => {
    if(!dialogVisible) setScreen('info')
  }, [dialogVisible])

  return (
    <>
      <AntdButton type='text' className={styles.link} onClick={authState.loggedIn ? () => setDialogVisible(true) : () => router.push('/login')}>
        Управление подпиской
      </AntdButton>
      <Modal open={dialogVisible} onClose={() => setDialogVisible(false)}>
        {screen === 'info'
          ? (
            <>
              <h2 className={styles.title}>Управляйте своей подпиской</h2>
              <div className={styles.subscriptionInfo}>
                <span className={styles.price}>29 рублей</span>
                <span className={styles.label}>Стоимость подписки</span>
              </div>
              <AntdButton type='text' onClick={() => setScreen('prompt')}>Отменить подписку</AntdButton>
            </>
          ) : (
            screen === 'prompt'
            ? (
              <>
                <div className={styles.topBar}>
                  <h2 className={styles.title}>Отмена подписки</h2>
                  <p>Уверены, что хотите отменить подписку?</p>
                </div>
                <div className={styles.buttons}>
                  <Button variant='secondary' onClick={() => setScreen('form')}>Отменить</Button>
                  <Button variant='primary' onClick={() => setDialogVisible(false)}>Не отменять</Button>
                </div>
              </>
            ) : (
              screen === 'form'
                && (
                  <div className={styles.form}>
                    <h1>Для отписки введите данные карты</h1>
                    <PaymentSystems />
                    <Formik
                      initialValues={{ first6digits: '', last4digits: '' }}
                      validationSchema={
                        Yup.object({
                          first6digits: Yup.string()
                            .matches(/^[0-9]+$/, 'Введите только цифры')
                            .min(6, 'Введите 6 цифр')
                            .required('Обязательное поле'),
                          last4digits: Yup.string()
                            .matches(/^[0-9]+$/, 'Введите только цифры')
                            .min(4, 'Введите 4 цифры')
                            .required('Обязательное поле')
                        })
                      }
                      validateOnChange={false}
                      validateOnBlur={false}
                      onSubmit={async (values, { setSubmitting }) => {
                        await fetchAPI('/subscriptions/unsubscribe', 'POST', {
                          firstNumbers: values.first6digits,
                          lastNumbers: values.last4digits
                        }, { parseBody: false })
                        setDialogVisible(false)
                      }}
                      // innerRef={formikRef as any}
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
                          <Input
                            type="text"
                            name="first6digits"
                            label='Первые 6 цифр карты'
                            placeholder='Введите 6 цифр'
                            onChange={handleChange}
                            onEnter={() => handleSubmit()}
                            onBlur={handleBlur}
                            value={values.first6digits}
                            error={errors.first6digits}
                            disabled={isSubmitting}
                            inputProps={{ maxLength: 6 }}
                          />
                          <Input
                            type="text"
                            name="last4digits"
                            label='Поледние 4 цифр карты'
                            placeholder='Введите 4 цифры'
                            onChange={handleChange}
                            onEnter={() => handleSubmit()}
                            onBlur={handleBlur}
                            value={values.last4digits}
                            error={errors.last4digits}
                            disabled={isSubmitting}
                            inputProps={{ maxLength: 4 }}
                          />
                          <Button type="submit" onClick={() => setDialogVisible(false)}>
                            Я передумал
                          </Button>
                          <Button type="submit" variant='secondary' disabled={isSubmitting}>
                            Отменить
                          </Button>
                        </form>
                      )}
                    </Formik>
                  </div>
                )
            )
          )
        }
      </Modal>
    </>
  )
}