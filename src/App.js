import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
// import Store from './components/Store/Store';
import Test from './components/Store/Test';
import './App.css';

function App() {

  return (
    <div className="App">
      {/* router to control page switching */}
      <Router>
        {/* Header component */}
        <Header/>
        {/* tmp home page display controller */}
        {/* {display ? <Home/> : null} */}

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/dininghalls/:id" component={Test} />

          {/* switch to Arnold 
          {/* <Route path="/Arnold">
            {/* <Store name="Arnold" api="http://localhost:8000/diningHalls"/> 
            <Test api="http://localhost:8000/diningHalls"/>
          </Route>

           switch to ICCL 
          <Route path="/ILLC">
            {/* <Store name="ILLC" api="http://localhost:8000/diningHalls"/> 
            <h1>ILLC</h1>
          </Route>*/}

          <Route path="*">
            <h1>404</h1>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
