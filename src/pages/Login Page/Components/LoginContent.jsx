import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useState } from "react";

function LoginContent() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="bg-[#262A33] h-screen">
      <div className="flex">
        <div className="w-1/2 flex flex-col bg-[#262A33] h-screen justify-evenly items-center text-white">
          <div>
            <h1 className="font-bold text-9xl drop-shadow-2xl ">FundFlow</h1>
            <p className="font-semibold text-lg drop-shadow-2xl">
              Your Personal Financial Navigator
            </p>
          </div>
          <div></div>
        </div>
        <div className="w-1/2 flex flex-col justify-evenly items-center">
          {isLogin ? (
            <>
              <LoginForm setIsLogin={setIsLogin} />
            </>
          ) : (
            <>
              <RegisterForm setIsLogin={setIsLogin} />
            </>
          )}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default LoginContent;
