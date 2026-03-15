import { useCart } from "../context/CartContext";

import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

export default function Cart() {
  const { cartItems, removeFromCart, totalPrice, isDark } = useCart();

  const navigate = useNavigate();

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ${isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"}`}
    >
      <Navbar />

      <div className="p-10 flex-1 max-w-4xl mx-auto w-full">
        <h1
          className={`text-3xl font-black border-l-4 border-orange-500 pl-4 mb-8 ${!isDark ? "text-slate-900" : "text-white"}`}
        >
          Keranjang Belanja 🛒
        </h1>

        {cartItems.length === 0 ? (
          <div
            className={`${isDark ? "bg-slate-800 border-slate-600" : "bg-slate-50 border-slate-200"} text-center py-20 rounded-3xl border border-dashed`}
          >
            <p
              className={`text-xl mb-5 ${isDark ? "text-gray-400" : "text-slate-500"}`}
            >
              Wah, keranjangmu masih kosong!
            </p>

            <button
              onClick={() => navigate("/dashboard")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg"
            >
              Mulai Belanja
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className={`${isDark ? "bg-slate-800 border-slate-700 shadow-md" : "bg-white border-slate-200 shadow-sm"} p-5 rounded-2xl flex justify-between items-center border`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`${isDark ? "bg-slate-700" : "bg-slate-100"} p-2 rounded-lg`}
                  >
                    <img
                      src={item.img}
                      className="w-16 h-16 object-contain"
                      alt={item.name}
                    />
                  </div>

                  <div>
                    <h3
                      className={`font-bold text-lg ${!isDark ? "text-slate-900" : "text-white"}`}
                    >
                      {item.name}
                    </h3>

                    <p className="text-orange-500 font-mono font-bold">
                      {item.price}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-red-500/10 text-red-500 px-4 py-2 rounded-lg font-bold hover:bg-red-500 hover:text-white transition-all text-sm"
                >
                  Hapus
                </button>
              </div>
            ))}

            <div
              className={`${isDark ? "bg-slate-800 border-orange-500" : "bg-white border-orange-500 shadow-lg"} mt-10 p-8 rounded-3xl border-t-4 shadow-2xl`}
            >
              <div className="flex justify-between items-center mb-6">
                <span className={isDark ? "text-gray-300" : "text-slate-600"}>
                  Total Pembayaran:
                </span>

                <span className="text-3xl font-black text-orange-500">
                  Rp {totalPrice.toLocaleString("id-ID")}
                </span>
              </div>

              <button
                onClick={() => navigate("/payment")}
                className="w-full bg-green-500 text-white py-4 rounded-2xl font-bold text-xl hover:bg-green-600 shadow-xl transition-transform active:scale-95"
              >
                Checkout Sekarang
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
