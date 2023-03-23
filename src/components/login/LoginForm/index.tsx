import styles from './styles.module.scss'
import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { apiURI } from '@/data/api'
import { LoginBody, LoginResponse } from '@/data/ApiDefinitions'
import { store, useAppDispatch } from '@/store/store'
import { handleLogin } from '@/store/slices/authState'
import Cookies from 'js-cookie'

export default function LoginForm() {
  const dispatch = useAppDispatch()

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={
        Yup.object({
          email: Yup.string()
            .email('Некорректный формат')
            .required('Заполните это поле'),
          password: Yup.string()
            .required('Заполните это поле')
        })
      }
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const loginRequest = await fetch(apiURI + '/auth/login', {
            method: 'POST',
            body: JSON.stringify({
              email: values.email,
              password: values.password
            } as LoginBody),
            headers: { 'Content-Type': 'application/json' }
          })
          const loginResponse = await loginRequest.json() as LoginResponse
          const token = loginResponse.token
          if(token) {
            Cookies.set('prankbot_session', token, { expires: 365, path: '' })
            dispatch(handleLogin({ user: { _no_data: true } }))
          } else {
            alert('Ошибка во время входа')
          }
        } catch(e) {
          console.error(e)
          alert('Ошибка!')
        } finally {
          setSubmitting(false)
        }
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
          <div className={styles.title}>
            <h1>Вход</h1>
            <h2>Получи выгодную месячную подписку и получи безлимит на розыгрыши</h2>
          </div>
          <Input
            type="email"
            name="email"
            label='Введите e-mail'
            placeholder='E-mail'
            onChange={handleChange}
            onEnter={() => handleSubmit()}
            onBlur={handleBlur}
            value={values.email}
            error={errors.email}
          />
          <Input
            type="password"
            name="password"
            label='Введите пароль'
            placeholder='Пароль'
            onChange={handleChange}
            onEnter={() => handleSubmit()}
            onBlur={handleBlur}
            value={values.password}
            error={errors.password}
          />
          <Button type="submit" disabled={!values.email || !values.password || isSubmitting}>
            Войти
          </Button>
        </form>
      )}
     </Formik>
  )
}