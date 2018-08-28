import React , {Component} from 'react';


class Welcom extends Component {
    render() {
        return(   
            <h1>hello every {this.props.name} </h1>  
          
        );
    }
}
export default Welcom;