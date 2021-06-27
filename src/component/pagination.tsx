import React from 'react'

const pageNumber = (c: any, m: any) => {
  const current = c
  const last = m
  const delta = 2
  const left = current - delta
  const right = current + delta + 1
  const range = []
  const rangeWithDots = []
  let l

  for (let i = 1; i <= last; i++) {
    if (i === 1 || i === last || (i >= left && i < right)) {
      range.push(i)
    }
  }

  for (const i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1)
      } else if (i - l !== 1) {
        rangeWithDots.push('...')
      }
    }
    rangeWithDots.push(i)
    l = i
  }

  return rangeWithDots
}

export const Pagination = ({
  canPreviousPage,
  canNextPage,
  previousPage,
  nextPage,
  gotoPage,
  pageIndex,
  pageOptions
}: any) => {
  return (
    <ul className='pagination'>
      <li style={{cursor: "default"}} className={`page-item ${!canPreviousPage ? 'disabled' : ''}`}>
        <a
          className={`page-link ${!canPreviousPage ? 'disabled-link' : ''}`}
          onClick={() => previousPage()}
          // disabled={!canPreviousPage}
        >
          Previous
        </a>
      </li>
      {pageNumber(pageIndex, pageOptions.length).map((item: any) => {
        return item === '...' ? (
          <li key={Math.random()} className='page-item disabled'>
            {/* <a className='page-link' disabled> */}
            <a className='page-link disabled-link'>...</a>
          </li>
        ) : (
          <li
            key={item.toString()}
            className={`page-item ${item - 1 === pageIndex ? 'active' : ''}`}
          >
            <a className='page-link' onClick={() => gotoPage(item - 1)}>
              {item}
            </a>
          </li>
        )
      })}
      <li style={{ cursor: "default" }} className={`page-item ${!canNextPage ? 'disabled' : ''}`}>
        <a
          className={`page-link ${!canNextPage ? 'disabled-link' : ''}`}
          onClick={() => nextPage()}
          // disabled={!canNextPage}
        >
          Next
        </a>
      </li>
    </ul>
  )
}