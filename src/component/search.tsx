import React from 'react'

export const Search = ({ globalFilter, setGlobalFilter }: any) => {
  const [value, setValue] = React.useState(globalFilter)

  const debouncer = (func: Function, timeout: number) => {
    let timer: any;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
  const filterOut = (value: any) => {
    setGlobalFilter(value || undefined)
  }
  const processChange = debouncer((value: any) => filterOut(value), 500);

  return (
    <div className='search-box'>
      <div className='input-group'>
        <span className='input-group-addon'>
          <i className="fa fa-search" style={{
            fontSize: "15px",
            display: "flex"
          }} />
        </span>
        <input
          value={value || ''}
          type='text'
          className='form-control'
          placeholder='Search...'
          onChange={(e) => {
            setValue(e.target.value)
            processChange(value || undefined)
          }}
        />
      </div>
    </div>
  )
}
