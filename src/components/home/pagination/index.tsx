import {
  CaretDoubleRight,
  CaretDoubleLeft,
  CaretRight,
  CaretLeft,
} from "@phosphor-icons/react";

export default function Pagination({
  totalPages,
  handleChangePage,
  currentPage,
}: {
  totalPages: number;
  handleChangePage: (page: number) => void;
  currentPage: number;
}) {
  return (
    <div className="flex flex-col items-center gap-2 mt-6">
      <div className="text-sm font-thin">
        Você está na página {currentPage} de {totalPages}
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => {
            return currentPage > 0 && handleChangePage(0);
          }}
          disabled={currentPage === 1}
          className={`${currentPage === 1 ? "text-base-label" : "text-black"}`}
        >
          <CaretDoubleLeft size={20} />
        </button>
        <button
          onClick={() => {
            return currentPage > 1 && handleChangePage(currentPage);
          }}
          disabled={currentPage === 1}
          className={`${currentPage === 1 ? "text-base-label" : "text-black"}`}
        >
          <CaretLeft size={20} />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handleChangePage(index)}
            className={`${
              currentPage === index + 1
                ? "bg-black px-2 rounded-lg text-white "
                : "bg-transparent px-1 rounded-lg text-black "
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handleChangePage(currentPage)}
          disabled={currentPage === totalPages}
          className={`${
            currentPage === totalPages ? "text-base-label" : "text-black"
          }`}
        >
          <CaretRight size={20} />
        </button>
        <button
          onClick={() => handleChangePage(totalPages)}
          disabled={currentPage === totalPages}
          className={`${
            currentPage === totalPages ? "text-base-label" : "text-black"
          }`}
        >
          <CaretDoubleRight size={20} />
        </button>
      </div>
    </div>
  );
}
