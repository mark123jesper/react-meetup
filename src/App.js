import './App.css';
import { Route, Switch } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import Layout from './components/Layout/Layout';

function App() {
  //localhost:3000
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>

        <Route path="/favorites">
          <Favorites />
        </Route>

        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
