import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

type Props = {
  page: number;
  pages: number;
  onPageChanged: (page: number) => void;
};

const PaginationSelector = ({ page, pages, onPageChanged }: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= pages; i++) pageNumbers.push(i);

  return (
    <Pagination>
      <PaginationContent>
        {/* First Page Condition */}
        {page !== 1 && (
          <PaginationItem>
            <PaginationPrevious href="#" onClick={() => onPageChanged(page - 1)} />
          </PaginationItem>
        )}
        {/* Other Pages */}
        {pageNumbers.map((number) => (
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={() => onPageChanged(number)}
              isActive={page === number}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}
        {/* Next Page Condition */}
        {page !== pageNumbers.length && (
          <PaginationItem>
            <PaginationNext href="#" onClick={() => onPageChanged(page + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSelector;
