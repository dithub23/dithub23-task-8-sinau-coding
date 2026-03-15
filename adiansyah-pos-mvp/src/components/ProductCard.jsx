import { motion } from "framer-motion";

export default function ProductCard({ title, img, color, isDark }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      className={`${color} rounded-3xl p-8 shadow-xl flex flex-col items-center text-center group cursor-pointer border-4 ${isDark ? "border-transparent" : "border-white"}`}
    >
      <div className="bg-white/20 p-4 rounded-2xl mb-4 group-hover:bg-white/30 transition-colors shadow-inner">
        <img src={img} alt={title} className="w-24 h-24 object-contain" />
      </div>

      <h2 className="text-2xl font-black text-white drop-shadow-lg">{title}</h2>

      <button className="mt-4 bg-white text-slate-900 px-6 py-2 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-md">
        View Items
      </button>
    </motion.div>
  );
}
