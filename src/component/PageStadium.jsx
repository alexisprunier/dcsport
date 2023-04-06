import React from "react";
import "./PageStadium.css";
import Match from './dcs/Match.jsx';

export default class PageStadium extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            matches: [
                {
                    "opponent1": "Real madrid",
                    "opponent2": "Bayern Munich",
                    "drawable": true
                }
            ],
        }
    }
   
    render() {
        return (
            <div className="PageWhitePaper">
                {this.state.matches.map(m => {
                    return (
                        <Match
                            info={m}
                        />
                    );
                })}
            </div>
        );
    }
}