// Conditional rendering = allows you to control what gets rendered
//                          in your application based on certain conditions
//                          (show , hide , or change components)

import PropTypes from "prop-types";

function UserGreeting(props) {
  //   if (props.isLoggedIn) {
  //     return <h2>Welcom {props.username}☕</h2>;
  //   }else{
  //     return <h2>Please Log In To Continue</h2>
  //   }

  const welcomMessage = (
    <h2 className="welcom-message">Welcom {props.username}☕</h2>
  );
  const loginPrompt = (
    <h2 className="login-prompt">Please Log In To Continue</h2>
  );

  return props.isLoggedIn ? welcomMessage : loginPrompt;
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting.defaultProps = {
    isLoggedIn:false,
    username:"Guest"
}
export default UserGreeting;
