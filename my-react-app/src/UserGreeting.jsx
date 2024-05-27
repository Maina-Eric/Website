//Conditional rendering = allows you to control what gets rendered in your application based on certain conditions
//                        (show, hide or change components)
// import PropTypes from 'prop-types'

function UserGreeting({isLoggedIn=false, username="Guest"}){
    
    const welcomeMessage = <h2 className="welcome-message" >Welcome {username} </h2>
    const loginprompt = <h2  className="login-prompt">Please Login to continue</h2>


    return(isLoggedIn ? welcomeMessage : loginprompt); 
}

// UserGreeting.proptypes = {
//     isLoggedIn: PropTypes.bool,
//     username: PropTypes.string,
// } 

// UserGreeting.defaultProps = {
//     isLoggedIn: false,
//     username: "Guest"
// }
export default UserGreeting