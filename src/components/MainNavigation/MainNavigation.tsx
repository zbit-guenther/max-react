import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { FavoritesContext } from '../../store'

export const MainNavigation = () => {
  const ctx = useContext(FavoritesContext)

  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li><Link to="/">All Meetups</Link></li>
          <li><Link to="/new-meetup">New Meetup</Link></li>
          <li><Link to="/favorites">
            Favorites
            <span className={styles.badge}>{ctx.totalFavorites}</span>  
          </Link></li>
        </ul>
      </nav>
    </header>
  )
}