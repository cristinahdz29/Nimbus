import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";
import Login from "./components/Login";
import Register from "./components/Register";
import Weather from "./components/Weather";
import Favorites from "./components/Favorites";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from "./store/reducer"
import getCityFromCoordinates from "./components/getCityFromCoordinates";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            {/* <Route component={App} path="/app" exact></Route>
            <Route component={Login} path="/login" exact></Route>
            <Route component={Register} path="/register"></Route> */}
            <Route component={Weather} path="/" exact></Route>
            {/* <Route component={Favorites} path="/favorites"></Route>
            <Route component={getCityFromCoordinates} path="/test"></Route> */}
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
