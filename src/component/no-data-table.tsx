import React from 'react'

export const NoDataTable = ({ getTableProps, headerGroups, errorMessage }: any) => {
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
      <tbody>
        <tr style={{ padding: '50px', display: "flex", justifyContent: "center" }}>
          <td colSpan={1} style={{
            border: "none",
          }}>
            {errorMessage
              ? <span dangerouslySetInnerHTML={{ __html: errorMessage }} />
              : <h6>No Data found</h6>
            }
          </td>
        </tr>
      </tbody>
    </table>
  )
}
