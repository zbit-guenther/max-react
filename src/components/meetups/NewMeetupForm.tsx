import { useRef } from 'react'
import { Meetup } from '../../data'
import { Card } from '../../ui'
import styles from './newMeetup.module.css'



interface Props{
  onAddMeetup: (meetup: Meetup) => void
}
export const NewMeetupForm = ({onAddMeetup}: Props) => {
  const titleRef = useRef<HTMLInputElement | null>(null)
  const imageRef = useRef<HTMLInputElement | null>(null)
  const addressRef = useRef<HTMLInputElement | null>(null)
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null)
  
  const handleSubmit = (e: any) => {
    e.preventDefault()
    const id = ''
    const title = titleRef.current!.value
    const image = imageRef.current!.value
    const address = addressRef.current!.value
    const description = titleRef.current!.value
    const meetup = { id, title, image, address, description }
    onAddMeetup(meetup)
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Meetup Title</label>
          <textarea id="description" required rows={5} ref={descriptionRef}/>
        </div>
        <div className={styles.action}>
          
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}