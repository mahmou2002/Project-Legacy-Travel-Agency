import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../router/Routers'
function Layout() {
  //====================== new Work =============================================================
  const [emailToGetUn, setEmailToGetUn] = useState(undefined);
  const [loggedUser, setLoggedUser] = useState(undefined);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/User")
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filterUsersByEmail = () => {
    const filteredUsers = users.filter((e) => e.email === emailToGetUn);
    if (filteredUsers.length) {
      setLoggedUser(filteredUsers[0].username);
    } else {
      setLoggedUser(null);
    }
  };

  useEffect(() => {
    if (users.length && emailToGetUn !== undefined) {
      filterUsersByEmail();
    }
  }, [emailToGetUn, users]);


  console.log(loggedUser, "loggedUser Layout");

  //========================= end getting the Users db===========================================
  return (
    <>
      <Header loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <Routers emailToGetUn={emailToGetUn} setEmailToGetUn={setEmailToGetUn}  loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>
      <Footer />
    </>
  )
}

export default Layout