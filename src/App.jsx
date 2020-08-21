import React from "react";
import "./App.css";
import { ethers } from 'ethers';


class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.ethereum.enable()
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
    }

   
    render() {
        return (
            <div className="App">
                eee
            </div>
        );
    }
    
}

export default App;
