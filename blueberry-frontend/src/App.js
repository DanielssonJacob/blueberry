import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./components/home/Home"
import Organization from "./components/organization/Organization"
import CompanyDetails from "./components/Company-details/CompanyDetails";
import Registration from "./components/Registration/Registration";
import FullSearchResult from "./components/individual/FullSearchResult";
import IndividualPage from "./components/individual/IndividualPage";


function App() {

  return (
    <Router>
      <div>
        <ul hidden>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/individual">Individual</Link>
          </li>
          <li>
            <Link to="/organization">Organization</Link>
          </li>
          <li>
            <Link to="/searchresult/Stockholm">FullSearchResult</Link>
          </li>
          <li>
            <Link to="/company">companyDetails</Link>
          </li>
          <li>
            <Link to="/registration">Company Registration</Link>
          </li>
        </ul>

      

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
          <IndividualPage/>
          </Route>
          <Route path="/company/:companyname" component={CompanyDetails}/>
          <Route path="/searchresult/:city" component={FullSearchResult}/>
          <Route path="/individual">
          <IndividualPage/>
          </Route>
          <Route path="/organization">
            <Organization />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
        </Switch>
      </div>
    </Router>);
}

export default App;
