import Button from "../Elements/Button";
import InputForm from "../Elements/InputForm";
const RegisterForm = (props) => {
  return (
    <form action="">
      <InputForm
        title="First Name"
        placeholder="Enter your first name ..."
        name="first_name"
        type="text"
      />
      <InputForm
        title="Last Name"
        placeholder="Enter your last name ..."
        name="last_name"
        type="text"
      />
      <InputForm
        title="Email"
        placeholder="Enter your email ..."
        name="email"
        type="email"
      />
      <InputForm
        title="Password"
        placeholder="Enter your password ..."
        name="password"
        type="password"
      />
      <InputForm
        title="Password Confirmation"
        placeholder="Enter your password confirmation ..."
        name="password_confirmation"
        type="password"
      />
      <Button classname="bg-green-500 w-full">Daftar</Button>
    </form>
  );
};

export default RegisterForm;
