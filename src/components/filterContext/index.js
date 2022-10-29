import React, { useRef } from 'react';
import { useCarsDispatchContext, useCarsActions  } from '../../contexts/carsContext';
// import { getCars } from '../../actions';
// import { useDispatch } from 'react-redux';
const Filter = () => {
  const dispatch = useCarsDispatchContext();
  const {getCars}  = useCarsActions(dispatch)
  const baseUrl = 'https://bootcamp-rent-cars.herokuapp.com';
  const namaMobil = useRef('');
  const category = useRef('');
  const harga = useRef('');
  const statusOrder = useRef('');

  const price = () => {
    switch (harga.current.value) {
      case 'small':
        return { maxPrice: 400000 };
      case 'medium':
        return { minPrice: 400000, maxPrice: 600000 };
      case 'large':
        return { minPrice: 600000 };
      default:
        return '';
    }
  };

  const Submit = (e) => {
    e.preventDefault();
    
    const params = {
      name: namaMobil.current.value,
      category: category.current.value,
      minPrice: price().minPrice,
      maxPrice: price().maxPrice,
      isRented: statusOrder.current.value,
    };
    getCars(baseUrl, params)
  };
  return (
    <div className="row">
      <div className="col">
        <form className="form d-flex w-100" onSubmit={Submit}>
          <div className="d-flex mx-4">
            <label
              className="mr-2 d-block"
              htmlFor=""
              style={{ marginBottom: 10 }}
            >
              Nama Mobil
            </label>
            <input type="text" className="px-2" ref={namaMobil} />
          </div>
          <div className="d-flex mx-4">
            <label className="mr-2" htmlFor="" style={{ marginBottom: 10 }}>
              Kategory
            </label>
            <select ref={category}>
              <option />
              <option value="small">2 - 4 orang</option>
              <option value="medium">4 - 6 orang</option>
              <option value="large">6 - 8 orang</option>
            </select>
          </div>

          <div className="d-flex mx-4">
            <label className="mr-2" htmlFor="" style={{ marginBottom: 10 }}>
              Harga
            </label>
            <select ref={harga}>
              <option />
              <option value="small">{'< Rp. 400.000'}</option>
              <option value="medium">Rp. 400.000 - Rp. 600.000</option>
              <option value="large">{'> Rp. 600.000'}</option>
            </select>
          </div>

          <div className="d-flex mx-4">
            <label className="mr-2" htmlFor="" style={{ marginBottom: 10 }}>
              Status
            </label>
            <select ref={statusOrder}>
              <option />
              <option value="true">Tersedia</option>
              <option value="false">Disewa</option>
            </select>
          </div>

          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </form>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Filter;
