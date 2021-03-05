import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-900 p-4 grid justify-center content-center">
      <h1 className="text-center text-2xl md:text-3xl text-gray-300 mb-8 border-b-4 border-gray-800 pb-4 uppercase tracking-wider">
        Fun Translation
      </h1>
      <NavBar />
    </main>
  );
};

export default Home;
