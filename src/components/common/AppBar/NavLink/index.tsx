import styles from './styles.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'classnames'

export default function NavLink(props: { href: string, matchPaths?: string[] | string, children: React.ReactNode }) {
  const router = useRouter()
  const isActive = props.matchPaths
    ? Array.isArray(props.matchPaths) ? props.matchPaths.includes(router.pathname) : router.pathname === props.matchPaths
    : props.href === router.pathname

  return (
    <Link href={props.href} className={cx(styles.link, { [styles.active]: isActive })}>
      {props.children}
    </Link>
  )
}