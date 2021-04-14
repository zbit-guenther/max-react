import { useHistory } from "react-router-dom"
import { NewMeetupForm } from "../components"
import { Meetup } from "../data"

export const NewMeetup = () => {
 
  const history = useHistory()

  const handleAddMeetup = (meetup: Meetup) => {
    fetch(
      'https://react-max-meetups-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetup),
        headers: {
          'Content-Type': 'application/json'
        } 
      }
    ).then(() => {
      history.replace('/')
    })
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </section>
  )
}
