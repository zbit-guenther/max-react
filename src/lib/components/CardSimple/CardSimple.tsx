import { useState } from 'react'
import { ConfirmModal } from '../ConfirmModal'
import styles from './styles.module.css'

interface Props {
  text: string
  actionText: string
  action: () => void
  confirmAction: boolean
}
export const CardSimple = ({
  text, action, actionText, confirmAction 
}: Props) => {
  
  const [show, setShow] = useState<boolean>()

  const cancel = () => setShow(false)

  const handleClick = () => {
    if (confirmAction) {
      setShow(true)
    } else {
      cancel()
    }
  } 
 
  const handleAction = () => {
    setShow(false)
    action()
  }
  return (
    <div className={styles.card}>
      <h2>{text}</h2>
      <div className="actions">
        <button 
          className={styles.btn} 
          onClick={handleClick}
        >{actionText}</button>
      </div>
      {show && 
        <ConfirmModal 
          confirm={handleAction} 
          cancel={cancel} 
          confirmText={actionText}
        />
      }
    </div>
  )
}