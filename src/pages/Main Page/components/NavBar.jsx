function NavBar() {
  return (
    <div>
      <div className="h-24 bg-navc flex justify-between items-center fixed w-full p-4 z-10">
        <h1 className=" font-bold text-slate-50 text-5xl">FundFlow</h1>
        <div className="flex gap-5 items-center">
          <p className="text-md font-medium text-slate-50 mr-4">name</p>
          <button className="bg-lightblue text-white py-2 px-4 rounded hover:bg-sblue focus:outline-none focus:ring-2 focus:ring-focusRing focus:ring-opacity-50">
            Logout
          </button>
        </div>
      </div>
      <div className="h-24"></div>
    </div>
  );
}

export default NavBar;
