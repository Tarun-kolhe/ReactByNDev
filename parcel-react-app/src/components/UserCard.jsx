import "./Usercards.css"
const userCard= (props)=>{
  const{
    name,
    username,
    email,
    phone,
    website
  }=props?.userRes


  console.log(props)
    return(
        <>
         <ul className="card-container">
            <li><strong>Name:</strong> {name}</li>
            <li><strong>username:</strong> {username}</li>
            <li><strong>email: </strong>{email}</li>
            <li> <strong>address: </strong>{props?.userRes?.address?.city}</li>
            <li><strong>phone: </strong>{phone}</li>
            <li><strong>phone: </strong>{website}</li>
            <li><strong>company: </strong>{props?.userRes?.company?.name}</li>
           </ul>
        </>
          
           
      
    )
}

export default userCard;