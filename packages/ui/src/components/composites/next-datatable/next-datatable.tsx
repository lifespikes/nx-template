import { DataTable, DataTableProps } from '@unnamedrestaurant/ui/components/composites';
import { useNextTableStateInternal } from '@unnamedrestaurant/ui/components/composites';

export const NextDataTable = <D extends Record<any, any>>(
  props: DataTableProps<D>
) => {
  const {
    pagination,
    columnVisibility,
    sorting,
    columnFilters,
    setPagination,
    setColumnVisibility,
    setSorting,
    setColumnFilters,
    isLoading
  } = useNextTableStateInternal();

  const _loading = props.isLoading || isLoading;

  return (
    <DataTable
      {...props}
      tableOptions={{
        manualPagination: true,
        manualSorting: true,
        manualFiltering: true,
        state: {
          pagination,
          sorting,
          columnVisibility,
          columnFilters
        },
        onSortingChange: setSorting,
        onPaginationChange: setPagination,
        onColumnVisibilityChange: setColumnVisibility,
        onColumnFiltersChange: setColumnFilters
      }}
      isLoading={_loading}
    />
  );
};
