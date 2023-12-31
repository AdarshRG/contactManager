
import { useEffect, useState } from 'react';
import AddContacts from './AddContacts';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';


function App() {
  const LOCAL_STORAGE_KEY="contacts"
  const[contacts,setContacts]=useState([])

  const addContactHandler=(contact)=>{
    console.log(contacts);
    setContacts([...contacts,contact])
  }
  useEffect(()=>{
    const retriveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retriveContacts)setContacts(retriveContacts)
      },[])

  useEffect(()=>{
localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])
  return (
    <div className="ui container">
 <Header/>
 <AddContacts addContactHandler={addContactHandler} />
 <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
