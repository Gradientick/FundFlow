import NavBar from "./components/NavBar";
import TransactionForm from "./components/TransactionForm";
import TransactionTable from "./components/TransactionTable";

function MainPage() {
  return (
    <div>
      <NavBar />
      <div className="h-full bg-gray-600 p-4 flex gap-4">
        <div className=" bg-gray-700 h-screen w-3/4 rounded-lg flex flex-col ">
          <TransactionTable />
        </div>
        <div className="bg-gray-700 h-screen w-1/4 rounded-sm">
          <TransactionForm />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
