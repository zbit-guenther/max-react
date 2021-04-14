import { useContext } from 'react'
import { FavoritesContext } from '../store'
import { MeetupList } from '../components'

export const Favorites = () => {
  const ctx = useContext(FavoritesContext)

  const content = ctx.totalFavorites === 0 ? (
    <p>You got no favorites yet. Add some?</p>
  ):(
    <MeetupList meetups={ctx.favorites} />  
  )

  return (
    <div>
      <h1>My Favorites</h1>
      {content}  
    </div>
  )
}