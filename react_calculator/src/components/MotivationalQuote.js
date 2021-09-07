import React, {Component} from 'react';
import "./MotivationalQuote.css";
class MotivationalQuote extends Component {
    render(){
        return(
            <div className="MotivationalQuote">
                {this.props.data}
            </div>
        );
    }
}

export default MotivationalQuote;