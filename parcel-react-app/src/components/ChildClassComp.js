import React from "react";


class ChildClassComp extends React.Component{
 
    constructor(props){
        super(props)
        console.log(this.props.userName+ "constructor child ")
          this.state = {
          apiData: {},
           isLoading: true
          };
    }
    async componentDidMount(){
      
        try{
        const data= await fetch("https://api.github.com/users")
        const res= await data.json();
          console.log(res)

         this.setState({ 
          apiData: res, 
          isLoading: false 
        });
        }
        catch(err){
            console.log("Failed to Fetch the API")
        }

    }

    render(){
        
       const { apiData, isLoading } = this.state;

    if(isLoading) return( <div>Please Wait Data is Loading ....</div>)

        return(
             <div>Child component 
                <div>{this.state.apiData?.login}</div>
                <img src={this.state.apiData?.avatar_url}/>
             </div>    
        )
    }
}

export default ChildClassComp;