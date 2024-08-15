import useContextHook from "../../hooks/useContextHook";

const Home: React.FC = () => {
  const { setIsAuthenticated } = useContextHook();

  const handlePressOnLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="flex bg-white flex-col justify-center items-center min-h-screen">
      <p className="text-xl text-green-500 font-bold">Home Page</p>
      <button
        onClick={handlePressOnLogout}
        className="mt-4 w-44 border-red-500 border p-2 rounded-md cursor-pointer bg-red-500 text-white font-bold"
      >
        Press Logout
      </button>
    </div>
  );
};

export default Home;
