import React, { Component } from 'react'
import { DataTable } from './component/table'
import "./style.css"

interface fields {
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

interface ESTableProps {
  data: any[],
  fields: fields[],
  pageSize?: pageSize,
  onDeleteAction?: (e: any) => void,
  onEditAction?: (e: any) => void,
  title?: string,
  showPagination?: boolean,
  showSearch?: boolean,
  addButton?: addButton,
  loadingDuration?: number,
  className?: string,
}

interface ESTableState {
  loadingTime: number
}

export class ESTable extends Component<ESTableProps, ESTableState> {
  constructor(props: any) {
    super(props)
    this.state = {
      loadingTime: this.props.loadingDuration || 20000
    }
  }

  componentWillMount() {
    if (this.props.data) {
      if (this.props.data.length > 0) {
        this.setState({
          loadingTime: 0
        })
      }
    }
    const interval = setInterval(() => {
      this.setState({
        loadingTime: this.state.loadingTime - 1000
      })
      if (this.state.loadingTime <= 0) {
        this.setState({
          loadingTime: 0
        })
        clearInterval(interval)
      }
    }, 1000)
  }

  render() {
    return (
      <div className={`es-table ${this.props.className ? this.props.className : ''}`}>
        <DataTable
          showPagination={this.props.showPagination}
          title={this.props.title}
          pageSize={this.props.pageSize}
          addButton={this.props.addButton}
          showSearch={this.props.showSearch}
          onDeleteAction={this.props.onDeleteAction}
          onEditAction={this.props.onEditAction}
          data={this.props.data}
          fields={this.props.fields}
          loading={this.state.loadingTime}
        />
      </div>
    )
  }

  static defaultProps = {
    showPagination: true,
    title: "",
    pageSize: {
      allPageSize: [5, 10, 20, 50],
      defaultPageSize: 5,
    },
    showSearch: true,
    data: [],
    fields: [],
    loading: 5000
  };
}
