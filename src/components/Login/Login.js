import React from "react";
import { useAuth } from "../../context/AuthContext.utils";
import { useHistory } from "react-router-dom";

function Login() {
  const initialState = {
    email: "",
    password: "",
  };
  const { handleLogin } = useAuth();
  const [state, setState] = React.useState(initialState);

  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleLogin(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">email</label>
      <input
        type="text"
        name="email"
        id="email"
        value={state.email}
        onChange={handleChange}
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={state.password}
        onChange={handleChange}
      />
      <button type="submit">login</button>
    </form>
  );
}

export default Login;
