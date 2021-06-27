import React from 'react'

export const Loading = () => {
  return (
    <table className='table table-bordered'>
      <tbody>
        <tr style={{ padding: '100px', display: "flex", justifyContent: "center" }}>
            <td
              className='fa fa-spinner fa-pulse'
              style={{
                fontSize: "40px",
                border: "none"
              }}
            />
        </tr>
      </tbody>
    </table>
  )
}
