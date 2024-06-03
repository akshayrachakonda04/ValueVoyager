import { Switch, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar.js';
import Home from './components/Home/home.js';
import Login from './components/Login.js';
import RegistrationForm from './components/RegistrationForm.js';
import Payment from "./components/Payment/payment.js";
import './App.css'
import CataloguePage from "./components/CataloguePage/catloguePage.js";
import spares from './components/spares/spares.js';
import CarPredict from "./components/Carpredict/carpredict.js";

const App=()=>(
  <>
  <NavigationBar/>
  <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path='/login' component={Login}/>
      <Route exact path='/spares' component={spares}/>
      <Route exact path="/cars" component={CataloguePage}/>
      <Route exact path="/payments" component={Payment}/>
      <Route exact path='/RegistrationForm' component={RegistrationForm}/>
      <Route exact path='/CarPredict' component={CarPredict}/>
  </Switch>
  </>
)

export default App