import styles from './styles.module.css'
import { Meetup } from '../../data'
import { MeetupItem } from './MeetupItem'

interface Props {
  meetups: Meetup[]
}
export const MeetupList = ({ meetups }: Props) => {
  return (
    <ul className={styles.list}>
        {meetups.map(
          meetup => <MeetupItem key={meetup.id} meetup={meetup} />    
        )}
    </ul>
  )
}