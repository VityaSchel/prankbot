import Order, { OrderData } from '@/components/history/Order'
import { fetchAPI } from '@/data/api'
import { CategoryCallRecordsResponse, UserCallsResponse } from '@/data/ApiDefinitions'
import { mockUserCalls } from '@/data/mockData'
import { getOrderDetails } from '@/utils/api'
import React from 'react'
import styles from './styles.module.scss'

export default function ActiveOrders() {
  const [orders, setOrders] = React.useState<null | OrderData[]>(null)

  React.useEffect(() => { fetchActiveOrders() }, [])

  const fetchActiveOrders = async () => {
    const userCalls = await fetchAPI<UserCallsResponse>('/users/calls?filter%5Bstatus%5D=in_queue&filter%5Bstatus%5D=in_process', 'GET')
    setOrders(
      userCalls.calls ?
        await Promise.all<OrderData[]>(
          userCalls.calls
          // mockUserCalls.calls
            .map(call => getOrderDetails(call))
        )
        : []
    )
  }

  return (
    <>
      {orders !== null && Boolean(orders.length) && (
        <div className={styles.activeOrders}>
          <h1>Активные розыгрыши</h1>
          <div className={styles.ordersList}>
            {orders
              .filter(call => ['calling', 'startingCall'].includes(call.status))
              .map((call, i) => <Order order={call} key={i} />)
            }
          </div>
        </div>
      )}
    </>
  )
}