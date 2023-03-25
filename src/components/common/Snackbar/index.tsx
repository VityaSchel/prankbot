// import React from 'react'
// import { Button, Divider, notification, Space } from 'antd'
// import type { NotificationPlacement } from 'antd/es/notification/interface'

// const Context = React.createContext({ name: 'Default' })

// const Snackbar = React.forward(props: {}) {
//   const [api, contextHolder] = notification.useNotification()

//   const openNotification = (placement: NotificationPlacement) => {
//     api.info({
//       message: `Notification ${placement}`,
//       description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
//       placement,
//     })
//   }

//   const contextValue = React.useMemo(() => ({ name: 'Ant Design' }), [])

//   return (
//     <Context.Provider value={contextValue}>
//       {contextHolder}
//     </Context.Provider>
//   )
// }