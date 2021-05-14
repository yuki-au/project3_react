import React from 'react'
import Product from '../routes/product'

const ProductTable = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        { (items.length > 0) ? items.map( (item, index) => {
           return (
            <tr key={ index }>
              <td>{item.productID }</td>
              <td>{ item.productName }</td>
              <td>{ item.productPrice}</td>
            </tr>
          )
         }) : <tr><td colSpan="5">Loading...</td></tr> }
      </tbody>
    </table>
  );
}

export default ProductTable 