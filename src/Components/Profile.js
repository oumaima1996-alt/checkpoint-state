//import React, {Component} from 'react'
import React, { Component } from 'react'
import myImage from '../icon.png'

export default class Profile extends Component {
    constructor(){
        super();
        this.state ={
            Person: {
                fullName: "Soltani Oumaima",
                bio: "i love anime",
                imgSrc: myImage,
                profession: "engineer"
              },
              timer:0,
              interval :0,
              show: true
        } 
    }
    handleShowPerson = () => {
        this.setState({
          ...this.state,
          show: !this.state.show
        });
      };
      componentDidMount() {
        console.log("Component Did Mount")
    
        this.setState()
        interval:setInterval(() =>this.setState({timer:this.state.timer+1}),1000)

    }
    
    
    componentDidUpdate(){
        console.log('component did update')
    }
    componentWillUnmount(){
        console.log("component will unmount")
        clearInterval(this.state.interval)
    }
    

    render() {
        return (
            <div className="container">
                {this.state.show && (
                <>
                    <h1>{this.state.Person.fullName}</h1>
                    <h1>{this.state.Person.bio}</h1>
                    <img src={this.state.Person.imgSrc} alt="Oumaima"></img>
                    <h1>{this.state.Person.profession}</h1>
                    <br></br>
                </>
        )}

                
                
                <br/>
                <p>{this.state.timer}</p>
                
            </div>
        )
    }
}
