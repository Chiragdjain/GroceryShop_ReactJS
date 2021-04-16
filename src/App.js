
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/product/:name">
          <Product />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
