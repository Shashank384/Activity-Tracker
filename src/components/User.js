import React from 'react';


const User = (props) =>{ 

    const handlepick = () => {
        props.handlepick(props.memberList.id)
    }

    return (
    <div className="user">
        <button className="user__text" onClick={handlepick}>
            {props.count}. {props.memberList.real_name}
        </button>
      
    </div>
)
}

export default User
