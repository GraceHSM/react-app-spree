import React from 'react';

const ProductItem = ({name, description, display_price}) => {
  return(
    <div className='col-md-6 col-xl-4 mb-3'>
      <div className='card'>
        <img src="" alt="" className='card-img-top'/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p>{display_price}</p>
          <div className='text-right'>
            <span className='btn btn-primary'>Add to Cart</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem;
