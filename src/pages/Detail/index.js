import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CheckCircle, Eye } from 'react-feather';
import { getDetailCar } from '../../actions'
import './style.scss';

const Detail = () => {
  const dispatch = useDispatch()
  const detail = useSelector(state => state.detailCar.data)
  // const [detail, setDetail] = useState({});
  let { productId } = useParams();
  const baseUrl = 'https://bootcamp-rent-cars.herokuapp.com';

  const fetch = useRef(true);

  // const getDetail = (productId) => {
  //   Axios.get(`${baseUrl}/customer/car/${productId}`)
  //     .then((response) => {
  //       setDetail(response.data);
  //     })
  //     .catch((error) =>
  //       // handle error
  //       console.log(error)
  //     );
  // };

  useEffect(() => {
    if (fetch.current) {
      fetch.current = false;
      // getDetail(productId);
      dispatch(getDetailCar(baseUrl, productId))
    }
  }, [productId, dispatch]);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <CheckCircle className="icon-check" color="red" size={48} />
      <Eye color="red" size={48} />
      <h1>{detail.name}</h1>
      <img
        src={
          detail.image !== null
            ? detail.image
            : 'https://trirama.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png'
        }
        alt=""
      />
    </div>
  );
};

export default Detail;
