import styles from './styles.module.scss'
import cx from 'classnames'

export default function Button(props: { children: React.ReactNode, className?: string, variant?: 'primary' | 'secondary' } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { children, className, variant, ...buttonProps } = props
  return (
    <button 
      className={
        cx(styles.button, { 
          [styles.primary]: (variant ?? 'primary') === 'primary',
          [styles.secondary]: variant === 'secondary',
        }, className)
      } {...buttonProps}
    >
      {children}
    </button>
  )
}