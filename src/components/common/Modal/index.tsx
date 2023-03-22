import { Modal as AntModal } from 'antd'
import styles from './styles.module.scss'
import cx from 'classnames'

export default function Modal(props: { 
  open: boolean, onClose: () => any, children: React.ReactNode, className?: string
}) {
  return (
    <AntModal 
      open={props.open}
      footer={null}
      wrapClassName={cx(styles.dialog, props.className)}
      onCancel={props.onClose}
    >
      {props.children}
    </AntModal>
  )
}