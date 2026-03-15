import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/adiansyah.png";

export default function Navbar() {
  const { cartItems, isDark, clearCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const currentUserEmail = localStorage.getItem("currentUserEmail");

  const userName = isLoggedIn
    ? localStorage.getItem(`${currentUserEmail}_name`) ||
      localStorage.getItem("userName") ||
      "User"
    : "Guest";

  const userAvatar = isLoggedIn
    ? localStorage.getItem(`${currentUserEmail}_avatar`)
    : null;

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("userAvatar");
    localStorage.removeItem("currentUserEmail");
    clearCart();
    navigate("/login");
  };

  return (
    <nav
      className={`flex justify-between items-center p-6 backdrop-blur-md sticky top-0 z-50 border-b transition-colors duration-300 ${isDark ? "bg-slate-800/50 border-slate-700/50" : "bg-white/20 border-slate-200 shadow-sm"}`}
    >
      <Link
        to={isLoggedIn ? "/dashboard" : "/login"}
        className="text-2xl font-black text-orange-500 hover:text-orange-400 flex items-center gap-3"
      >
        <img
          src={logo}
          alt="Logo"
          className="w-21 h-20 object-contain rounded-lg p-1"
        />
        <span
          className={`hidden sm:inline ${isDark ? "text-orange-500" : "text-[#1e293b]"}`}
        >
          Mart
        </span>
      </Link>

      <div className="flex items-center gap-6">
        {isLoggedIn && (
          <div
            className={`hidden md:block text-right border-r pr-4 ${isDark ? "border-slate-700" : "border-slate-200"}`}
          >
            <p
              className={`text-[10px] uppercase tracking-wider font-bold ${isDark ? "text-gray-500" : "text-slate-600"}`}
            >
              Halo, Welcome To Adiansyah Mart
            </p>
            <p
              className={`text-sm font-black ${isDark ? "text-orange-400" : "text-[#1e293b]"}`}
            >
              {userName}
            </p>
          </div>
        )}

        {isLoggedIn && (
          <Link
            to="/cart"
            className={`relative group p-2 rounded-full border ${isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-slate-100 border-slate-200 text-slate-800"}`}
          >
            <span className="text-xl block group-hover:scale-110 transition-transform">
              🛒
            </span>
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold animate-bounce border-2">
                {cartItems.length}
              </span>
            )}
          </Link>
        )}

        {isLoggedIn && (
          <Link
            to="/profile"
            className="w-10 h-10 bg-gradient-to-tr from-orange-500 to-yellow-400 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20 overflow-hidden hover:scale-110 transition-transform cursor-pointer"
          >
            {userAvatar ? (
              <img
                src={userAvatar}
                alt="User"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-white font-black text-lg">
                {userName.charAt(0).toUpperCase()}
              </span>
            )}
          </Link>
        )}

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-md active:scale-95"
          >
            Logout
          </button>
        ) : (
          !isAuthPage && (
            <Link
              to="/login"
              className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-md active:scale-95"
            >
              Login
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
