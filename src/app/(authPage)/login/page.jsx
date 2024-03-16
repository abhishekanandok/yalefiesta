import LoginForm from "@/components/loginForm/loginForm";


const LoginPage = () => {

  return (
    <div className="grid justify-items-center py-2">
      <h1 className=" font-semibold text-xl p-1">Login Here</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
