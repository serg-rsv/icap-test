export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  next: string | null;
  prev: string | null;
  onPageChange: (page: number) => void;
}
