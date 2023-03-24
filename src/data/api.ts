import { generateAuthorizationHeader } from "@/utils"
import { store } from '@/store/store'
import { handleLogout } from "@/store/slices/authState"
import Cookie from 'js-cookie'

export const apiURI = 'https://prank-call-api.x5.money'

export async function fetchAPI<T>(endpoint: string, method: 'GET'): Promise<T>
export async function fetchAPI<T>(endpoint: string, method: 'POST', body: { [key: string]: any }): Promise<T>
export async function fetchAPI<T>(endpoint: string, method = 'GET', body?: { [key: string]: any }): Promise<T> {
  const request = await fetch(apiURI + endpoint, {
    method,
    ...(method !== 'GET' && {
      body: body as any,
      headers: {
        ...generateAuthorizationHeader(),
        'Content-Type': 'application/json'
      }
    })
  })
  if(request.status === 403) {
    store.dispatch(handleLogout({}))
    Cookie.remove('prankbot_session')
    return {}
  } else {
    const response = await request.json()
    return response
  }
}