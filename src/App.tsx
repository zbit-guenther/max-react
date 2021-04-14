import { Route, Switch } from 'react-router-dom'
import { AllMeetups, Favorites, NewMeetup} from './pages'
import { Layout } from './ui'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <AllMeetups />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favorites">
          <Favorites />  
        </Route> 
      </Switch>
    </Layout>
  )
}
export default App
