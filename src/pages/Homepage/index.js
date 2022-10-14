import React, { useRef } from 'react';

import './style.scss';
const Homepage = () => {
  const inputRef = useRef();
  const figure = useRef(null);
  const text = '$';

  const drawTree = (data) => {
    let star = '';
    // Upside pyramid
    for (let i = 1; i <= data; i++) {
      // printing spaces
      for (let j = 1; j <= data - i; j++) {
        star += `<i style="opacity: 0">${text}</i>`;
      }
      // printing star
      for (let k = 1; k <= 2 * i - 1; k++) {
        star += `<i>${text}</i>`;
      }
      star += '<br>';
    }
    // downside pyramid
    for (let i = 1; i <= data - 1; i++) {
      // printing spaces
      for (let j = 0; j < i; j++) {
        star += `<i style="opacity: 0">${text}</i>`;
      }
      // printing star
      for (let k = (data - i) * 2 - 1; k > 0; k--) {
        star += `<i>${text}</i>`;
      }
      star += '<br>';
    }
    return (figure.current.innerHTML = star);
  };

  const submitData = (e) => {
    e.preventDefault();
    drawTree(inputRef.current.value);
  };
  return (
    <div className="homepage">
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div style={{ lineHeight: '1' }} ref={figure} />
        <form className="form d-flex flex-column p-2" onSubmit={submitData}>
          <label htmlFor="" style={{ marginBottom: 10 }}>
            Masukkan jumlah
          </label>
          <div className="d-inline-flex">
            <input type="number" className="px-2" ref={inputRef} />
            <button
              style={{ marginLeft: 10 }}
              className="btn btn-success"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="test" style={{ height: 1000}}></div>

      <div id="our-services" style={{ height: 600, backgroundColor: "#000000"}}>
        <h1>Our Services Section</h1>
      </div>
    </div>
  );
};

export default Homepage;
