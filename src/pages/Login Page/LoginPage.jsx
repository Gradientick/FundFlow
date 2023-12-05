import LoginContent from "./Components/LoginContent";
import LoginPageNavBar from "./Components/LoginPageNavBar";

function LoginPage() {
  return (
    <div className="h-screen">
      <LoginPageNavBar />
      <LoginContent />
    </div>
  );
}

export default LoginPage;
