import React,{Component} from "react";
import { Link } from "react-router-dom";
import "../Bengalore/child.css"
 export default class GoaCard extends Component{
    constructor(props)
    {
        super(props)
    }
    render()
    {
    return(
    <>
    <Link to={'/Goa/content'}> 
    <div className="card">
        <img className="card-img" src={this.props.src} alt={this.props.h1} />
        <h3 className="card-title">{this.props.h3}</h3>
        <h5 className="card-subtitle">{this.props.h5}</h5>
        <h4 className="card-title">Duration</h4>
        <h6 className="card-subtitle">{this.props.h6}</h6>
        <p>{this.props.p}</p>
        <button id="apple">{this.props.s}</button>
    </div>
    </Link>
    </>
    )
    }
 }