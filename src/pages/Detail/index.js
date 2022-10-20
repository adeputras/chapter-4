import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { CheckCircle, Eye } from 'react-feather';
import './style.scss'

const Detail = () => {

  const [detail, setDetail] = useState({});
  let { productId } = useParams();

  const baseUrl = 'https://bootcamp-rent-cars.herokuapp.com';

  const fetch = useRef(true);

  const getDetail = (productId) => {
    Axios.get(`${baseUrl}/customer/car/${productId}`)
    .then((response) => {
      setDetail(response.data);
    })
    .catch((error) =>
      // handle error
      console.log(error)
    );
  };

  useEffect(() => {
    if (fetch.current) {
      fetch.current = false;
      getDetail(productId)
    }
  }, [productId]);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <CheckCircle className='icon-check' color="red" size={48} />
      <Eye color="red" size={48} />
      <h1>{detail.name}</h1>
      <img src={detail?.image} alt="" />
    </div>
  );
};

export default Detail;
