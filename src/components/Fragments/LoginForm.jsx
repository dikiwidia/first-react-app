import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/InputForm";
import { login } from "../../service/login.service";

const LoginForm = (props) => {
  const handleLogin = (event) => {
    event.preventDefault();
    // console.log("username: ", event.target.username.value);
    // console.log("password: ", event.target.password.value);
    // localStorage.setItem("email", event.target.email.value);
    // window.location.href = "/products";

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("username", "Moch Diki Widianto");
        localStorage.setItem("token", res.data.token);
        window.location.href = "/products";
        setLoginFailed("");
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);
  const [loginFailed, setLoginFailed] = useState("");

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        title="Username"
        placeholder="Enter your username"
        name="username"
        type="text"
        ref={usernameRef}
      />
      <InputForm
        title="Password"
        placeholder="Enter your password"
        name="password"
        type="password"
      />
      <Button type="submit" classname="bg-blue-500 w-full">
        Login
      </Button>

      {loginFailed && (
        <p className="text-red-500 text-center mt-3">{loginFailed}</p>
      )}
    </form>
  );
};

export default LoginForm;
