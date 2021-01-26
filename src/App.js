import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component = {Home}/>
          <Route path='/services' component={Services}/>
          <Route path='/products' component={Products}/>
          <Route path='/signup' component={SignUp}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
