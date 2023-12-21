import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-pe6bpo1rduolvs02.jp.auth0.com"
    clientId="529INTHwKB1GyGKZR4xdfdETlV6QvYzz"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <GithubProvider>
        <App />
      </GithubProvider>
    </BrowserRouter>
  </Auth0Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
