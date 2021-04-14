import styles from './styyles.module.css'
import { PropsWithChildren } from 'react'

interface Props {}
export const Card = ({children}: PropsWithChildren<Props> ) => {
  return (
    <div className={styles.card}>
      {children}
    </div>
  )
}