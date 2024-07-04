import React from 'react'
import styles from './styles.module.scss'
import { UserCallsResponse } from '@/data/ApiDefinitions'
import { useOnScreen } from '@/utils/hooks'
import { Skeleton } from 'antd'
import { apiURI, fetchAPI } from '@/data/api'
import { generateAuthorizationHeader } from '@/utils'
import Order, { OrderData, OrderStatus } from '@/components/history/Order'
import { getOrderDetails } from '@/utils/api'
import { mockUserCalls } from '@/data/mockData'

export default function CallsHistory() {
  const [orders, setOrders] = React.useState<null | UserCallsResponse['calls']>(null)

  React.useEffect(() => { fetchOrders() }, [])

  const fetchOrders = async () => {
    // const callsResponse = await fetchAPI<UserCallsResponse>('/users/calls', 'GET')
    // const mockMode = (window.location.hostname === 'localhost' && process.env.DEBUG_API === 'true') || window.location.hostname === 'web.archive.org' || window.location.hostname.endsWith('netlify.app')
    setOrders(
      // mockMode
        // ? mockUserCalls.calls
        // : callsResponse.calls
      mockUserCalls.calls
    )
  }

  const activeOrders = orders
    ?.filter(call => ['in_process', 'in_queue'].includes(call.status))

  const doneOrders = orders
    ?.filter(call => ['success', 'error', 'canceled'].includes(call.status))

  return (
    <div className={styles.history}>
      <h1>История</h1>
      {orders
        ? (
          <>
            <div className={styles.group}>
              <h3>Активные</h3>
              {activeOrders?.length
                ? activeOrders
                  .map((call, i) => <LazyCallLoadingWrapper userCall={call} i={i} key={i} />)
                : <EmptyCallsList />
              }
            </div>
            <div className={styles.group}>
              <h3>Завершенные</h3>
              {doneOrders?.length
                ? doneOrders
                  .map((call, i) => <LazyCallLoadingWrapper userCall={call} i={i} key={i} />)
                : <EmptyCallsList />
              }
            </div>
          </>
        ) : <Skeleton />
      }
    </div>
  )
}

// The idea is to load only these callIDs that are rendered on screen
function LazyCallLoadingWrapper(props: { i: number, userCall: UserCallsResponse['calls'][number] }) {
  const wrapperRef: any = React.useRef<HTMLDivElement>()
  const [isLoading, setIsLoading] = React.useState(false)
  const onScreen: boolean = useOnScreen<HTMLDivElement>(wrapperRef, "0px")
  const [orderDetails, setOrderDetails] = React.useState<null | OrderData>(null)

  React.useEffect(() => {
    if(onScreen && !isLoading) setIsLoading(true)
  }, [onScreen])

  React.useEffect(() => {
    if(!isLoading) return
    fetchOrderDetails()
  }, [isLoading])

  const fetchOrderDetails = async () => {
    setOrderDetails(await getOrderDetails(props.userCall))
  }

  return (
    <div ref={wrapperRef} className={styles.orderSkeleton}>
      {orderDetails
        ? <Order order={orderDetails} /> 
        : <Skeleton active width={'100%'} paragraph={false} />
      }
    </div>
  )
}

function EmptyCallsList() {
  return (
    <span className={styles.emptyListLabel}>Список пуст</span>
  )
}