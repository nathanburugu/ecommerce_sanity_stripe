/** @format */

import React from "react";
import { client } from "../lib/client";
import { Product, HeroBanner, FooterBanner } from "../components";

const Home = ({ products, bannerData }) => (
  <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    {console.log(bannerData)};
    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speakers of Many variations</p>
    </div>
    <div className='products-container'>
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </>
);
export const getServerSideProps = async () => {
  //here we are saying lets grab all the products from our sanity dashboard
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  //here we are saying lets grab all the banner data from our sanity dashboard
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
