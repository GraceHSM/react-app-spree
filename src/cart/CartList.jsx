import React from 'react';

const CartList = () => {
  return(
    <div className='fixed-top d-flex justify-content-end mt-5 mr-5'>
      <table className="table col-4 card">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CartList;