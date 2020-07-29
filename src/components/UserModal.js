import React, {useState} from 'react';
import Modal from 'react-modal';
import testData from '../server/test.json'
import moment from 'moment';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";


const UserModal = (props) => {
 
  const [startDate, setStartDate] = useState(new Date());
  
  const selectedDate = moment(startDate.valueOf()).format("MMM D YYYY");

  const membersList = testData.members.filter(member=> {
    return member.id === props.selectedUser
  }) 
  
  return(
  <Modal
    isOpen={!!props.selectedUser}
    onRequestClose = {props.handleClearSelectedOption}
    contentLabel="Selected User"
    closeTimeoutMS={200}
    className="modal"
    ariaHideApp={false}
    >
    
    <div>
      {membersList.map(function(member,i) {
        return <div className="modal__body" key={i}>
            <h4><span className="title">Name : </span> {member.real_name}</h4> 
            <p><span className="title">Id : </span> {member.id}</p>
              
            <p><span className="title">Location : </span> {member.tz}</p>
              
              <div style={{textAlign:"center", marginBottom: "10px", width:""}}>
                <DatePicker className="react-datepicker" 
                    selected={startDate} 
                    onChange={date => setStartDate(date)} 
                    withPortal
                   
                    />
              </div>
          
              <div style={{textAlign: "center"}}>
                {
                  member.activity_periods
                    .filter(period => moment(period.start_time, "MMM DD YYYY").isSame(moment(selectedDate,"MMM DD YYYY")))
                    .map(prop =>
                      <p>
                        Start Time: {prop.start_time.substr(12)}
                        <br></br>
                        End Time: {prop.end_time.substr(12)}
                      </p>
                    ) && (<p>No activity for that day</p>)
                }
              </div>
              
          </div>
          
        }
        
      )}
         
  </div>
    
    <button 
        style={{marginLeft: "35%", fontSize: "20px"}}
        className="button"
        onClick={props.handleClearSelectedOption}
        >Okay
    </button>
    
  </Modal>
  
)

  }
  
export default UserModal;