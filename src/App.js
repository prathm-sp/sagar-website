import "./App.css";
import "./css/bootstrap.min.css";
import "./css/mdb.min.css";
import "./css/style.min.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/pro-details">
            <Navbar />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
