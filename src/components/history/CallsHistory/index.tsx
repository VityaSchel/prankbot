import React from 'react'
import styles from './styles.module.scss'
import { UserCallsResponse } from '@/data/ApiDefinitions'
import { useOnScreen } from '@/utils'
import { Skeleton } from 'antd'
import { apiURI } from '@/data/api'

export default function CallsHistory() {
  const [orders, setOrders] = React.useState<null | UserCallsResponse>(null)

  React.useEffect(() => { fetchOrders() }, [])

  const fetchOrders = async () => {
    const calls = await fetch(apiURI + '/users/calls')
  }

  return (
    <div className={styles.history}>
      <h1>История</h1>
      {orders
        ? orders.map((call, i) => <LazyCallLoadingWrapper userCall={call} i={i} key={i} />)
        : <Skeleton />
      }
    </div>
  )
}

// The idea is to load only these callIDs that are rendered on screen
function LazyCallLoadingWrapper(props: { i: number, userCall: UserCallsResponse[number] }) {
  const wrapperRef: any = React.useRef<HTMLDivElement>()
  const [isLoading, setIsLoading] = React.useState(false)
  const onScreen: boolean = useOnScreen<HTMLDivElement>(wrapperRef, "-300px")

  React.useEffect(() => {
    if(!isLoading) setIsLoading(true)
  }, [onScreen])

  React.useEffect(() => {
    if(!isLoading) return
    console.log('Yes im here!', props.i, props.userCall)
  }, [isLoading])

  return (
    <div ref={wrapperRef} className={styles.orderSkeleton}>

    </div>
  )
}