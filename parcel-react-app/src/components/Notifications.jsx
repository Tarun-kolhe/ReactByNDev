import "./Notifications.css"


const Notifications =(props)=>{

    const parent_cont= props.type==="warning" ? "parent_cont_warn" : "parent_cont_succ"
    const message_not= props.type==="warning" ? "message_not_warn" : "message_not_succ"

    return(

        <div className={parent_cont}>
          <div className={message_not}>
            {props.Notification}
          </div>
        </div>
    )
}

export default Notifications;
