import React from "react";
import "./Menu.css";

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
    }
   
    render() {
        return (
            <div className="Menu">
                <div className="Menu-item">
                    <i class="fas fa-football-ball"></i>
                </div>
                <div className="Menu-item">
                    <i class="fas fa-notes-medical"></i>
                </div>
                <div className="Menu-item">
                    <i class="fas fa-toilet-paper"></i>
                </div>
            </div>
        );
    }
}