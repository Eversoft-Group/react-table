import React from 'react'

export const NoDataTable = ({ getTableProps, headerGroups }: any) => {
  return (
    <table className='table table-bordered' {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup: any, index: number) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column: any, index: number) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                key={index}
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
      <div style={{ padding: '50px' }}>No Data found</div>
    </table>
  )
}
