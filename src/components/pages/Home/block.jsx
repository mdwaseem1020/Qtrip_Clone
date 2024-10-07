import React,{Component} from "react";
export default class Block extends Component{
    render()
    {
        return(
            <div id="block">
                <h1>Welcome to QTrip</h1>
                <p>Explore the world with fantastic places to venture around</p>
                <input type="text" placeholder="Search a city" />
            </div>
        )
    }
}