const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
      <button
        onClick={() => goToPage(1)}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-sm rounded disabled:opacity-40"
      >
        ⏮ First
      </button>

      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-sm rounded disabled:opacity-40"
      >
        ⬅ Prev
      </button>

      <span className="text-sm font-medium px-4 py-1 bg-blue-100 text-blue-800 rounded">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-sm rounded disabled:opacity-40"
      >
        Next ➡
      </button>

      <button
        onClick={() => goToPage(totalPages)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-sm rounded disabled:opacity-40"
      >
        Last ⏭
      </button>
    </div>
  );
};

export default Pagination;
