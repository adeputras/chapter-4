import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './style.scss';

import { Bars } from 'react-loader-spinner';

const CariMobil = () => {
  const [cars, setCars] = useState([]);
  const [inputSample, setInputSample] = useState('');

  const [loading, setLoading] = useState(true);

  const baseUrl = "http://localhost:4000";

  const getCars = () => {
    Axios.get(`${baseUrl}/cars`)
      .then((response) => {
        setCars(response.data);
        setLoading(false);
      })
      .catch((error) =>
        // handle error
        console.log(error)
      );
  };

  const fetch = useRef(true);

  useEffect(() => {
    if (fetch.current) {
      getCars();
      fetch.current = false;
    }
  }, []);

  const submitData = () => {
    // Axios.post('https://testapi.org/post', { name: 'John Doe' });

    const formData = {
      name: inputSample,
      "category": 6,
      "price": 7290,
      "status": true,
      "start_rent_at": "2040-07-03T03:00:07.069Z",
      "finish_rent_at": "2002-02-26T07:56:36.623Z",
      "image": "http://loremflickr.com/640/480/brazil,rio",
      "createdAt": "2097-04-15T17:34:57.248Z",
      "updatedAt": "2019-10-28T13:24:33.132Z",
      "description": "odio.",
    }

    Axios.post(`${baseUrl}/cars`, formData)
    .then((response) => {
      if(response) {
        getCars();
        setInputSample('')
      }
    })
    .catch((error) =>
      // handle error
      console.log(error)
    );
  }

  return (
    <div className="carimobil">
      <div className="container">
        {loading ? (
          <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass="bars-loading"
          />
        ) : (
          <div className="row">
            {cars.map((car, index) => {
              return (
                <div className="col-lg-3 card-wrapper" key={index}>
                  <div className="card">
                    <div className="card-thumbnail">
                      <img src={car.image} alt="" />
                    </div>
                    <div className="card-desctiption">
                      <h3 className="name">{car.name}</h3>
                      <p className="price">Rp {car.price} / hari</p>
                      <p className="description">{car.description}</p>
                    </div>
                    <Link className='btn btn-success d-block' to={`/cari-mobil/${car.id}`}>Pilih Mobil</Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="form d-flex flex-column">
          <label htmlFor="" style={{ marginBottom: 10 }}>Input Data</label>
          <div className="d-inline-flex">
            <input type="text" value={inputSample} onChange={(e) => setInputSample(e.target.value)}/>
            <button style={{ marginLeft: 10 }} className='btn btn-success' type='button' onClick={submitData} >Submit</button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* {!loading && <div className="row">
          {cars.map((car, index) => {
            return (
              <div className="col-lg-4" key={index}>
                <div className="card">
                  <div className="card-thumbnail">
                    <img src={car.image} alt="" />
                  </div>
                  <div className="card-desctiption">
                    <h3 className="name">{car.name}</h3>
                    <p className="price">Rp {car.price} / hari</p>
                    <p className="description">{car.description}</p>
                  </div>
                  <Link to={`/cari-mobil/${car.id}`}>Pilih Mobil</Link>
                </div>
              </div>
            );
          })}
        </div>}
         */}
      </div>
    </div>
  );
};

export default CariMobil;
