import React, {useState} from 'react'
import './login.css'
import {BrowserRouter as Router, Link} from 'react-router-dom';

function LoginForm({ Login, error }) {

    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitForm = e => {
        e.preventDefault();

        Login(details);
    }

  return (
    //<Router>
    <form onSubmit = {submitForm}>
        <div className="form-inner">
            <h2><span className = "head">AULA</span></h2>
            {(error !== "") ? (<div className="error">{error}</div>) : ""}
            <div className="form-elements">
                <div className="form-group">
                    <label htmlFor = "name">Name :</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name : e.target.value })} value = {details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor = "email">Email :</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email : e.target.value })} value = {details.email}/>
                </div>
                <div className="form-group">
                <label htmlFor = "password">Password :</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password : e.target.value })} value = {details.password}/>
                </div>
                <input type="submit" value = "Log-In" />
                {/* <Router>
            <Link to="./Signup-one.js">
              <button>HELLO</button>
            </Link>
          </Router> */}
            </div>
        </div>
    </form>
    //</Router>
  )
}

export default LoginForm;