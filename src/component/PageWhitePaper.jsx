import React from "react";
import "./PageWhitePaper.css";
import {CanvasJSChart} from 'canvasjs-react-charts';

export default class PageWhitePaper extends React.Component {

    constructor(props) {
        super(props);
    }
   
    render() {

        var chart1Options = {
            backgroundColor: "transparent",
            title:{
                fontColor: "white",
                text: "Total amount of DAI bet",
                      
            },
            axisX: {               
                lineColor: "white",
                labelFontColor: "white",
            },
            axisY: {
                lineColor: "white",
                labelFontColor: "white",
            },
            data: [              
            {
                lineDashType: "dot",
                type: "column",
                dataPoints: [
                    { label: "Real Madrid",  y: 400  },
                    { label: "Draw", y: 250  },
                    { label: "Bayern München", y: 350  }
                ]
            }
            ]
        };

        var chart2Options = {
            backgroundColor: "transparent",
            title:{
                fontColor: "white",
                text: "Amount of bettors",
                      
            },
            axisX: {               
                lineColor: "white",
                labelFontColor: "white",
            },
            axisY: {
                lineColor: "white",
                labelFontColor: "white",
            },
            data: [              
            {
                lineDashType: "dot",
                type: "column",
                dataPoints: [
                    { label: "Real Madrid",  y: 35  },
                    { label: "Draw", y: 20  },
                    { label: "Bayern München", y: 40  }
                ]
            }
            ]
        };

        var chart3Options = {
            backgroundColor: "transparent",
            title:{
                fontColor: "white",
                text: "Distribution of the stack (in %)",
                      
            },
            data: [              
            {
                type: "pie",
                startAngle: 240,
                indexLabelLineColor: "white",
                labelFontColor: "white",
                dataPoints: [
                    { label: "Default distribution",  y: 95  },
                    { label: "SPORT stackers", y: 2  },
                    { label: "Early bettors", y: 2  },
                    { label: "Bookmaker", y: 1  }
                ]
            }
            ]
        };

        var chart4Options = {
            backgroundColor: "transparent",
            title:{
                fontColor: "white",
                text: "Distribution of the SPORT tokens (in #)",
                      
            },
            data: [              
            {
                type: "pie",
                startAngle: 240,
                indexLabelLineColor: "white",
                labelFontColor: "white",
                dataPoints: [
                    { label: "DCSport team",  y: 500000  },
                    { label: "Bettors", y: 300000  },
                    { label: "Partnership and community", y: 200000  }
                ]
            }
            ]
        };

        return (
            <div className="PageWhitePaper">

                <h1>White Paper</h1>
                
                <h2>Why DCSport?</h2>
                <h2>How does it work?</h2>
                <h2>What's the <img src="/img/SPORT.png" style={{"width": 36}}/> token  and how can I get it?</h2>
                <h2>Why should I become bookmaker?</h2>
                <h2>"Early bettors" stack distribution</h2>
                <h2>"SPORT stacker" stack distribution</h2>

                <h1>Why DCSport?</h1>
                <p>DCSport, for DeCentralized Sport, is a application using the Ethereum blockchain to allow decentralized application lovers to bet on their favourite sports.</p>
                <p>This brings major differences compared to the traditionnal platforms:</p>
                <ul>
                    <li>First of all, the odds are <b>fully determined by the crowd</b>. There is no algorithm to calculate the most efficient odd for a specific result. Every single odd evolves along the betting time and this can open amazing opportunities for the experts of sport gambling.</li>
                    <li>Then, there is <b>no middleman</b> to take a part of the stack. Indeed, The port is fully distributed to the winners and the bookmakers.</li>
                    <li>You can <b>become the organizer</b> of betting events, accordingly called bookmaker. You then can receive a part of the pot from the betting session you've created.</li>
                </ul>
                <p>The aim is to incentivised the people by distributing the <img src="/img/SPORT.png" style={{"width": 22}}/> token and create a community of bookmakers. Those bookmaker will make sure that the players get access the betting opportunity they wish!</p>
                

                <h1>How does it work?</h1>
                <p>The bookmaker is able to create a new event betting. He will then instanciate the new event with those 4 pieces of information:</p>
                <ul>
                    <li>The first opponent</li>
                    <li>The second one</li>
                    <li>The starting time of the match</li>
                    <li>Can the match be a draw? (Indeed, quite difficult to bet a draw on a tennis match)</li>
                </ul>
                <p>For example, Read Madrid will play against Bayern Munich on the 7th of October at 9pm UTC.</p>
                <div className="row PageWhitePaper-match">
                    <div className="col-md-2"/>
                    <div className="col-md-3">
                        <img src="https://seeklogo.net/wp-content/uploads/2014/10/real-madrid-logo-preview.png"/>
                    </div>
                    <div className="col-md-2" style={{marginTop: 60}}>
                        <img src="/img/versus.png"/>
                    </div>
                    <div className="col-md-2" style={{marginTop: 55, marginLeft: 25}}>
                        <img src="https://seeklogo.net/wp-content/uploads/2012/04/bayern-munchen-logo.png"/>
                    </div>
                </div>
                <p>With this setup, it is obviously possible to have a draw. So, we have 3 gambling alternatives for this amazing game! Let's assume the following situation:</p>
                <div className="padding">
                    <CanvasJSChart ref="chart1Options" options={chart1Options}/>
                </div>
                <p>So, we have a total mount of 1000 DAI in the stack. Let's look up how many people did bet in each category of betting:</p>
                <div className="padding">
                    <CanvasJSChart ref="chart2Options" options={chart2Options}/>
                </div>
                <p>In our scenario, we will imagine a victory from the Bavarians. So, the system will distribute the stack of 1000 DAI to the 40 winners and the bookmaker of the match. Here is the distribution:</p>
                <div className="padding">
                    <CanvasJSChart ref="chart3Options" options={chart3Options}/>
                </div>
                <p>As we can see, 95% of the stack goes to the winners. The distribution is naturally dictated by the ratio size in the winner pool. 1% of the total pool goes directly to the bookmaker. To finish, the remaining 4% goes to the winner that boosted their odds. There are 2 ways to boost and increase gains:</p>
                <ul>
                    <li>Being amonst <b>the first bettors</b> in the winning pool</li>
                    <li><b>Stack <img src="/img/SPORT.png" style={{"width": 22}}/> tokens</b></li>
                </ul>


                <h1>What's the <img src="/img/SPORT.png" style={{"width": 45}}/> token and how can I get it?</h1>
                <p>The "SPORT" token is the token emitted by DCSport. There is a total of 1 million tokens. This represents use cases for both players and bookmakers.</p>
                <p>Both of the profiles will be able to stake those tokens. On the first hand, the amount stacked will boost the odds for the bettors. On the other hand, the bookmaker will have access to the organisation to initiate matches and collect the reward related to them.</p>
                <p>Here is the representation of the distribution of the token:</p>
                <div className="padding">
                    <CanvasJSChart ref="chart4Options" options={chart4Options}/>
                </div>
                <p>So, 300000 tokens (30%) will be distributed to the active bettors. Indeed, for every DAI injected in a bet, the bettors will receive back as much <img src="/img/SPORT.png" style={{"width": 22}}/> token. This until the stock of 300000 runs out.</p>
                <p>20% of the reserve will be use in a short term to raise initial funds and reward the active member of the community.</p>
                <p>The 1/2 million tokens will be remaining in DCSport's hands for a longer term usage.</p>


                <h1>Why should I become bookmaker?</h1>
                <p>The first reason is because you are a sport lover. :P If you wanna bet on matches that are usually not on the platform, you will create the acces to those bets to yourself and the DCSport community. You can then share it to your friend to bet with or against you. :)</p>
                <p>Also, you can use DCSport to be rewarded. You can create matches and build a community around you. Remember that you receive 1% from the pools of the matches you initiate!</p>


                <h1>"Early bettors" stack distribution</h1>
                <p>As we mentionned earlier, 2% of the total stack of a macth is dedicated to the early bettors of the winning pool.</p>
                <p>The number N is the total of people receiving the stack it is defined by calculating the downwards rounding of the square root of the total number of bettors in the winning pool.</p>
                <p>Then, we calculate P1, the bonus of the first bettor as folow:</p>
                <ul>
                    <li>P1 = SQUAREROOT(N) / TOTAL STACK</li>
                </ul>
                <p>A descending geometric sequence is used to calculate the bonus of the other lucky bettors. To do so, we need to calculate a quotient Q:</p>
                <ul>
                    <li>Q = 1 - (P1 - TOTAL STACK)</li>
                </ul>
                <p>To finish, we just have to apply the final formulae to retrieve the bonus of the bettors in the position n:</p>
                <ul>
                    <li>Pn = Q exp(n-1) * P1</li>
                </ul>
                <p>Here is a calculator to simulate the bonuses.</p>
                <div className="row PageWhitePaper-match">
                    <div className="col-md-4">
                        TOTAL STACK
                    </div>
                    <div className="col-md-4">
                        N
                    </div>
                    <div className="col-md-4">
                        My position
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                        />
                    </div>
                </div>
                <div className="row PageWhitePaper-match">
                    <div className="col-md-10">
                        Total number of bettors receiving a bonus:
                    </div>
                    <div className="col-md-2">
                        8
                    </div>
                    <div className="col-md-10">
                        My bonus: 
                    </div>
                    <div className="col-md-2">
                        140
                    </div>
                </div>


                <h1>"SPORT stacker" stack distribution</h1>
                <p></p>

            </div>
        );
    }
}