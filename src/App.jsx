import React from "react";
import "./App.css";
import { ethers } from 'ethers';
import Menu from './component/Menu.jsx';
import PageWhitePaper from './component/PageWhitePaper.jsx';
import PageStadium from './component/PageStadium.jsx';
//const DCSportArtifact = require('./../build/contracts/DCSport.json');


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.changeState = this.changeState.bind(this);

        this.state = {
            selectedMenu: "STADIUM",
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

    changeState(field, value) {
        this.setState({[field]: value});
    }
   
    render() {
        return (
            <div className="App">
                <div className="Logo">
                    <img src="/img/DCSport.png"/>
                </div>
                <div className="Disclaimer">
                    This is a beta version. Consider the risks.
                </div>
                <div className="Version">
                    0.1
                </div>
                <Menu
                    changeMenu={(x) => this.changeState("selectedMenu", x)}
                    selectedMenu={this.state.selectedMenu}
                />
                <div className="PageContent">
                    {this.state.selectedMenu == "STADIUM" ? <PageStadium/> : ""}
                    {this.state.selectedMenu == "PROFILE" ? <PageWhitePaper/> : ""}
                    {this.state.selectedMenu == "WHITE_PAPER" ? <PageWhitePaper/> : ""}
                </div>
            </div>
        );
    }
    
}