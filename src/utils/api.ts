import { OrderData, OrderStatus } from '@/components/history/Order'
import { fetchAPI } from '@/data/api'
import { UserCallsResponse, CallResponse } from '@/data/ApiDefinitions'

export async function getOrderDetails(userCall: UserCallsResponse['calls'][number]): OrderData {
  const call = await fetchAPI<CallResponse>('/calls/' + userCall.callId, 'GET')
  return {
    title: call.callRecordName,
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