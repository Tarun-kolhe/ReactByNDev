//using react 
// {} this is atribute to a tag 

/*
* 
   <div id="parent">'
          <div id="child">
          <h1> hey I am H1 Tag </h1>
          </div>
   </div>
   
   do above using react 
*
*/

const parentdiv =
     React.createElement("div", { id: "parent" }, 
     React.createElement("div", { id: "child" },
        [ React.createElement("h1", { id: "head" }, "Hey I am H1 Tag"), 
        React.createElement("h2", { id: "head2" }, "Hey I am H2 Tag")]
    ))


const head = React.createElement("h1", { id: "head" }, "hello from react ")
const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(parentdiv)
root.render(parentdiv)