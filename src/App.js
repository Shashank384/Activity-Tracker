import React from 'react';
import Header from './components/Header';
import Users from './components/Users';
import testData from './server/test.json';
import UserModal from './components/UserModal';
import './App.css';
import { useState } from 'react';

function App() {

  const subtitle = "Track the activities of Members"
  const members = testData.members;
 
  const [selectedUser, setUser] = useState(undefined);
  
  const handlepick = (id) => {
    setUser(id);
  }
  const handleClearSelectedOption = () =>{
    setUser(undefined);
  }
  return (
    <div>
      <Header subtitle={subtitle}/>
      <div className="container">
        <div className="widget">
          <Users key={members.id} members={members} handlepick={handlepick}/>
        </div>
      </div>
      <UserModal selectedUser={selectedUser} handleClearSelectedOption={handleClearSelectedOption} />
    </div>
  );
}

export default App;
