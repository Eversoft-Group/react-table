import React, {useEffect, useState } from 'react'
import { DataTable } from './component/table'

export interface ESFields {
  name: string,
  key: string,
  isSortable?: boolean
}

interface pageSize {
  allPageSize?: number[],
  defaultPageSize?: number
}

interface addButton {
  title?: string,
  onClick?: (e: any) => void
}

export interface ESTableProps {
  data: any[],
  fields: ESFields[],
  pageSize?: pageSize,
  onDeleteAction?: (e: any) => void,
  onEditAction?: (e: any) => void,
  title?: string,
  showPagination?: boolean,
  showSearch?: boolean,
  addButton?: addButton,
  className?: string,
  loading?: number
}

const ESTable = (props: ESTableProps) => {
  const [loadingTime, setLoadingTime] = useState(props?.loading || 10000)

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingTime(loadingTime - 1000)
      if(loadingTime <= 0){
        setLoadingTime(0)
        clearInterval(interval)
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [loadingTime])

  useEffect(() => {
    if (props?.data?.length > 0) {
      setLoadingTime(0)
    }
  }, [props?.data?.length, setLoadingTime])

  return (
    <div className={`es-table ${props.className ? props.className : ''}`}>
      <DataTable
        showPagination={props.showPagination}
        title={props.title}
        pageSize={props.pageSize}
        addButton={props.addButton}
        showSearch={props.showSearch}
        onDeleteAction={props.onDeleteAction}
        onEditAction={props.onEditAction}
        data={props.data}
        fields={props.fields}
        loading={loadingTime}
      />
    </div>
  )
}

ESTable.defaultProps = {
  showPagination: true,
  title: "",
  pageSize: {
    allPageSize: [5, 10, 20, 50],
    defaultPageSize: 5,
  },
  showSearch: false,
  data: [],
  fields: []
};

export {
  ESTable
}
