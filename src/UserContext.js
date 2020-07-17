import React,{ Component } from 'react'
const UserContext = React.createContext()
//export const UserProvider = UserContext.Provider
//export const UserConsumer = UserContext.Consumer
class UserProvider extends Component {
    // Context state
    state = {
        user: {name: 'Guest', loggedIn: false},
        theme_color: "red"
      }
    
      // Method to update state
        setUser = (user) => {
            this.setState((prevState) => ({ user }))
        }

        toggleTheme = () => {
            this.setState(prevState => {
              return {
                theme_color: prevState.theme_color == "red" ? "green" : "red"
              };
            });
            console.log('heloo',this.state.theme_color);
          };


    render(){
        const { children } = this.props
        const { user,theme_color } = this.state
        const { setUser,toggleTheme } = this
        

        return(
            <UserContext.Provider
                value={{
                user,
                setUser,
                theme_color,
                toggleTheme
                }}
            >
                {children}
            </UserContext.Provider>
        )
    }

}
export default UserContext
export { UserProvider }