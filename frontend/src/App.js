import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import PetitionDetailsPage from './components/PetitionDetailsPage';
import UserDashboard from './components/UserDashboard';
import ForumPage from './components/ForumPage';
 
function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/petition/:id" component={PetitionDetailsPage} />
      <Route path="/dashboard" component={UserDashboard} />
      <Route path="/forum/:petitionId" component={ForumPage} />
      <Route path="*" component={() => <h1>404 Not Found</h1>} />
    </Switch>
  );
}

export default App;