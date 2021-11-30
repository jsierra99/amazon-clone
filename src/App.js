import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import React, { useEffect } from "react";
import { auth } from "./components/firebase";
import { useStateValue } from "./components/StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

const promise = loadStripe("pk_test_51JpQDWFQE4g4EkJqA2LUAvlkQspwWAdxyFyesypIlfgVV3TZ2qf0vWUOH8O8q7QvL7fDp0xunDIKe7bjHrLhWw7b00vPvoWYCV");

function App() 
{
  const [{}, dispatch] = useStateValue();

  useEffect(() =>
  {
    auth.onAuthStateChanged(authUser => 
      {
        console.log("user is", authUser);

        if(authUser)
        {
          dispatch({
            type: "SET_USER",
            user: authUser
          });
        }
        else
        {
          dispatch({
            type: "SET_USER",
            user: null
          });
        }
      });
  }, []);

  return (
    <Router>
        <div className="app">
          <Switch>
            <Route path="/orders">
              <Header />
              <Orders />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
