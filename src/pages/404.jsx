import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">Oops 404!</h1>
      <p className="my-4 text-xl">
        Halaman tidak ditemukan / terjadi kesalahan
      </p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
