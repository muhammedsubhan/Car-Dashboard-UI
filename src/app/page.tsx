import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Navbar />
      </div>
    </>
  );
}
