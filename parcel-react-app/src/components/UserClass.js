
import React from "react";
import "./Aboutus.css"
import ChildClassComp from "./ChildClassComp"
import UserContext from "../utils/Custom Hooks/UserContext"


class UserClass extends React.Component{


    constructor(props){
      super(props);
      console.log("contructor ")
     
      this.state={
        count:0,
      };
    }
    componentDidMount(){
        console.log("component did mount ")
    }
  

    render(){
        console.log("render ")
        const {email,phone}=this.props
        return(
          <UserContext.Consumer>
            {(value)=>{
            return( <div className="cont-contact-us">
             <h2>USER NAME : {value.UserName}  </h2>   
             <h2>CONTACT US  </h2>
             <h3>EMAIL : {email} </h3>
             <h3>PHONE : {phone} </h3>  
             <button onClick={(()=>{
                this.setState({
                    count:this.state.count+1,
                })
             })}>{this.state.count}</button>
             <ChildClassComp userName="second"/>
             </div>
            )
            }}
             
          </UserContext.Consumer>
         
        )
    }
}

export default UserClass;