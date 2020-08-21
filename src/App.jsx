import React from "react";
import "./App.css";
import { ethers } from 'ethers';
const DCSportArtifact = require('./../build/contracts/DCSport.json');


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dcsport: null,
        }
    }

    componentDidMount() {
        window.ethereum.enable()
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        var address = DCSportArtifact["networks"][provider.getNetwork]["address"];
        var abi = DCSportArtifact["abi"];

        this.setState({dcsport: new ethers.Contract(address, abi, signer)});
    }

   
    render() {
        return (
            <div className="App">
                {this.state.dcsport.bookmaker}
            </div>
        );
    }
    
}

export default App;
