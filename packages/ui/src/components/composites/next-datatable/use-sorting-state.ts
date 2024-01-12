import { SortingState } from '@tanstack/react-table';
import { useQueryDatatable } from '@unnamedrestaurant/ui/components/composites/next-datatable/use-query-datatable';

export const useSortingState = () => {
  const [sorting, setSorting, isLoading] = useQueryDatatable<SortingState>(
    'sorting',
    { defaultValue: [] },
  );

  return { sorting, setSorting, isLoading };
};
