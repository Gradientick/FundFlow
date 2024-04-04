function RegisterForm({ setIsLogin }) {
  return (
    <form className="bg-[#1A202C] w-3/6 h-4/6 gap-y-6 flex flex-col items-center shadow-lg rounded-md">
      <h1 className="text-2xl font-semibold p-6 text-white">Create Account</h1>
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
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-400"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            className="bg-[#2D3748] border border-[#4A5568] text-white sm:text-sm rounded-lg focus:ring-[#63B3ED] focus:border-[#63B3ED] block w-full p-2.5"
            placeholder="Enter your name"
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
          />
        </div>
        <div>
          <label
            htmlFor="confirm-password"
            className="block mb-2 text-sm font-medium text-gray-400"
          >
            Confirm Password
          </label>
          <input
            id="confirm-password"
            type="password"
            className="bg-[#2D3748] border border-[#4A5568] text-white sm:text-sm rounded-lg focus:ring-[#63B3ED] focus:border-[#63B3ED] block w-full p-2.5"
            placeholder="Confirm your password"
          />
        </div>
        <div>
          <button
            className="w-full bg-[#3182CE] hover:bg-[#63B3ED] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all"
            type="submit"
          >
            Register
          </button>
          <div className="mt-6 text-center">
            <p className="text-sm font-medium text-gray-400">
              Already have an account?
              <span
                className="text-[#81E6D9] hover:text-white cursor-pointer"
                onClick={() => setIsLogin(true)}
              >
                Login Here
              </span>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
