export function Price({ price, oldPrice, big }) {
  return (
    <div className="flex flex-col items-center leading-tight">
      <p className="flex items-center gap-1">
        <span className={"orange font-extrabold " + (big ? "text-2xl" : "text-lg")}>
          {price.toLocaleString('fa-IR')}
        </span>
        <span className="text-neutral-400 text-xs">تومان</span>
      </p>
      {oldPrice && (
        <p className="text-[11px] text-neutral-400 line-through opacity-100">
          {oldPrice.toLocaleString('fa-IR')} تومان
        </p>
      )}
    </div>
  );
}

export function IconBtn({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="heartbeat text-neutral-500 hover:text-orange-500 transition-colors"
    >
      {children}
    </button>
  );
}