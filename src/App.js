import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Details from './components/Details'

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Switch>
     <Route path="/login">
       <Login />
     </Route>
      <Route path="/details/:id">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Router>
      
     
    </div>
  );
}

export default App;
