import React from 'react'
import { useAsyncDebounce } from 'react-table'

export const Search = ({ globalFilter, setGlobalFilter }: any) => {
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce((value: any) => {
    setGlobalFilter(value || undefined)
  }, 200)
  return (
    <div className='search-box'>
      <div className='input-group'>
        <span className='input-group-addon'>
          <i className='material-icons'>&#xE8B6;</i>
        </span>
        <input
          value={value || ''}
          type='text'
          className='form-control'
          placeholder='Search...'
          onChange={(e) => {
            setValue(e.target.value)
            onChange(e.target.value.trim())
          }}
        />
      </div>
    </div>
  )
}
