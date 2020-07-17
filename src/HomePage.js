import React, { Component } from 'react'
import UserContext from './UserContext'
class HomePage extends Component {
    constructor(props,context){
        super(props,context);
        this.state={
            user_details:{}
        }
    }
    static contextType = UserContext
  
    componentDidMount() {
      const {setUser,theme_color,} = this.context
      const newUser = { name: 'Joe', loggedIn: true }
      document.body.style.backgroundColor = theme_color
      setUser(newUser)
    }
  
    render() {
        const {user,toggleTheme,theme_color} = this.context
        document.body.style.backgroundColor = theme_color
      return(
        <div>
        <p>{`Current User: ${user.name}`}</p>
        <table class="table">
        <thead>
            <tr>
                <th>Row</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Clark</td>
                <td>Kent</td>
                <td>clarkkent@mail.com</td>
            </tr>
            <tr>
                <td>2</td>
                <td>John</td>
                <td>Carter</td>
                <td>johncarter@mail.com</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Peter</td>
                <td>Parker</td>
                <td>peterparker@mail.com</td>
            </tr>            
        </tbody>
    </table>
    <button
          onClick={() => {

            toggleTheme()
          }}
        >
          Change Background Color
        </button>
      </div>
      )
    }
  }
  export default HomePage