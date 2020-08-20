import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { unregister } from './registerServiceWorker';
import config from "./config";
import Amplify from "aws-amplify";
import {Provider as AlertProvider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

unregister();

Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    },
});

let alertOptions = {
    position: "bottom center",
    timeout: 5000,
    offset: "30px",
    transition: "fade",
    zIndex: 1000,
    containerStyle: {
        width: "500px",
    }
};

ReactDOM.render(
    <AlertProvider template={AlertTemplate} {...alertOptions}>
        <App />
    </AlertProvider>,
    document.getElementById('root')
);
