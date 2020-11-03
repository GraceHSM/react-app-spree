import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleList } from './redux';

import CartList from './CartList';

import client from '../spreeApi/spreeApi';

const Nav = () => {
  const isOpen = useSelector(store => store.cart.isOpen);
  const dispatch = useDispatch();

  const [cartData, setCartData] = useState([]);

  const getToken = () => {
    return localStorage.getItem('spreeOrderToken');
  }

  const setToken = (orderToken) => {
    localStorage.setItem('spreeOrderToken', orderToken);
  }

  const createToken = useCallback(async () => {
    const response = await client.cart.create();

    if(response.isSuccess()) {
      const newToken = response.success().data.attributes.token;
      setToken(newToken);
    }
  }, [])

  const fetchCartList = async (orderToken) => {
    const response = await client.cart.show({ orderToken });
    if(response.isSuccess){
      setCartData(response.success().data);
      console.log(response.success().data);
    }
  }

  useEffect(() => {
    const token = getToken();

    if (token === null){
      createToken();
    } else {
      fetchCartList(token);
    }
  }, [createToken])

  return(
    <div>
      <div className='navbar fixed-top bg-light'>
        <div className="container d-flex">
          <title className='d-inline-block font-weight-bold p-1'>Spree</title>
          <div className="d-inline-block font-weight-bold p-1" onClick={ () => dispatch(toggleList(isOpen)) }> Cart </div>
        </div>
      </div>
      <div>
        {isOpen && <CartList />}
      </div>
    </div>
  );
}

export default Nav;
