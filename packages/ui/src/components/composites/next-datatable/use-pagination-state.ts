import { PaginationState } from '@tanstack/react-table';
import { useQueryDatatable } from '@unnamedrestaurant/ui/components/composites/next-datatable/use-query-datatable';

export const usePaginationState = () => {
  const [pagination, setPagination, isLoading] =
    useQueryDatatable<PaginationState>('pagination', {
      defaultValue: { pageIndex: 0, pageSize: 10 },
    });

  return { pagination, setPagination, isLoading };
};
