import { OrderData, OrderStatus } from '@/components/history/Order'
import { UserCallsResponse } from '@/data/ApiDefinitions'

export function getOrderDetails(userCall: UserCallsResponse['calls'][number]): OrderData {
  // await fetchAPI('/') TODO: fetch info about prank
  return {
    title: 'TODO: fetch info about prank',
    phone: userCall.phone,
    date: new Date(),
    status: {
      'in_queue': 'startingCall',
      'in_process': 'calling',
      'error': 'error',
      'done': 'callEnded'
    }[userCall.status] as OrderStatus,
    recordURI: userCall.callRecord
  }
}