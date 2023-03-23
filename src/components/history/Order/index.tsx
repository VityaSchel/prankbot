import React from 'react'
import styles from './styles.module.scss'
import cx from 'classnames'

import StartingCallIcon from './assets/statuses/startingCall.svg'
import CallEndedIcon from './assets/statuses/callEnded.svg'
import CallingIcon from './assets/statuses/calling.svg'
import CouldntCallIcon from './assets/statuses/couldntCall.svg'
import ErrorIcon from './assets/statuses/error.svg'

export type OrderStatus = 'startingCall' | 'calling' | 'callEnded' | 'error' | 'couldntCall'
export type OrderData = {
  title: string
  phone: string
  date: Date
  status: OrderStatus
}

export default function Order(props: { order: OrderData }) {
  return (
    <div className={styles.order}>
      <div className={styles.leftStandalone}>
        <PrankName>{props.order.title}</PrankName>
        <PrankDate date={props.order.date} />
      </div>
      <PrankPhone>{props.order.phone}</PrankPhone>
      <PrankStatus status={props.order.status} />
    </div>
  )
}

const PrankName = (props: { children: string }) => <h2 className={styles.title}>{props.children}</h2>
const PrankDate = (props: { date: Date }) => (
  <span className={styles.date}>Создан {
    Intl.DateTimeFormat('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(props.date)
  }</span>
)
const PrankPhone = (props: { children: string }) => <span className={styles.phone}>{props.children}</span>
const PrankStatus = (props: { status: OrderStatus }) => {
  return (
    <span 
      className={cx(styles.status,
        {
          [styles.startingCall]: props.status === 'startingCall',
          [styles.calling]: props.status === 'calling',
          [styles.callEnded]: props.status === 'callEnded',
          [styles.error]: props.status === 'error',
          [styles.couldntCall]: props.status === 'couldntCall',
        }
      )}
    >
      {{
        'startingCall': StartingCallIcon,
        'calling': CallingIcon,
        'callEnded': CallEndedIcon,
        'error': ErrorIcon,
        'couldntCall': CouldntCallIcon,
      }[props.status]}
      {{
        'startingCall': 'Начинаем звонок',
        'calling': 'Звоним',
        'callEnded': 'Звонок завершен',
        'error': 'Ошибка',
        'couldntCall': 'Недозвон',
      }[props.status]}
    </span>
  )
}
