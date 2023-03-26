import { generateAuthorizationHeader } from "@/utils"
import { store } from '@/store/store'
import { handleLogout } from "@/store/slices/authState"
import Cookies from 'js-cookie'

export const apiURI = 'https://api.prank.sale'

type FetchAPIOptions = {
  parseBody: boolean
}

export async function fetchAPI<T>(endpoint: string, method: 'GET', body: undefined, options: FetchAPIOptions): Promise<T & { _: Response } >
export async function fetchAPI<T>(endpoint: string, method: string, body?: { [key: string]: any }, options?: FetchAPIOptions): Promise<T & { _: Response } >
export async function fetchAPI<T>(endpoint: string, method = 'GET', body?: { [key: string]: any }, options = { parseBody: true }): Promise<T & { _: Response } > {
  const request = await fetch(apiURI + endpoint, {
    method,
    ...(method !== 'GET' && {
      body: JSON.stringify(body),
    }),
    headers: {
      ...generateAuthorizationHeader(),
      ...(method !== 'GET' && {
        'Content-Type': 'application/json'
      })
    }
  })
  if(request.status === 403 || request.status === 401) {
    console.log('Logging out')
    Cookies.remove('prankbot_session')
    store.dispatch(handleLogout({}))
    // @ts-ignore
    return { _: request }
  } else {
    if(options?.parseBody) {
      const response = await request.json()
      return { ...response, _: request }
    } else {
      // @ts-ignore
      return { _: request }
    }
  }
}