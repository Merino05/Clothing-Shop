import { Link } from "react-router-dom";

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center gap-2 text-xs text-neutral-400">
      {items.map((item, i) => (
        <span key={item.path} className="flex items-center gap-2">
          {i > 0 && <span>/</span>}
          {i === items.length - 1 ? (
            <span className="text-neutral-700 font-bold">{item.label}</span>
          ) : (
            <Link to={item.path} className="hover:text-red-500 transition-colors">
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}