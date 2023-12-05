function LoginContent() {
  return (
    <div className="bg-sblue h-screen">
      <div className="flex">
        <div className=" w-1/2 flex flex-col bg-sblue h-screen justify-evenly items-center">
          <div>
            <h1 className="font-bold text-light text-9xl drop-shadow-2xl ">
              FundFlow
            </h1>
            <p className="font-semibold text-light text-lg drop-shadow-2xl">
              Your Personal Financial Navigator
            </p>
          </div>
          <div></div>
        </div>
        <div className="w-1/2 flex flex-col justify-evenly items-center">
          <div className="bg-light w-3/5 h-3/5 rounded-lg flex flex-col items-center opacity-80">
            <h1 className=" text-2xl font-semibold p-7">User Login</h1>
            <div className="flex flex-col w-3/5 gap-8">
              <div className="flex flex-col">
                <label>Username</label>
                <input type="text" />
              </div>
              <div className="flex flex-col">
                <label>Password</label>
                <input type="password" />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default LoginContent;
