import React from 'react'
import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useGlobalFilter
} from 'react-table'
import { Search } from './search'
import { Pagination } from './pagination'
import { NoDataTable } from './no-data-table'
import { Loading } from './loading'

const Table = ({
  columns,
  data,
  title,
  pageSizes,
  addButton,
  showPagination,
  showSearch,
  loading
}: any) => {
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
      columns,
      data,
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
            <div className='table-title'>
              <div className='row'>
                <div className='col-sm-4'>
                  <div className='show-entries'>
                    <span>Show</span>
                    <select
                      value={pageSize}
                      onChange={(e) => {
                        setPageSize(Number(e.target.value))
                      }}
                    >
                      {pageSizes && pageSizes.allPageSize
                        ? pageSizes.allPageSize.map((pageSize: any) => (
                          <option key={pageSize} value={pageSize}>
                            {pageSize}
                          </option>
                        ))
                        : null}
                    </select>
                    <span>entries</span>
                  </div>
                </div>
                <div className='col-sm-4'>
                  <h2
                    className='text-center'
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                </div>
                {showSearch && (
                  <div className='col-sm-4'>
                    <Search
                      preGlobalFilteredRows={preGlobalFilteredRows}
                      globalFilter={state.globalFilter}
                      setGlobalFilter={setGlobalFilter}
                    />
                  </div>
                )}
                {addButton && (
                  <div
                    className={`col-sm-4 ${showSearch ? 'offset-sm-8 margin-top-10' : ''
                      }`}
                  >
                    <button
                      className='btn btn-primary pull-right'
                      onClick={() => addButton.onClick()}
                    >
                      {addButton?.title || ''}
                    </button>
                  </div>
                )}
              </div>
            </div>
            {loading > 0 ? (
              <Loading
                getTableProps={getTableProps}
                headerGroups={headerGroups}
              />
            ) : data.length <= 0 && loading === 0 ? (
              <NoDataTable
                getTableProps={getTableProps}
                headerGroups={headerGroups}
              />
            ) : (
              <table className='table table-bordered' {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup: any, index: number) => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                      {headerGroup.headers.map((column: any, index: number) => (
                        <th
                          key={index}
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          {column.render('Header')}
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <i className='fa fa-fw fa-arrow-up' />
                            ) : (
                              <i className='fa fa-fw fa-arrow-down' />
                            )
                          ) : null}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row: any, i: number) => {
                    prepareRow(row)
                    return (
                      <tr {...row.getRowProps()} key={i}>
                        {row.cells.map((cell: any, index: number) => {
                          return (
                            <td {...cell.getCellProps()} key={index}>
                              {cell.render('Cell')}
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            )}
            <div className='clearfix'>
              <div className='hint-text'>
                Showing <b>{pageIndex + 1}</b> out of{' '}
                <b>{pageOptions.length}</b> entities
                <br />
                <span>{rows.length} results found.</span>
              </div>
              {showPagination && (
                <Pagination
                  canPreviousPage={canPreviousPage}
                  canNextPage={canNextPage}
                  previousPage={previousPage}
                  nextPage={nextPage}
                  gotoPage={gotoPage}
                  pageIndex={pageIndex}
                  pageOptions={pageOptions}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function DataTable(props: any) {
  const columns = []
  props.fields.map((field: any) => {
    return columns.push({
      Header: field.name,
      accessor: field.key,
      disableSortBy: !field.isSortable || false
    })
  })

  if (props.onEditAction || props.onDeleteAction) {
    columns.push({
      Header: 'Actions',
      Cell: (row: any) => (
        <div>
          {props.onDeleteAction && (
            <span
              role='button'
              tabIndex={0}
              onClick={() => props.onDeleteAction(props.data[row.row.index])}
            >
              <i
                className='fa fa-trash'
                style={{
                  width: 30,
                  fontSize: 20,
                  padding: 7,
                  color: 'red'
                }}
              />
            </span>
          )}
          {props.onEditAction && (
            <span
              role='button'
              tabIndex={1}
              onClick={(_e: any) =>
                props.onEditAction(props.data[row.row.index])
              }
            >
              <i
                className='fa fa-pencil'
                style={{
                  width: 35,
                  fontSize: 20,
                  padding: 11,
                  color: 'rgb(40, 167, 69)'
                }}
              />
            </span>
          )}
        </div>
      )
    })
  }

  return (
      <Table
        pageSizes={
          props.pageSize || { allPageSize: [2, 4, 8, 10], defaultPageSize: 2 }
        }
        addButton={props.addButton}
        columns={columns}
        data={props.data || []}
        title={props.title || ''}
        showPagination={props.showPagination || false}
        showSearch={props.showSearch || false}
        loading={props.loading}
      />
  )
}
