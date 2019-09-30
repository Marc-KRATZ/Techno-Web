import React,{ Component } from 'react';
import base from '../base';


class Hobbies extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hobbies : {
                hobbies0 : 'badminton',
                hobbies1 : 'piscine'
            }
        };
    }
    
    removeHobby(key){
        const hobbies = {...this.state.hobbies};
        hobbies[key] = null;
        this.setState({hobbies});
    }

    addHobby(){
        const hobbies = {...this.state.hobbies};
        const timestamp = Date.now();

        hobbies[`hobby-${timestamp}`] = this.input.value;

        this.setState({hobbies});
        console.log(this.state.hobbies)
    }

    list() {
        // iterateur sur les proprietes de l'objet 
        let list = Object.keys(this.state.hobbies).map((key, index) => {

        // key = element courant (propriete courante de l'objet)
    
        const hobby = this.state.hobbies[key];
    
        const liStyle = {
            backgroundColor:index % 2 === 0 ? 'lightpink' : 'red'
        };
            return <li key={key} style={liStyle} onClick={() => this.removeHobby(key)}>{hobby}</li>
        });

        return list
    }

    componentWillMount() {
        //alert("toto")
        // this runs right before the <App> is rendered
        this.ref = base.syncState("hobbies", {
            context: this,
            state: 'hobbies'
        });
    }
  
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    render(){
        const { hobbies } = this.state
        return (
        <div>
            <div className="test">
                {this.list()}
            </div>
            <input 
					type="text" 
					ref={(input) => this.input = input}
					
					/>
				<button onClick={() => this.addHobby()}>Add Hobby</button>
      
        </div>
        )
    }
}

export default Hobbies