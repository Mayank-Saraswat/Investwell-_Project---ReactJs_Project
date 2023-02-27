import React from 'react';
import English from "./EngLang";
import Hindi from './HindiLang';

class MyClass extends React.Component{
    constructor(){
        super();
        this.state = {count: 0,
            greet: true
        };
    }

    // increment = () =>{
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    // decrement = () =>{
    //     if(this.state.count > 0)
    //     this.setState({
    //         count: this.state.count - 1
    //     });  
    // }

    inDec(value) {
        this.setState({
            count: value ===1 ? this.state.count+1 : (this.state.count === 0 ? 0 : this.state.count-1) 
        })
    }

    reset = () =>{
        this.setState({
            count: 0
        });
    }

    change = () =>{
        this.setState({
            greet:!this.state.greet
        })
    }

    render(){
        return( 
        <div className='class'>
            <h3>Counter by Class</h3>
            <h2>Count: {this.state.count} </h2>
        <button className='btn' onClick={()=>this.inDec(1)}>Increment</button>
        <button className= 'btn' onClick={()=>this.inDec(0)}>Decrement</button>
        <button className= 'btn' onClick={this.reset}>Reset</button>
        <h3>{this.state.greet?<English/> : <Hindi/>}</h3>
            <button className='btn' onClick= {this.change}>Change Language</button>
        </div>
        )
    }
}

export default MyClass;