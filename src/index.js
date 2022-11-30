import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
// import { Provider } from 'react-redux';
// import { store } from './chronic/Store';





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Auth0Provider
        domain="dev-cujfgun0xuw1xykq.us.auth0.com"
        clientId="x7Bi2OuqBnACpb1oV1twP4YpH5oTCt0y"
        redirectUri={window.location.origin}
    >
        {/* <Provider store={store}> */}
            <App />
        {/* </Provider> */}
    </Auth0Provider>
);


