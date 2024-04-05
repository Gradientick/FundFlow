import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import handleLogin from "../../../features/loginFeature";
import UserContext from "../../../features/context/UserContext";
function LoginForm({ setIsLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    handleLogin(username, password)
      .then((res) => {
        console.log(res);
        setUser(res);
        setUsername("");
        setPassword("");
      })
      .catch((error) => {
        setError(error.response.data.message);
        console.log(error.response.data.message);
      });
  };

  useEffect(() => {
    if (user?.token) navigate("/main-page");
  }, [user, navigate]);

  return (
    <form
      className="bg-[#1A202C] w-3/6 h-3/6 gap-y-6 flex flex-col items-center shadow-lg rounded-md"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-semibold p-7 text-white">User Login</h1>
      <div className="flex flex-col w-3/5 gap-8">
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-400"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            className="bg-[#2D3748] border border-[#4A5568] text-white sm:text-sm rounded-lg focus:ring-[#63B3ED] focus:border-[#63B3ED] block w-full p-2.5"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-400"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="bg-[#2D3748] border border-[#4A5568] text-white sm:text-sm rounded-lg focus:ring-[#63B3ED] focus:border-[#63B3ED] block w-full p-2.5"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className="w-full text-white bg-[#3182CE] hover:bg-[#63B3ED] focus:ring-4 focus:ring-[#63B3ED] font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all">
            login
          </button>
          <div className="mt-6 text-center">
            <p className="text-sm font-medium text-gray-400">
              Don't have an account?{" "}
              <span
                className="text-[#81E6D9] hover:text-white cursor-pointer"
                onClick={() => setIsLogin(false)}
              >
                Register here
              </span>
            </p>
            {error && (
              <div className="mt-3 text-center">
                <p className="text-sm font-medium text-red-500">{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
