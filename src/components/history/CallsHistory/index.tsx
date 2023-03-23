import React from 'react'
import styles from './styles.module.scss'
import { UserCallsResponse } from '@/data/ApiDefinitions'
import { useOnScreen } from '@/utils/hooks'
import { Skeleton } from 'antd'
import { apiURI } from '@/data/api'
import { generateAuthorizationHeader } from '@/utils'
import Order, { OrderData, OrderStatus } from '@/components/history/Order'

export default function CallsHistory() {
  const [orders, setOrders] = React.useState<null | UserCallsResponse>(null)

  React.useEffect(() => { fetchOrders() }, [])

  const fetchOrders = async () => {
    const calls = await fetch(apiURI + '/users/calls', {
      headers: generateAuthorizationHeader()
    })
    setOrders([
      {
        callId: 0,
        status: 'in_process'
      },
      {
        callId: 0,
        status: 'in_process'
      },
      {
        callId: 0,
        status: 'done'
      },
      {
        callId: 0,
        status: 'error'
      },
      {
        callId: 0,
        status: 'error'
      },
      {
        callId: 0,
        callRecord: 'https://test.com',
        status: 'done',
      },
      {
        callId: 0,
        status: 'in_process'
      },
      {
        callId: 0,
        status: 'in_process'
      },
      {
        callId: 0,
        status: 'done'
      },
      {
        callId: 0,
        status: 'error'
      },
      {
        callId: 0,
        status: 'error'
      },
      {
        callId: 0,
        callRecord: 'https://test.com',
        status: 'done',
      },
      {
        callId: 0,
        status: 'in_process'
      },
      {
        callId: 0,
        status: 'in_process'
      },
      {
        callId: 0,
        status: 'done'
      },
      {
        callId: 0,
        status: 'error'
      },
      {
        callId: 0,
        status: 'error'
      },
      {
        callId: 0,
        callRecord: 'https://test.com',
        status: 'done',
      },
      {
        callId: 0,
        status: 'in_process'
      },
      {
        callId: 0,
        status: 'in_process'
      },
      {
        callId: 0,
        status: 'done'
      },
      {
        callId: 0,
        status: 'error'
      },
      {
        callId: 0,
        status: 'error'
      },
      {
        callId: 0,
        callRecord: 'https://test.com',
        status: 'done',
      },
      {
        callId: 0,
        status: 'in_process'
      },
      {
        callId: 0,
        status: 'in_process'
      },
      {
        callId: 0,
        status: 'done'
      },
      {
        callId: 0,
        status: 'error'
      },
      {
        callId: 0,
        status: 'error'
      },
      {
        callId: 0,
        callRecord: 'https://test.com',
        status: 'done',
      },
      {
        callId: 0,
        status: 'in_process'
      },
      {
        callId: 0,
        status: 'in_process'
      },
      {
        callId: 0,
        status: 'done'
      },
      {
        callId: 0,
        status: 'error'
      },
      {
        callId: 0,
        status: 'error'
      },
      {
        callId: 0,
        callRecord: 'https://test.com',
        status: 'done',
      },
      {
        callId: 0,
        status: 'in_process'
      },
      {
        callId: 0,
        status: 'in_process'
      },
      {
        callId: 0,
        status: 'done'
      },
      {
        callId: 0,
        status: 'error'
      },
      {
        callId: 0,
        status: 'error'
      },
      {
        callId: 0,
        callRecord: 'https://test.com',
        status: 'done',
      },
    ])
  }

  return (
    <div className={styles.history}>
      <h1>История</h1>
      {orders
        ? (
          <>
            <h3>Активные</h3>
            {orders
              .filter(call => ['in_process', 'in_queue'].includes(call.status))
              .map((call, i) => <LazyCallLoadingWrapper userCall={call} i={i} key={i} />)
            }
            <h3>Завершенные</h3>
            {orders
              .filter(call => ['done', 'error',/*, 'couldnt_call'*/].includes(call.status))
              .map((call, i) => <LazyCallLoadingWrapper userCall={call} i={i} key={i} />)
            }
          </>
        ) : <Skeleton />
      }
    </div>
  )
}

// The idea is to load only these callIDs that are rendered on screen
function LazyCallLoadingWrapper(props: { i: number, userCall: UserCallsResponse[number] }) {
  const wrapperRef: any = React.useRef<HTMLDivElement>()
  const [isLoading, setIsLoading] = React.useState(false)
  const onScreen: boolean = useOnScreen<HTMLDivElement>(wrapperRef, "0px")
  const [orderDetails, setOrderDetails] = React.useState<null | OrderData>(null)

  React.useEffect(() => {
    if(onScreen && !isLoading) setIsLoading(true)
  }, [onScreen])

  React.useEffect(() => {
    if(!isLoading) return
    console.log('Yes im here!', props.i, props.userCall)
    setOrderDetails({
      title: 'Test',
      phone: '+7123456789',
      date: new Date(),
      status: {
        'in_process': 'startingCall',
        'error': 'error',
        'done': 'callEnded'
      }[props.userCall.status] as OrderStatus
    })
  }, [isLoading])

  return (
    <div ref={wrapperRef} className={styles.orderSkeleton}>
      {orderDetails
        ? <Order order={orderDetails} /> 
        : <Skeleton active width={'100%'} paragraph={false} />
      }
    </div>
  )
}