import styles from './styles.module.css'

interface Props {
  cancel: () => void
}

export const Backdrop = ({cancel}: Props) => {
  return (
    <div className={styles.backdrop} onClick={cancel} /> 
  )
}