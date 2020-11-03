import React, { useState, useEffect, useCallback } from 'react';
import client from '../spreeApi/spreeApi';
import ProductItem from './productItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);

  const fetchProductList = useCallback(async (index) => {
    const productResponse = await client.products.list({ page: index });
    const data = productResponse.success().data;

    setProducts((products) => products.concat(data));
  }, [])

  const scrollHandle = useCallback((e) => {
    // TODO: Debounce & Throttle
    // useRef
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      setPageIndex(pageIndex + 1);
    }
  }, [pageIndex])

  useEffect(() => {
    fetchProductList(pageIndex);

  }, [pageIndex, fetchProductList]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandle);

    return () => window.removeEventListener("scroll", scrollHandle);
  });

  const displayProducts = products.map((p) => {
    const { name, description, display_price } = p.attributes;
    return (
      <ProductItem key={p.id} name={name} display_price={display_price} description={description} />
    );
  });

  return (
    <div className='row d-flex mt-5 pt-2'>
      {displayProducts}
    </div>
  );
}

export default ProductList;
