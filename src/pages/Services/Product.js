import React from 'react';
import { ProductContext} from '../../App'

const Product = () => {
    return (
      <ProductContext.Consumer>
      {
        user => {
          return <div >Hello {user}</div>
        }
      }
      </ProductContext.Consumer>
    )
}

export default Product;