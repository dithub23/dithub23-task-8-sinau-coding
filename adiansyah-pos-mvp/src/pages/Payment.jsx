import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function Payment() {
  const { totalPrice, isDark, clearCart } = useCart();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("");
  const [showModal, setShowModal] = useState(false);

  const methods = [
    { id: "bca", name: "BCA Transfer", icon: "🏦" },
    { id: "mandiri", name: "Mandiri Transfer", icon: "🏦" },
    { id: "bri", name: "BRI Transfer", icon: "🏦" },
    { id: "bni", name: "BNI Transfer", icon: "🏦" },
    { id: "qris", name: "QRIS", icon: "📸" },
    { id: "shopee", name: "ShopeePay", icon: "🟠" },
    { id: "gopay", name: "GoPay", icon: "🔵" },
  ];

  const handlePay = () => {
    if (!selectedMethod)
      return alert("Pilih metode pembayaran terlebih dahulu!");
    setShowModal(true);
  };

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ${isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"}`}
    >
      <Navbar />

      <div className="p-10 flex-1 max-w-2xl mx-auto w-full">
        <button
          onClick={() => navigate("/cart")}
          className="mb-6 text-orange-500 font-bold hover:underline"
        >
          ← Kembali ke Keranjang
        </button>

        <h1
          className={`text-3xl font-black mb-8 border-l-4 border-orange-500 pl-4 ${!isDark ? "text-slate-900" : "text-white"}`}
        >
          Metode Pembayaran 💳
        </h1>

        <div className="space-y-3">
          {methods.map((method) => (
            <div
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex justify-between items-center ${
                selectedMethod === method.id
                  ? "border-orange-500 bg-orange-500/10"
                  : isDark
                    ? "border-slate-700 bg-slate-800"
                    : "border-slate-200 bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{method.icon}</span>
                <span className="font-bold">{method.name}</span>
              </div>
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedMethod === method.id ? "border-orange-500 bg-orange-500" : "border-slate-400"}`}
              >
                {selectedMethod === method.id && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-10 p-8 rounded-3xl border-t-4 border-orange-500 shadow-2xl ${isDark ? "bg-slate-800" : "bg-white border shadow-lg"}`}
        >
          <div className="flex justify-between items-center mb-6">
            <span className={isDark ? "text-gray-400" : "text-slate-500"}>
              Total Tagihan:
            </span>
            <span className="text-3xl font-black text-orange-500">
              Rp {totalPrice.toLocaleString("id-ID")}
            </span>
          </div>
          <button
            onClick={handlePay}
            className="w-full bg-green-500 text-white py-4 rounded-2xl font-bold text-xl hover:bg-green-600 shadow-xl transition-transform active:scale-95"
          >
            Bayar Sekarang
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`relative w-full max-w-md p-8 rounded-3xl shadow-2xl text-center ${isDark ? "bg-slate-800 text-white" : "bg-white text-slate-900"}`}
            >
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-2xl font-black mb-2">Instruksi Pembayaran</h2>
              <p
                className={`mb-6 text-sm ${isDark ? "text-gray-400" : "text-slate-500"}`}
              >
                Silakan transfer tepat sesuai nominal ke rekening berikut:
              </p>

              <div
                className={`p-6 rounded-2xl mb-6 text-left space-y-3 ${isDark ? "bg-slate-900" : "bg-slate-100"}`}
              >
                <div>
                  <p className="text-[10px] uppercase font-bold text-orange-500">
                    Nama Rekening
                  </p>
                  <p className="font-bold text-lg">PT. Adiansyah Mart</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-orange-500">
                    Nomor Rekening / Virtual Account
                  </p>
                  <p className="font-mono font-black text-xl tracking-wider">
                    8830123456789
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-orange-500">
                    Metode
                  </p>
                  <p className="font-bold capitalize">{selectedMethod}</p>
                </div>
              </div>

              <button
                onClick={() => {
                  alert(
                    "Konfirmasi diterima! Pesanan Anda akan segera diproses.",
                  );
                  clearCart();
                  navigate("/dashboard");
                }}
                className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 shadow-lg"
              >
                Saya Sudah Bayar
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
