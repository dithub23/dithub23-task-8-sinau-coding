import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

export default function ProductList() {
  const { category } = useParams();
  const navigate = useNavigate();
  const { addToCart, isDark } = useCart();

  const menuData = {
    "Fresh Produce": [
      {
        name: "Apel Fuji",
        price: "Rp 12.000",
        img: "https://cdn-icons-png.flaticon.com/512/415/415733.png",
      },
      {
        name: "Pisang Sunpride",
        price: "Rp 25.000",
        img: "https://cdn-icons-png.flaticon.com/512/2909/2909761.png",
      },
    ],
    "Dairy & Eggs": [
      {
        name: "Susu UHT 1L",
        price: "Rp 18.500",
        img: "https://cdn-icons-png.flaticon.com/512/2396/2396652.png",
      },
      {
        name: "Telur Ayam 1kg",
        price: "Rp 28.000",
        img: "https://cdn-icons-png.flaticon.com/512/2713/2713499.png",
      },
    ],
    Snacks: [
      {
        name: "Potato Chips",
        price: "Rp 15.000",
        img: "https://cdn-icons-png.flaticon.com/512/2553/2553691.png",
      },
      {
        name: "Chocolate Bar",
        price: "Rp 14.500",
        img: "https://cdn-icons-png.flaticon.com/512/2143/2143131.png",
      },
    ],
    Beverages: [
      {
        name: "Mineral Water",
        price: "Rp 4.000",
        img: "https://cdn-icons-png.flaticon.com/512/824/824237.png",
      },
      {
        name: "Orange Juice",
        price: "Rp 7.500",
        img: "https://cdn-icons-png.flaticon.com/512/2442/2442144.png",
      },
    ],
    "Personal Care": [
      {
        name: "Body Wash",
        price: "Rp 25.000",
        img: "https://cdn-icons-png.flaticon.com/512/2553/2553642.png",
      },
      {
        name: "Toothpaste",
        price: "Rp 12.500",
        img: "https://cdn-icons-png.flaticon.com/512/2553/2553655.png",
      },
    ],
    Household: [
      {
        name: "Detergent",
        price: "Rp 21.000",
        img: "https://cdn-icons-png.flaticon.com/512/2553/2553613.png",
      },
      {
        name: "Floor Cleaner",
        price: "Rp 15.500",
        img: "https://cdn-icons-png.flaticon.com/512/2553/2553591.png",
      },
    ],
    Bakery: [
      {
        name: "Roti Tawar",
        price: "Rp 15.000",
        img: "https://cdn-icons-png.flaticon.com/512/3014/3014535.png",
      },
      {
        name: "Croissant",
        price: "Rp 18.000",
        img: "https://cdn-icons-png.flaticon.com/512/2965/2965568.png",
      },
      {
        name: "Donut Glazed",
        price: "Rp 9.000",
        img: "https://cdn-icons-png.flaticon.com/512/1039/1039709.png",
      },
    ],
    "Frozen Food": [
      {
        name: "Chicken Nugget",
        price: "Rp 45.000",
        img: "https://cdn-icons-png.flaticon.com/512/3504/3504780.png",
      },
      {
        name: "French Fries",
        price: "Rp 38.000",
        img: "https://cdn-icons-png.flaticon.com/512/2352/2352361.png",
      },
      {
        name: "Bakso Sapi",
        price: "Rp 35.000",
        img: "https://cdn-icons-png.flaticon.com/512/2515/2515152.png",
      },
    ],
    "Meat & Seafood": [
      {
        name: "Daging Sapi 500g",
        price: "Rp 75.000",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046761.png",
      },
      {
        name: "Ayam Utuh",
        price: "Rp 40.000",
        img: "https://cdn-icons-png.flaticon.com/512/3143/3143640.png",
      },
      {
        name: "Udang Segar",
        price: "Rp 50.000",
        img: "https://cdn-icons-png.flaticon.com/512/2324/2324546.png",
      },
    ],
    "Instant Food": [
      {
        name: "Mie Instan",
        price: "Rp 3.500",
        img: "https://cdn-icons-png.flaticon.com/512/2718/2718224.png",
      },
      {
        name: "Bubur Instan",
        price: "Rp 5.000",
        img: "https://cdn-icons-png.flaticon.com/512/2405/2405465.png",
      },
      {
        name: "Sarden Kaleng",
        price: "Rp 12.000",
        img: "https://cdn-icons-png.flaticon.com/512/1996/1996841.png",
      },
    ],
    "Baby Needs": [
      {
        name: "Popok Bayi",
        price: "Rp 65.000",
        img: "https://cdn-icons-png.flaticon.com/512/2769/2769339.png",
      },
      {
        name: "Bubur Bayi",
        price: "Rp 18.000",
        img: "https://cdn-icons-png.flaticon.com/512/2769/2769311.png",
      },
      {
        name: "Bedak Bayi",
        price: "Rp 15.000",
        img: "https://cdn-icons-png.flaticon.com/512/2769/2769363.png",
      },
    ],
    Stationery: [
      {
        name: "Buku Tulis",
        price: "Rp 5.000",
        img: "https://cdn-icons-png.flaticon.com/512/2541/2541991.png",
      },
      {
        name: "Pulpen Gel",
        price: "Rp 3.500",
        img: "https://cdn-icons-png.flaticon.com/512/597/597193.png",
      },
      {
        name: "Pensil Warna",
        price: "Rp 25.000",
        img: "https://cdn-icons-png.flaticon.com/512/2361/2361836.png",
      },
    ],
  };

  const items = menuData[category] || [];

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${isDark ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900"}`}
    >
      <Navbar />

      <div className="p-10 flex-1">
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 text-orange-500 hover:text-orange-400 flex items-center font-bold transition-colors"
        >
          ← Back to Categories
        </button>

        <h1
          className={`text-3xl font-extrabold mb-8 border-l-4 border-orange-500 pl-4 capitalize ${isDark ? "text-white" : "text-slate-800"}`}
        >
          {category} Menu
        </h1>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-3xl border shadow-xl flex flex-col items-center group transition-colors ${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}
              >
                <div
                  className={`p-4 rounded-2xl mb-4 transition-colors ${isDark ? "bg-slate-700 group-hover:bg-slate-600" : "bg-slate-100 group-hover:bg-slate-200"}`}
                >
                  <img
                    src={item.img}
                    className="w-24 h-24 object-contain"
                    alt={item.name}
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                <p className="text-orange-500 font-mono text-lg font-bold">
                  {item.price}
                </p>
                <button
                  onClick={() => addToCart(item)}
                  className="mt-5 w-full bg-orange-500 py-3 rounded-xl font-bold text-white hover:bg-orange-600 transition-all active:scale-95 shadow-lg"
                >
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        ) : (
          <div
            className={`text-center py-20 rounded-3xl border border-dashed text-gray-500 ${isDark ? "bg-slate-800 border-slate-600" : "bg-white border-slate-300"}`}
          >
            <p className="text-xl italic">
              Menu for "{category}" is currently being prepared...
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
