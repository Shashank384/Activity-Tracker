import React from 'react';
import User from './User';


const Users = (props) =>  {

return (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Members List</h3>
        </div>
        {props.members.map((member, index) => (
            <User
            key={member.id}
            memberList={member}
            count={index +1}
            handlepick={props.handlepick}/>   
        ))}
    </div>    
)
}

export default Users
