import { OrderData } from '@/components/history/Order'
import { fetchAPI } from '@/data/api'
import { CategoryCallRecordsResponse, UserCallsResponse } from '@/data/ApiDefinitions'
import React from 'react'
import styles from './styles.module.scss'

export default function ActiveOrders() {
  const [orders, setOrders] = React.useState<null | OrderData[]>()

  React.useEffect(() => { fetchActiveOrders() }, [])

  const fetchActiveOrders = async () => {
    const userCalls = await fetchAPI<UserCallsResponse>('/users/call', 'GET')
    setOrders(
      userCalls.callRecords
        .map(cr => ({
          id: String(cr.id),
          title: cr.name,
          statistics: cr.numberOrders,
          previewAudioURL: cr.recordUrl
        }))
    )
  }

  return (
    <div className={styles.activeOrders}>
      <h1>Активные розыгрыши</h1>
      {orders
        .filter(call => call.status === 'in_process')
        .map((call, i) => <Order order={call} />)
      }
    </div>
  )
}