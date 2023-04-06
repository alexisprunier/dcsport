import React from "react";
import "./Match.css";

export default class Match extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        	opponent1URL: null,
        	opponent2URL: null,
        }
    }
   
    render() {
    	fetch("https://www.google.com/search?q=real+madrid&tbm=isch", {
	        method: "GET",
	        headers: new Headers({
	            Accept: "text/html",
	            'pragma': 'no-cache',
	            'cache-control': 'no-cache',
	            "Access-Control-Allow-Origin": "*",
	            "Allow-Origin": "*",
	            "Cross-Origin": "*",
	        })
	    }).then(response => {
	        return response.text();
	    }).then(jsonBody => {
	    	this.setState({opponent1URL: jsonBody})
	    }).catch(error => {
	    })
    	


        return (
            <div className="Match">
            	<img 
            		src="/img/versus.png"
            		className="Match-vs"
            	/>

            	<div className="Match-opponent1-text">
            		{this.props.info.opponent1}
            	</div>
            	<div className="Match-opponent2-text">
            		{this.props.info.opponent2}
            	</div>
            </div>
        );
    }
}