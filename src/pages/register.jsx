import RegisterForm from "../components/Fragments/RegisterForm";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout
      title="Registrasi"
      sub_title="Selamat datang di Universitas La Tansa Mashiro"
      type="register"
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
