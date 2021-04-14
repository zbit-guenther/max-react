import { PropsWithChildren } from 'react'
import { MainNavigation } from '../../components'
import styles from './styles.module.css'

interface Props {}
export const Layout = ({children}: PropsWithChildren<Props>) => {
  return (
    <div>
       <MainNavigation />
       <main className={styles.main}>
          {children}
       </main>
    </div>
  ) 
}