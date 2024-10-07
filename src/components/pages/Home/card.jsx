import React from "react";
class Card  extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
                <div id='card'>
                    <img className="card2" src={this.props.image}></img>
                    <h1 className="card3">{this.props.city}</h1>
                    <h3 className="card3">{this.props.description}</h3>
                </div>
            </>
        )
    }
}
export default Card;