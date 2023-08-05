
import { useState } from 'react';
import AddContacts from './AddContacts';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';


function App() {
  const[contacts,setContacts]=useState([])
  // const contacts=[
  //   {
  //     id:"1",
  //     name:"Adarsh",
  //     email:"adarshrg1998@gmail.com"
  //   },
  //   {
  //     id:"2",
  //     name:"abhi",
  //     email:"abhi1998@gmail.com"
  //   },
  //   {
  //     id:"3",
  //     name:"shaaji",
  //     email:"shaaji1998@gmail.com"
  //   }
  // ]
  const addContactHandler=(contact)=>{
    
  }
  return (
    <div className="ui container">
 <Header/>
 <AddContacts addContactHandler={addContactHandler} />
 <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
