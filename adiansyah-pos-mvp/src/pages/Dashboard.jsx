import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const { isDark } = useCart(); // Ambil dari context

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (!loggedIn) navigate("/login");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const products = [
    {
      title: "Fresh Produce",
      img: "https://cdn-icons-png.flaticon.com/512/2329/2329865.png",
      color: "bg-green-600",
    },
    {
      title: "Dairy & Eggs",
      img: "https://cdn-icons-png.flaticon.com/512/2674/2674486.png",
      color: "bg-blue-400",
    },
    {
      title: "Snacks",
      img: "https://cdn-icons-png.flaticon.com/512/2553/2553691.png",
      color: "bg-yellow-500",
    },
    {
      title: "Beverages",
      img: "https://cdn-icons-png.flaticon.com/512/3121/3121784.png",
      color: "bg-purple-500",
    },
    {
      title: "Personal Care",
      img: "https://cdn-icons-png.flaticon.com/512/2553/2553642.png",
      color: "bg-pink-400",
    },
    {
      title: "Household",
      img: "https://cdn-icons-png.flaticon.com/512/2553/2553613.png",
      color: "bg-slate-500",
    },
    {
      title: "Bakery",
      img: "https://cdn-icons-png.flaticon.com/512/3014/3014535.png",
      color: "bg-orange-400",
    },
    {
      title: "Frozen Food",
      img: "https://cdn-icons-png.flaticon.com/512/2352/2352361.png",
      color: "bg-cyan-600",
    },
    {
      title: "Meat & Seafood",
      img: "https://cdn-icons-png.flaticon.com/512/1046/1046761.png",
      color: "bg-red-600",
    },
    {
      title: "Instant Food",
      img: "https://cdn-icons-png.flaticon.com/512/2718/2718224.png",
      color: "bg-slate-600",
    },
    {
      title: "Baby Needs",
      img: "https://cdn-icons-png.flaticon.com/512/2769/2769339.png",
      color: "bg-indigo-400",
    },
    {
      title: "Stationery",
      img: "https://cdn-icons-png.flaticon.com/512/2541/2541991.png",
      color: "bg-emerald-500",
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ${isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"}`}
    >
      <Navbar />
      <div className="p-10 flex-1">
        <div className="flex justify-between items-center mb-8">
          <h1
            className={`text-3xl font-black border-l-4 border-orange-500 pl-4 ${!isDark ? "text-slate-900" : "text-white"}`}
          >
            Product Category
          </h1>
          {/* <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-bold shadow-lg transition-transform active:scale-95"
          >
            Log Out
          </button> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div
              key={i}
              onClick={() => navigate(`/dashboard/${p.title}`)}
              className="cursor-pointer"
            >
              <ProductCard {...p} isDark={isDark} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
