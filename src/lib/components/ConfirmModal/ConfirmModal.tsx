import styles from './styles.module.css'

interface Props {
  confirm: () => void
  cancel: () => void
  confirmText: string
}
export const ConfirmModal = ({ confirm, cancel, confirmText }: Props) => {
 
  return ( 
    <>
      <div className={styles.modal}>
        <p>Are you sure?</p>
        <button 
          className={styles.btn_alt}
          onClick={cancel}
        >Cancel</button>
        <button 
          className={styles.btn}
          onClick={confirm}
        >{confirmText}</button>
      </div>
      <div className={styles.backdrop} onClick={cancel} /> 
    </>
  )
}
