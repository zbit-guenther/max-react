import { useState, useEffect } from 'react'
import { Meetup } from '../data'
import { MeetupList } from '../components/meetups'

export const AllMeetups = () => {

  const [loading, setLoading] = useState(true)
  const [meetups, setMeetups] = useState<Meetup[]>([])

  useEffect(() => {
    setLoading(true)
    fetch(
      'https://react-max-meetups-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
      return response.json()
    }).then(data => {
      const loadedMetups: Meetup[] = []
      console.log(data)
      for (const key in data) {
        const meetup = { ...data[key], id: key }
        loadedMetups.push(meetup)
      }

      console.log(loadedMetups)
    
      setLoading(false)
      setMeetups(loadedMetups)
    })  
  }, [])

  if (loading) {
    return <div>Loading ...</div>
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  )
}
