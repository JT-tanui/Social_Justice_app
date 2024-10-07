import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import PetitionDetailsPage from './components/PetitionDetailsPage';
import UserDashboard from './components/UserDashboard';
import ForumPage from './components/ForumPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
// import MessagesPage from './components/MessagesPage';
// import ProfilePage from './components/ProfilePage';
// import RegisterPage from './components/RegisterPage';
// import SearchPage from './components/SearchPage';
// import SettingsPage from './components/Setting'; 

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/petition/:id" component={PetitionDetailsPage} />
        <Route path="/dashboard" component={UserDashboard} />
        <Route path="/forum/:petitionId" component={ForumPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/login" component={LoginPage} />
        {/* <Route path="/messages" component={MessagesPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/settings" component={SettingsPage} /> */}
        <Route path="*" component={() => <h1>404 Not Found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;