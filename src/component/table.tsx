import React from 'react'
import { Table } from "./core/core"

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
      Cell: function CellFunction(row: any) {
        return (
          <>
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
          </>
        )
      }
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
