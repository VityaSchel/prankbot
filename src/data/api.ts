import { generateAuthorizationHeader } from "@/utils"
import { store } from '@/store/store'
import { handleLogout } from "@/store/slices/authState"
import Cookies from 'js-cookie'

export const apiURI = 'https://prank-api.subscriber.one'

type FetchAPIOptions = {
  parseBody: boolean
}

export async function fetchAPI<T>(endpoint: string, method: 'GET', body: undefined, options: FetchAPIOptions): Promise<T & { _: Response } >
export async function fetchAPI<T>(endpoint: string, method: string, body?: { [key: string]: any }, options?: FetchAPIOptions): Promise<T & { _: Response } >
export async function fetchAPI<T>(endpoint: string, method = 'GET', body?: { [key: string]: any }, options = { parseBody: true }): Promise<T & { _: Response } > {
  const mockMode = true//(window.location.hostname === 'localhost' && process.env.DEBUG_API === 'true') || window.location.hostname === 'web.archive.org' || window.location.hostname.endsWith('netlify.app')
  if(mockMode) { 
    const mockResult = mockFetchAPI<T>(endpoint, method, body) 
    if(mockResult !== null) return mockResult
  }
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

export function mockFetchAPI<T>(endpoint: string, method: string, body: any): Promise<T & { _: Response } > {
  if(endpoint === '/calls/make' && method === 'POST') {
    // @ts-ignore
    return {
      paymentId: "test123456",
      _: { status: 402 } 
    }
  }
  if(endpoint === '/payments/test123456' && method === 'GET') {
    // @ts-ignore
    return {
      "amount": 100,
      "amountWithoutDiscount": 100,
      "checkboxes": [
        {
          "active": true,
          "data": "test-checkbox"
        }
      ],
      "email": "testemail@example.org",
      "merchantCode": "cloudpayments",
      "publicKey": "15237671298093",
      "shopId": "126737128931283",
      "showCheckboxes": true,
      "status": "in_process",
      _: { status: 200 }
    }
  }
  if(endpoint === '/categories' && method === 'GET') {
    return {
      "categories": [
        {
          "id": 0,
          "name": "Угрозы",
          "numberCallRecords": 100
        },
        {
          "id": 1,
          "name": "Приколы",
          "numberCallRecords": 310
        }
      ],
      "count": 2,
      _: { status: 200 }
    }
  }

  if(endpoint.startsWith('/users/calls')) {
    return {
      _: { status: 401 }
    }
  }

  if(endpoint.endsWith('/call_records')) {
    return {
      "callRecords": [
          {
              "cardBackground": "1",
              "id": 4,
              "name": "Митинги",
              "numberOrders": 2284,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 7,
              "name": "ФСБ",
              "numberOrders": 3084,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 8,
              "name": "Налоговая",
              "numberOrders": 1223,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 10,
              "name": "ФСКН",
              "numberOrders": 1234,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 19,
              "name": "Доставка Суши",
              "numberOrders": 2455,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 2,
              "name": "Аху*вший Саид",
              "numberOrders": 13179,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 43,
              "name": "Задержан отец",
              "numberOrders": 2582,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 24,
              "name": "Бабка и деньги",
              "numberOrders": 6680,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 9,
              "name": "Преступление",
              "numberOrders": 2052,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 34,
              "name": "Негры",
              "numberOrders": 2562,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 32,
              "name": "Водитель такси",
              "numberOrders": 1324,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 25,
              "name": "Кавказцу названивает",
              "numberOrders": 2254,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 27,
              "name": "Такси жи есть",
              "numberOrders": 918,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 29,
              "name": "Хасан хочет замуж",
              "numberOrders": 2411,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 28,
              "name": "Узбек знакомится",
              "numberOrders": 2076,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 26,
              "name": "Про маму написал",
              "numberOrders": 2864,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 35,
              "name": "Голые фотки",
              "numberOrders": 1696,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 36,
              "name": "Девушка беременна",
              "numberOrders": 1024,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 37,
              "name": "Дискотека",
              "numberOrders": 829,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 38,
              "name": "Мама девочки",
              "numberOrders": 790,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 39,
              "name": "Пенсия",
              "numberOrders": 1758,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 40,
              "name": "Потаскуха",
              "numberOrders": 812,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 41,
              "name": "Слили фотки",
              "numberOrders": 1329,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 42,
              "name": "Сын дрочит",
              "numberOrders": 1674,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 44,
              "name": "Квартиру чуть не ограбили",
              "numberOrders": 947,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 46,
              "name": "Военкомат 2.0",
              "numberOrders": 2994,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 47,
              "name": "Повестка",
              "numberOrders": 5346,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 13,
              "name": "Военкомат",
              "numberOrders": 1234,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 21,
              "name": "Доставка Пиццы",
              "numberOrders": 1494,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 18,
              "name": "Звонок пид*расу",
              "numberOrders": 2443,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 12,
              "name": "Коллекторы",
              "numberOrders": 1284,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 11,
              "name": "Полиция",
              "numberOrders": 7465,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 30,
              "name": "Быдланка",
              "numberOrders": 1597,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 16,
              "name": "Сестру обидел",
              "numberOrders": 3021,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 17,
              "name": "Алёёё",
              "numberOrders": 1912,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 20,
              "name": "Прогноз погоды",
              "numberOrders": 1921,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 33,
              "name": "Доставка шашлыка",
              "numberOrders": 2139,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 14,
              "name": "Куришь за школой?!",
              "numberOrders": 3000,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 23,
              "name": "Слив фоток",
              "numberOrders": 3629,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 3,
              "name": "Насрал сосед",
              "numberOrders": 4838,
              "recordUrl": "/mock.mp3"
          },
          {
              "cardBackground": "1",
              "id": 31,
              "name": "Фото члена",
              "numberOrders": 3431,
              "recordUrl": "/mock.mp3"
          }
      ],
      _: { status: 200 }
    }
  }

  if(/^\/calls\/\d+$/.test(endpoint)) {
    return {
      code: 401,
      message: 'unauthenticated for invalid credentials',
      _: { status: 401 }
    }
  }

  if(endpoint === '/auth/login') {
    return {
      token: 'test-token',
      _: { status: 200 }
    }
  }

  // @ts-ignore
  return null
}