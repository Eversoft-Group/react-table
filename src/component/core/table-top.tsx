import React from "react"
import { Search } from "../search"
import { Title } from "./title"

const TableTop = ({
    pageSize,
    pageSizes,
    setPageSize,
    title,
    showSearch,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
    showPagination,
    dataLength,
    addButton
}: any) => {
    return (
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
                            {!showPagination && <option value={dataLength}>All</option>}
                        </select>
                        <span>entries</span>
                    </div>
                </div>
                <Title title={title} />
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
    )
}

export {
    TableTop
}