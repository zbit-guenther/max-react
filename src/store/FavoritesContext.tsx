import { createContext, PropsWithChildren, useState } from 'react'
import { Meetup } from '../data'

export type ContextType = {
  favorites: Meetup[],
  totalFavorites: number,
  addFavorite: (NewMeetup: Meetup) => void,
  removeFavorite: (meetupId: string) => void,
  isFavorite: (meetupId: string) => boolean,
}

const initialFavorites: Meetup[] = []
export const FavoritesContext = createContext<ContextType>({
  favorites: initialFavorites,
  totalFavorites: 0,
  addFavorite: (NewMeetup: Meetup) => {},
  removeFavorite: (meetupId: string) => {},
  isFavorite: (meetupId: string): any => {},
})


interface Props {}
export const FavoritesContextProvider = (
  { children }: PropsWithChildren<Props>
) => {

  const [userFavorites, setUserFavorites] = useState<Meetup[]>([])

  const handleAddFavorite = (newFavorite: Meetup): void => {
    setUserFavorites(
      // a function updates the state immediately !!
      (prevUserFavorites) => prevUserFavorites.concat(newFavorite)
    )
  }

  const handleRemoveFavorite = (meetupId: string) => {
    setUserFavorites(
      // a function updates the state immediately !!
      (prevUserFavorites) => prevUserFavorites.filter(
        meetup => meetup.id !== meetupId
      )
    )
  }

  const handleIsFavorite = (meetupId: string) => userFavorites.some(
    meetup => meetup.id === meetupId
  )

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
    isFavorite: handleIsFavorite,
  }

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  )
}