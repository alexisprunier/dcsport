import React from "react";
import "./Menu.css";

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
    }
   
    render() {
        return (
            <div className="Menu">
                <div 
                    className={"Menu-item" + (this.props.selectedMenu == "STADIUM" ? "-selected": "")}
                    onClick={() => this.props.changeMenu("STADIUM")}>
                    <i class="fas fa-football-ball"></i>
                </div>
                <div 
                    className={"Menu-item" + (this.props.selectedMenu == "PROFILE" ? "-selected": "")}
                    onClick={() => this.props.changeMenu("PROFILE")}>
                    <i class="fas fa-notes-medical"></i>
                </div>
                <div 
                    className={"Menu-item" + (this.props.selectedMenu == "WHITE_PAPER" ? "-selected": "")}
                    onClick={() => this.props.changeMenu("WHITE_PAPER")}>
                    <i class="fas fa-toilet-paper"></i>
                </div>
            </div>
        );
    }
}