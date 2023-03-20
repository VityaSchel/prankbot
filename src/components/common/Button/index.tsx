import styles from './styles.module.scss'
import cx from 'classnames'

export default function Button(props: { children: React.ReactNode, className?: string }) {
  const { children, className, ...buttonProps } = props
  return (
    <button className={cx(styles.button, className)} {...buttonProps}>
      {children}
    </button>
  )
}