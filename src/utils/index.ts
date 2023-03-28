import Cookies from 'js-cookie'

export function makeRedirect(path: string, params: { [key: string]: any }, method='post') {
  console.log('Redirecting to', path, params, method)
  
  const form = document.createElement('form')
  form.method = method
  form.action = path

  for (const key in params) {
    if (Object.hasOwnProperty.bind(params)(key)) {
      const hiddenField = document.createElement('input')
      hiddenField.type = 'hidden'
      hiddenField.name = key
      hiddenField.value = params[key]

      form.appendChild(hiddenField)
    }
  }

  document.body.appendChild(form)
  form.submit()
}

export function generateAuthorizationHeader(): { Authorization: string } | {} {
  const session = Cookies.get('prankbot_session')
  return session ? {
    Authorization: session as string
  } : {}
}