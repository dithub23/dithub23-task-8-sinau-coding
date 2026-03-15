import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

export default function Login() {
  const navigate = useNavigate();
  const { isDark } = useCart();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // 1.
    const savedPassword = localStorage.getItem(`${email}_password`);
    const savedName = localStorage.getItem(`${email}_name`);
    const savedAvatar = localStorage.getItem(`${email}_avatar`);
    if (savedPassword && password === savedPassword) {
      // 2.
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUserEmail", email);
      // 3.
      localStorage.setItem("userName", savedName || "User");
      localStorage.setItem("userAvatar", savedAvatar || "");

      navigate("/dashboard");
    } else {
      alert("Email atau Password salah!");
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-between transition-colors duration-300 ${isDark ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900"}`}
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center items-center flex-1 p-6"
      >
        <form
          onSubmit={handleLogin}
          className={`p-10 rounded-3xl w-full max-w-md shadow-2xl border transition-colors ${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}
        >
          <h1
            className={`text-3xl font-black mb-8 text-center ${isDark ? "text-orange-400" : "text-slate-800"}`}
          >
            Login
          </h1>
          <div className="space-y-4">
            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-4 rounded-xl outline-none border ${isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-slate-50 border-slate-300"}`}
            />
            <input
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-4 rounded-xl outline-none border ${isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-slate-50 border-slate-300"}`}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 p-4 mt-8 rounded-xl font-bold text-white hover:bg-orange-600 active:scale-95 shadow-lg shadow-orange-500/20"
          >
            Login
          </button>
          <p className="text-sm mt-6 text-center text-gray-500 font-medium">
            No account?{" "}
            <Link
              to="/register"
              className="text-orange-500 ml-1 hover:underline font-bold"
            >
              Register
            </Link>
          </p>
        </form>
      </motion.div>
      <Footer />
    </div>
  );
}
