import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

export default function Register() {
  const navigate = useNavigate();
  const { isDark } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const nameRegex = /^[a-zA-Z\s]{3,30}$/;
    if (!nameRegex.test(name)) {
      alert("Nama harus berupa huruf, minimal 3 karakter!");
      return;
    }
    if (password.length < 8) {
      alert("Password minimal harus 8 karakter.");
      return;
    }

    localStorage.setItem(`${email}_name`, name);
    localStorage.setItem(`${email}_password`, password);

    localStorage.setItem("userEmail", email);

    alert("Registrasi Berhasil! Silakan Login.");
    navigate("/login");
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
          onSubmit={handleRegister}
          className={`p-10 rounded-3xl w-full max-w-md shadow-2xl border transition-colors ${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}
        >
          <h1
            className={`text-3xl font-black mb-8 text-center ${isDark ? "text-white" : "text-slate-800"}`}
          >
            Register
          </h1>
          <div className="space-y-4">
            <input
              required
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full p-4 rounded-xl outline-none border ${isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-slate-50 border-slate-300"}`}
            />
            <input
              required
              type="email"
              placeholder="Email Address"
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
            className="w-full bg-green-500 p-4 mt-8 rounded-xl font-bold text-white hover:bg-green-600 active:scale-95 shadow-lg shadow-green-500/20"
          >
            Create Account
          </button>
          <p className="text-sm mt-6 text-center text-gray-500 font-medium">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-500 ml-1 hover:underline font-bold"
            >
              Login
            </Link>
          </p>
        </form>
      </motion.div>
      <Footer />
    </div>
  );
}
