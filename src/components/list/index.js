import React from 'react';
import { Link } from 'react-router-dom';
import { useCarsContext } from '../../contexts/carsContext';
import { currencyFormat } from '../../helper';
import { Bars } from 'react-loader-spinner';

const List = () => {
  const { loading, cars, emptyData } = useCarsContext();
  return (
    <div className="col-8">
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
              <div className="col-lg-6 card-wrapper" key={index}>
                <div className="card">
                  <div className="card-thumbnail">
                    <img
                      src={
                        car.image !== null
                          ? car.image
                          : 'https://trirama.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png'
                      }
                      alt=""
                    />
                  </div>
                  <div className="card-desctiption">
                    <h3 className="name">{car.name}</h3>
                    <p className="price">
                      Rp {currencyFormat(car.price)} / hari
                    </p>
                    <p className="description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Necessitatibus omnis blanditiis nobis modi odio alias
                      optio eum, reprehenderit praesentium soluta repellendus ea
                      tempora et? Asperiores odio aliquid sint dicta? Delectus?
                    </p>
                  </div>
                  <Link
                    className="btn btn-success d-block"
                    to={`/cari-mobil/${car.id}`}
                  >
                    Pilih Mobil
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {emptyData && <>Data Tidak Ditemukan</>}
    </div>
  );
};

export default List;
