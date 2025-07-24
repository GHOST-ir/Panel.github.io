import React, { Component } from 'react';
import { FaUser, FaEnvelope, FaCreditCard, FaMapMarkerAlt, FaToggleOn, FaImage } from 'react-icons/fa';
import './newUser.css';
import { userRows } from '../../datas';
import { AddNewUser } from '../../datas';

type propsType = {}
type statePorpTypes = {
  Full_Name : string ,
  State : string ,
  Avatar : string ,
  Status : string ,
  TransAction : number ,
  Email : string ,
  newOneUser : {}[]
}


class NewUser extends Component <propsType , statePorpTypes> {

  constructor (props : propsType) {
    super (props)

    this.state = {
      Full_Name : '',
      State : '' ,
      Avatar : '' ,
      Status : '',
      TransAction : 0,
      Email : '' ,
      newOneUser : []
    }

    this.fullHandler = this.fullHandler.bind(this)
    this.stateHandler = this.stateHandler.bind(this)
    this.avatarHandler = this.avatarHandler.bind(this)
    this.statusHandler = this.statusHandler.bind(this)
    this.transHandler = this.transHandler.bind(this)
    this.emailHandler = this.emailHandler.bind(this)
    this.addHandler = this.addHandler.bind(this)

  }
  
  fullHandler (event : any) {
    this.setState({
      Full_Name : event.target.value
    })
  }

  stateHandler (event : any) {
    this.setState({
      State : event.target.value
    })
  }

  avatarHandler (event : any) {
    this.setState({
      Avatar : event.target.value
    })
  }

  statusHandler (event : any) {
    this.setState({
      Status : event.target.value
    })
  }

  transHandler (event : any) {
    this.setState({
      TransAction : event.target.value
    })
  }

  emailHandler (event : any) {
    this.setState({
      Email : event.target.value
    })
  }

  addHandler () {

    let newOne = {
        id : userRows.length + 2 ,
        full_name : this.state.Full_Name ,
        state : this.state.State ,
        avatar : this.state.Avatar ,
        transaction : this.state.TransAction ,
        email : this.state.Email
      }
    
      this.setState({
        newOneUser : [newOne]
      })

      AddNewUser(this.state.newOneUser[0])
      


    this.setState({
      Full_Name : '' ,
      State : '' ,
      Avatar : '' ,
      TransAction : 0 ,
      Email : ''
    })


  }

  render() {
    return (
      <div className="containerSign">
        <div className="header">
          <h1>Add User Form</h1>
          <p>Add new user to the system</p>
        </div>

        <div className="card">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">
                <FaUser className="label-icon" />
                Full Name
              </label>
              <input
                type="text"
                value={this.state.Full_Name}
                onChange={this.fullHandler}
                className="form-input"
                placeholder="Enter full name"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <FaMapMarkerAlt className="label-icon" />
                State
              </label>
              <select onChange={this.stateHandler} className="form-select">
                <option value="">Select state</option>
                <option value="Common">Common</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                <FaImage className="label-icon" />
                Avatar
              </label>
              <input
                type="url"
                value={this.state.Avatar}
                onChange={this.avatarHandler}
                className="form-input"
                placeholder="Enter avatar Short Key"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <FaToggleOn className="label-icon" />
                Status
              </label>
              <select onChange={this.statusHandler} className="form-select">
                <option value="">Select status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
                <option value="Suspended">Suspended</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                <FaCreditCard className="label-icon" />
                Transaction
              </label>
              <input
                type="number"
                value={this.state.TransAction}
                onChange={this.transHandler}
                className="form-input"
                placeholder="Enter transaction amount"
                min="0"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <FaEnvelope className="label-icon" />
                Email
              </label>
              <input
                type="email"
                value={this.state.Email}
                onChange={this.emailHandler}
                className="form-input"
                placeholder="Enter email address"
              />
            </div>
          </div>

          <div className="submit-container">
            <button type="button" onClick={this.addHandler} className="submit-btn">
              Add User
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewUser;