import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useGlobalFilter
} from 'react-table'
import { NoDataTable } from '../no-data-table'
import { Loading } from '../loading'
import React, { useMemo } from 'react'
import { TableComponent } from './table-component'
import { TableTop } from './table-top'
import { TableFooter } from './table-footer'

export const Table = ({
  columns,
  data,
  title,
  pageSizes,
  addButton,
  showPagination,
  showSearch,
  loading
}: any) => {
  const finalData = useMemo(() => data, [data])
  const finalColumns = useMemo(() => columns, [columns])
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    preGlobalFilteredRows,
    rows,
    setGlobalFilter,
    state: { pageIndex, pageSize }
  }: any = useTable(
    {
      columns: finalColumns,
      data: finalData,
      initialState: {
        pageIndex: 0,
        pageSize: pageSizes.defaultPageSize || pageSizes.allPageSize[0]
      } as any
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  return (
    <>
      <div className='container-xl'>
        <div className='table-responsive'>
          <div className='table-wrapper'>
            <TableTop
              pageSize={pageSize}
              pageSizes={pageSizes}
              setPageSize={setPageSize}
              title={title}
              showSearch={showSearch}
              preGlobalFilteredRows={preGlobalFilteredRows}
              setGlobalFilter={setGlobalFilter}
              state={state}
              addButton={addButton} />
            {loading > 0 ? (
              <Loading />
            ) : data.length <= 0 && loading === 0 ? (
              <NoDataTable
                getTableProps={getTableProps}
                headerGroups={headerGroups}
              />
            ) : (
              <TableComponent
                headerGroups={headerGroups}
                getTableProps={getTableProps}
                getTableBodyProps={getTableBodyProps}
                page={page}
                prepareRow={prepareRow} />
            )}
            <TableFooter
              showPagination={showPagination}
              pageIndex={pageIndex}
              pageOptions={pageOptions}
              rows={rows}
              canPreviousPage={canPreviousPage}
              canNextPage={canNextPage}
              previousPage={previousPage}
              nextPage={nextPage}
              gotoPage={gotoPage} />
          </div>
        </div>
      </div>
    </>
  )
}