import React from 'react';

const Header = () => {
  return (
    <div className='position-fixed top-0 w-100 shadow container-fluid z-3 bg-white'>
      <div className='d-flex justify-content-beetwen align-items-center py-3 w-100 container-fluid'>
        <div className='d-flex justify-content-start align-items-center w-25'>
          <img src="/LOGOUMKM.png" alt="" className='' />
        </div>
        <div className='w-100'>
          <div className='w-100 rounded-5 opacity-75 px-2' style={{
            border: '0.5px solid black'
          }}>
            <form className='w-100 d-flex justify-content-between'>
              <input type="text" className='w-100 border-0 rounded-5 py-2 px-3' style={{
                outline: "none"
              }} />
              <button className='btn' type='submit'>
                <i className="fa-solid fa-magnifying-glass fs-4"></i>
              </button>
            </form>
          </div>
        </div>
        <div className='w-25 ps-2 d-flex justify-content-between align-items-center'>
          <button className='btn'>
            <i className="fa-solid fa-cart-shopping fs-4"></i>
          </button>
          <button className='btn w-50 mx-1 fw-bolder' style={{
            background: "transparent",
            border: "1px solid #015546",
            color: "#015546"
          }} onMouseOver={(e) => {
            e.target.style.background = '#015546';
            e.target.style.color = '#ffffff';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#015546';
          }}>Daftar</button>

          <button className='btn w-50 mx-1 fw-bolder' style={{
            backgroundColor: "#FFC700",
            color: "#FFFFFF"
          }} onMouseOver={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#FFC700';
            e.target.style.border = '1px solid #FFC700'
          }}
          onMouseOut={(e) => {
            e.target.style.background = '#FFC700';
            e.target.style.color = '#FFFFFF';
          }}>Masuk</button>
        </div>
      </div>
    </div>
  );
};

export default Header;