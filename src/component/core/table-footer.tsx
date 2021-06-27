import React from "react"
import { Pagination } from "../pagination"

const TableFooter = ({
    showPagination,
    pageIndex,
    pageOptions,
    rows,
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    gotoPage
}: any) => {
    return (
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
    )
}

export {
    TableFooter
}