export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goPrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      scrollUp();
    }
  };
  const goNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      scrollUp();
    }
  };
  const goToPage = (page) => {
    onPageChange(page);
    scrollUp();
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={goPrev}
        disabled={currentPage === 1}
        className="w-9 h-9 rounded-full border border-red-400 text-red-500 hover:bg-red-500 hover:text-white transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-red-500 disabled:cursor-not-allowed"
      >
        ‹
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`w-9 h-9 rounded-full border text-sm font-bold transition-colors ${
            page === currentPage
              ? "bg-red-500 text-white border-red-500"
              : "border-neutral-200 hover:bg-neutral-100"
          }`}
        >
          {page.toLocaleString("fa-IR")}
        </button>
      ))}
      <button
        onClick={goNext}
        disabled={currentPage === totalPages}
        className="w-9 h-9 rounded-full border border-red-400 text-red-500 hover:bg-red-500 hover:text-white transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-red-500 disabled:cursor-not-allowed"
      >
        ›
      </button>
    </div>
  );
}