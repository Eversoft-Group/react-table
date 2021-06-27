import React from "react"

const TableComponent = ({ headerGroups, getTableProps, getTableBodyProps, page, prepareRow }: any) => {
    return (
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
    )
}

export { TableComponent }