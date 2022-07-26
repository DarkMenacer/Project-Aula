import React, { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUpOne from "./Pages/SignUp/SignUp-I";
import SignUpTwo from "./Pages/SignUp/SignUp-II";
import SignUpThree from "./Pages/SignUp/SignUp-III"
import SignUpFour from "./Pages/SignUp/SignUp-IV";
import Welcome from "./Pages/Welcome/Welcome";
import OrganiserHome from "./Pages/Organiser Home/OrganiserHome";
import ManageEvents from "./Pages/Manage Events/ManageEvents";
import ParticipantHome from "./Pages/Participant Home/ParticipantHome";
import CreateEvents from "./Pages/Create Events/CreateEvents";
import Resources from "./Pages/Resources/Resources";
import Devices from "./Pages/Devices/Devices";
import MyInfo from "./Pages/My Info/MyInfo";
import EventHome from "./Pages/Event Home/EventHome"
import SignUpParent from "./Pages/SignUp/SignUpParent";

const App = () => {
  
  const adminUser = {email: "p@c.com",password: "pranav"};
  const [user, setUser] = useState({ name: "", email: "" });
  const [newUser, setNewUser] = useState({
    email:"", phone:"", gender:"", dob:"2002-05-28", name:"", username:"", password:""
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>WORKS!</h1>}/>
        <Route path='/Login' element={<Login setUser={setUser} adminUser={adminUser}/>} />

        <Route path='/SignUp' element={<SignUpParent/>}>
          <Route index element={<SignUpOne />}/>
          <Route path='SignUpTwo' element={<SignUpTwo newUser={newUser} setNewUser={setNewUser}/>}/>
          <Route path='SignUpThree' element={<SignUpThree newUser={newUser} setNewUser={setNewUser}/>}/>
          <Route path='SignUpFour' element={<SignUpFour newUser={newUser} setNewUser={setNewUser}/>}/>
        </Route>

        <Route path='/Welcome'>
          <Route index element={<Welcome user = {user}/>}/>
          <Route path='Devices' element={<Devices/>}/>
          <Route path='MyInfo' element={<MyInfo/>}/>
        </Route>

        <Route path='/OrganiserHome'>
          <Route index element={<OrganiserHome/>}/>
          <Route path='ManageEvents' element={<ManageEvents/>}/>
          <Route path='CreateEvents' element={<CreateEvents/>}/>
          <Route path='EventHome'>
            <Route index element={<EventHome role="Organiser"/>}/>
            <Route path='Resources' element={<Resources/>}/>
          </Route>
        </Route>

        <Route path='/ParticipantHome'>
          <Route index element={<ParticipantHome/>}/>
          <Route path='EventHome'>
            <Route index element={<EventHome role="Participant"/>}/>
            <Route path='Resources' element={<Resources/>}/>
          </Route>
        </Route>
        
        <Route path='*' element={<div><h1>ERROR!</h1><h4>Wrong URL!</h4></div>} />

      </Routes>
    </BrowserRouter>
  );
};

/* Colors to consider
1. Gainsboro
2. Lavender
3. Aliceblue
4. White
5. Darkblue*/
export default App;