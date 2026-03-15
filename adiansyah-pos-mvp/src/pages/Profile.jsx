import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Profile() {
  const { isDark } = useCart();
  const navigate = useNavigate();
  const email = localStorage.getItem("currentUserEmail");

  const [user, setUser] = useState({
    userName: localStorage.getItem(`${email}_name`) || "User",
    phone: localStorage.getItem(`${email}_phone`) || "",
    bio: localStorage.getItem(`${email}_bio`) || "Hacking the world with code.",
    gender: localStorage.getItem(`${email}_gender`) || "Male",
    address: localStorage.getItem(`${email}_address`) || "",
    avatar: localStorage.getItem(`${email}_avatar`) || "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem(`${email}_name`, user.userName);
    localStorage.setItem(`${email}_phone`, user.phone);
    localStorage.setItem(`${email}_bio`, user.bio);
    localStorage.setItem(`${email}_gender`, user.gender);
    localStorage.setItem(`${email}_address`, user.address);
    localStorage.setItem(`${email}_avatar`, user.avatar);

    localStorage.setItem("userName", user.userName);
    localStorage.setItem("userAvatar", user.avatar);

    setIsEditing(false);
    window.location.reload();
  };

  return (
    <div
      className={`min-h-screen p-8 transition-colors ${isDark ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900"}`}
    >
      <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black italic text-orange-500">
            USER PROFILE
          </h1>
          <button
            onClick={() => navigate("/dashboard")}
            className="text-sm font-bold bg-slate-500/20 px-4 py-2 rounded-xl hover:bg-slate-500/40"
          >
            ← Back
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full border-4 border-orange-500 overflow-hidden bg-slate-700 flex items-center justify-center shadow-lg">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-4xl font-black">
                  {user.userName.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
            {isEditing && (
              <div className="mt-4">
                <label className="text-[10px] font-bold uppercase text-orange-500 block mb-1">
                  Avatar URL
                </label>
                <input
                  type="text"
                  name="avatar"
                  value={user.avatar}
                  onChange={handleChange}
                  className="text-[10px] w-full p-2 bg-slate-800 rounded-lg border border-slate-700 text-white outline-none"
                  placeholder="Paste link foto..."
                />
              </div>
            )}
          </div>

          <div className="flex-1 w-full space-y-4">
            <div>
              <label className="text-xs font-bold uppercase text-slate-500">
                Full Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="userName"
                  value={user.userName}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg bg-slate-800 border border-slate-700 mt-1 text-white"
                />
              ) : (
                <p className="text-xl font-black">{user.userName}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">
                  Phone
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg bg-slate-800 border border-slate-700 mt-1 text-white"
                  />
                ) : (
                  <p className="font-bold">{user.phone || "-"}</p>
                )}
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">
                  Gender
                </label>
                {isEditing ? (
                  <select
                    name="gender"
                    value={user.gender}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg bg-slate-800 border border-slate-700 mt-1 text-white"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                ) : (
                  <p className="font-bold">{user.gender}</p>
                )}
              </div>
            </div>
            <div>
              <label className="text-xs font-bold uppercase text-slate-500">
                Bio
              </label>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={user.bio}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg bg-slate-800 border border-slate-700 mt-1 text-white"
                  rows="2"
                />
              ) : (
                <p className="italic text-slate-400">"{user.bio}"</p>
              )}
            </div>
            <div>
              <label className="text-xs font-bold uppercase text-slate-500">
                Address
              </label>
              {isEditing ? (
                <textarea
                  name="address"
                  value={user.address}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg bg-slate-800 border border-slate-700 mt-1 text-white"
                  rows="2"
                />
              ) : (
                <p className="text-sm font-medium">
                  {user.address || "Belum ada alamat."}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="flex-1 bg-orange-500 text-white font-black py-3 rounded-2xl hover:bg-orange-600 shadow-lg"
              >
                SAVE
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="flex-1 bg-slate-700 text-white font-black py-3 rounded-2xl hover:bg-slate-600"
              >
                CANCEL
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="w-full bg-orange-500 text-white font-black py-3 rounded-2xl hover:bg-orange-600 shadow-lg"
            >
              EDIT PROFILE
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
