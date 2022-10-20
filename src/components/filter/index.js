import React from 'react'

const Filter = (filterData) => {
  
  return (
    <div className="row">
          <div className="col">
            <form className="form d-flex w-100" onSubmit={filterData.getData}>
              <div className="d-flex mb-4">
                <label className='mr-2 d-block' htmlFor="" style={{ marginBottom: 10 }}>
                  Nama Mobil
                </label>
                <input type="text" className="px-2" ref={filterData.namaMobil} />
              </div>
              <div className="d-flex mb-4">
                <label className='mr-2' htmlFor="" style={{ marginBottom: 10 }}>
                  Kategory
                </label>
                <select ref={filterData.category}>
                  <option />
                  <option value="small">2 - 4 orang</option>
                  <option value="medium">4 - 6 orang</option>
                  <option value="large">6 - 8 orang</option>
                </select>
              </div>

              <div className="d-flex mb-4">
                <label className='mr-2' htmlFor="" style={{ marginBottom: 10 }}>
                Harga
                </label>
                <select ref={filterData.harga}>
                  <option />
                  <option value="small">{'< Rp. 400.000'}</option>
                  <option value="medium">Rp. 400.000 - Rp. 600.000</option>
                  <option value="large">{'> Rp. 600.000'}</option>
                </select>
              </div>

              <div className="d-flex mb-4">
                <label className='mr-2' htmlFor="" style={{ marginBottom: 10 }}>
                Status
                </label>
                <select ref={filterData.statusOrder}>
                <option />
                  <option value="true">Tersedia</option>
                  <option value="false">Disewa</option>
                </select>
              </div>

              <button
                className="btn btn-success"
                type="submit"
              >
                Submit
              </button>
            </form>
            <br />
            <br />

          </div>
        </div>
  )
}

export default Filter