import React from 'react'
import './newuser.css'

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="nsTitle">New User</h1>
      <form className="nsForm">
        <div className="nsItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="nsItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="nsItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="nsItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
         
        <div className="nsItem">
          <label>Gender</label>
          <div className="nsgender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="nsItem">
          <label>Active</label>
          <select className="nsItemSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="nsButton">Create</button>
      </form>
    </div>
  )
}

export default NewUser
