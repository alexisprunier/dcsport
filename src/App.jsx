import React from "react";
import "./App.css";
import { ethers } from 'ethers';
import Menu from './component/Menu.jsx';
import PageWhitePaper from './component/PageWhitePaper.jsx';
//const DCSportArtifact = require('./../build/contracts/DCSport.json');


export default class App extends React.Component {

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

        //var address = DCSportArtifact["networks"][provider.getNetwork]["address"];
        //var abi = DCSportArtifact["abi"];

        //this.setState({dcsport: new ethers.Contract(address, abi, signer)});
    }

   
    render() {
        return (
            <div className="App">
                <div className="Logo">
                    DCSport
                </div>
                <div className="Disclaimer">
                    This is a beta version. Consider the risks.
                </div>
                <div className="Version">
                    0.1
                </div>
                <Menu/>
                <div className="PageContent">
                    <PageWhitePaper/>
                </div>
            </div>
        );
    }
    
}