import React,{Component} from "react";

export default class Navbar extends Component{
    render()
    {
        return(
            <>
            <nav> 
            <span>QTrip
            </span>
                <ul>
                    <li>Home</li>
                    <li>Explore</li>
                    <li id="Na">Login Here</li>
                    <li><button id="hello">Register</button></li>
                </ul>
            </nav>
            </>
        )
    }
}