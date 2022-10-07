/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './style.scss';

import { Bars } from 'react-loader-spinner';

const CariMobil = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // const dataCars = [
  //   {
  //     id: 1,
  //     category: 4,
  //     image: 'https://picsum.photos/id/1019/270/160',
  //     name: 'Innova',
  //     price: 500000,
  //     status: true,
  //     finish_rent_at: null,
  //     createdAt: '2022-09-30T14:32:02.159Z',
  //     start_rent_at: null,
  //     updatedAt: null,
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   },
  //   {
  //     id: 20,
  //     category: 4,
  //     image: 'https://picsum.photos/id/1019/270/160',
  //     name: 'Pajero',
  //     price: 500000,
  //     status: true,
  //     finish_rent_at: null,
  //     createdAt: '2022-09-30T14:32:02.159Z',
  //     start_rent_at: null,
  //     updatedAt: null,
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   },
  // ];

  // const getCars = () => {
  //   fetch('https://bootcamp-rent-car.herokuapp.com/admin/car')
  //     .then((response) => response.json())
  //     .then((data) => setCars(dataCars));
  // };
  const getCars = () => {
    Axios.get('https://633ffc6ed1fcddf69cae3eac.mockapi.io/cars')
      .then((response) => {
        setCars(response.data);
        setLoading(false);
      })
      .catch((error) =>
        // handle error
        console.log(error)
      );
  };
  useEffect(() => {
    getCars();
  }, []);

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
            wrapperClass=""
            // visible={true}
          />
        ) : (
          <div className="row">
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
          </div>
        )}

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
