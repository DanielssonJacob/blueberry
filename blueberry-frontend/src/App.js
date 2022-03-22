import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./components/home/Home"
import Organization from "./components/organization/Organization"
import CompanyDetails from "./components/Company-details/companyDetails";
import FullSearchResult from "./components/individual/FullSearchResult";

function App() {
  return (
    <Router>
      <div>
        <ul>
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
            <Link to="/fullsearchresult">FullSearchResult</Link>
          </li>
          <li>
            <Link to="/company">companyDetails</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/company">
            <CompanyDetails></CompanyDetails>
          </Route>
          <Route path="/fullsearchresult">
            <FullSearchResult></FullSearchResult>
          </Route>
          <Route path="/individual">
            <h1>Individual</h1>
          </Route>
          <Route path="/organization">
            <Organization />
          </Route>
        </Switch>
      </div>
    </Router>);
}

export default App;
