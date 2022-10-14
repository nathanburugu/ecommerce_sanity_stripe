/** @format */

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runFireWorks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireWorks();
  }, []);

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2>THank You For Your Order</h2>
        <p className='email msg'>Check Your Email Inbox For The Receipt</p>
        <p className='description'>
          if you have any questions please email
          <a className='email' href='mailto:orders@example.com'>
            nathanburugu12@gmail.com
          </a>
        </p>
        <Link href='/'>
          <button type='button' width='300px' className='btn'>
            continue shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
