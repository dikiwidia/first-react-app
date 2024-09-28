import LoginForm from "../components/Fragments/LoginForm";
import AuthLayout from "../components/Layouts/AuthLayout";
const LoginPage = () => {
  return (
    <AuthLayout
      title="Masuk"
      sub_title="Selamat datang di Universitas La Tansa Mashiro"
      type="login"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
