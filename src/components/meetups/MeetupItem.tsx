import { useContext } from 'react'
import { Meetup } from '../../data'
import { Card } from '../../ui'
import styles from './styles.module.css'
import { FavoritesContext } from '../../store/FavoritesContext'


interface Props {
  meetup: Meetup
}
export const MeetupItem = ({ meetup }: Props) => {
  const {id, image, title, address, description } = meetup

  const ctx = useContext(FavoritesContext)
  const isFavorite = ctx.isFavorite(id)
  const toggleFavoriteStatus = () => {
    if (isFavorite) {
      ctx.removeFavorite(id)
    } else {
      ctx.addFavorite(meetup)
    }
  }

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={image} alt={title} className={styles.image}/>
          <div className={styles.actions}>
            <button onClick={toggleFavoriteStatus}>
              {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <address>{address}</address>
            <p>{description}</p>
          </div>
          
        </div>
      </Card>
    </li>
  )
}