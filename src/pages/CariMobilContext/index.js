import React from 'react';
import { CarsProvider  } from '../../contexts/carsContext';
import './style.scss';
import FilterContext from '../../components/filterContext';
import List from '../../components/list';

const CariMobilContext = () => {
  return (
    <CarsProvider>
      <div className="carimobil">
        <br />
        <br />
        <div className="container">
          <FilterContext/>
          <List />
        </div>
      </div>
    </CarsProvider>
  );
};

export default CariMobilContext;
