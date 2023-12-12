import React from 'react';
import Colors from './Colors';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 426 })
  const isTablet = useMediaQuery({ maxWidth: 769 })

  return (
    <div>
      {isMobile || isTablet ? (
        <div className={`mt-3 w-100 py-5 container-fluid `} style={{
          backgroundColor: Colors.green
        }}>
          <div className='container-fluid w-100 d-flex justify-content-between align-items-center text-white flex-column'>
            <div className='w-100 d-flex justify-content-start align-items-center flex-column'>
              <h3 className='fw-bold'>ZELDABIL</h3>
              <p className='mb-0'>Tentang Media UMKM</p>
              <p className='mb-0'>Syarat & Ketentuan</p>
              <p className='mb-0'>Kebijakan Privasi</p>
            </div>
            <div className='w-100 d-flex justify-content-start align-items-center flex-column my-5'>
              <h3 className='fw-bold'>Informasi</h3>
              <p className='mb-0'>FAQ (Tanya Jawab)</p>
            </div>
            <div className='w-100 d-flex justify-content-center align-items-center flex-column my-5'>
              <h3 className='fw-bold'>Penjual</h3>
              <p className='mb-0'>Panduan Penjual</p>
              <p className='mb-0'>Control Tower</p>
              <p className='mb-0'>Marketplace</p>
              <p className='mb-0'>Tender</p>
            </div>
            <div className='w-100 d-flex justify-content-center align-items-start flex-column'>
              <h3 className='fw-bold text-center w-100'>Hubungi Kami</h3>
              <p className='mb-0 text-center w-75 m-auto'>Jl. Permata Indah No.10 Gedung Telkom Direktorat Bussiness and Technology</p>
              <p className='mb-0 text-center w-75 m-auto'>Jl. Prof. Dr. Soepomo No. 139, Jakarta Selatan, DKI Jakarta, 12810 Indonesia</p>
              <div className='d-flex justify-content-center mt-1 align-items-center w-50 m-auto'>
                <button className='btn text-white'>
                  <i className="fa-brands fa-facebook fs-3"></i>
                </button>
                <button className='btn text-white'>
                  <i className="fa-brands fa-twitter fs-3"></i>
                </button>
                <button className='btn text-white'>
                  <i className="fa-brands fa-square-instagram fs-3"></i>
                </button>
                <button className='btn text-white'>
                  <i className="fa-brands fa-tiktok fs-3"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`mt-5 w-100 py-3 container-fluid `} style={{
          backgroundColor: Colors.green
        }}>
          <div className='container-fluid w-100 d-flex justify-content-between align-items-center text-white'>
            <div className='w-50 d-flex justify-content-start align-items-center flex-column'>
              <h3 className='fw-bold'>ZELDABIL</h3>
              <p className='mb-0'>Tentang Media UMKM</p>
              <p className='mb-0'>Syarat & Ketentuan</p>
              <p className='mb-0'>Kebijakan Privasi</p>
              <p className='mb-0'>Finance</p>
              <p className='mb-0 opacity-0'>Finance</p>
              <p className='mb-0 opacity-0'>Finance</p>
            </div>
            <div className='w-50 d-flex justify-content-start align-items-center flex-column'>
              <h3 className='fw-bold'>Informasi</h3>
              <p className='mb-0'>FAQ (Tanya Jawab)</p>
              <p className='mb-0 opacity-0'>Finance</p>
              <p className='mb-0 opacity-0'>Finance</p>
              <p className='mb-0 opacity-0'>Finance</p>
              <p className='mb-0 opacity-0'>Finance</p>
              <p className='mb-0 opacity-0'>Finance</p>
            </div>
            <div className='w-50 d-flex justify-content-center align-items-center flex-column'>
              <h3 className='fw-bold'>Penjual</h3>
              <p className='mb-0'>Panduan Penjual</p>
              <p className='mb-0'>Control Tower</p>
              <p className='mb-0'>Marketplace</p>
              <p className='mb-0'>Tender</p>
              <p className='mb-0 opacity-0'>Finance</p>
              <p className='mb-0 opacity-0'>Finance</p>
            </div>
            <div className='w-50 d-flex justify-content-start align-items-start flex-column'>
              <h3 className='fw-bold text-center w-100'>Hubungi Kami</h3>
              <p className='mb-0 text-start'>Jl. Permata Indah No.10 Gedung Telkom Direktorat Bussiness and Technology</p>
              <p className='mb-0 text-start'>Jl. Prof. Dr. Soepomo No. 139, Jakarta Selatan, DKI Jakarta, 12810 Indonesia</p>
              <div className='d-flex justify-content-between mt-1 '>
                <button className='btn text-white'>
                  <i className="fa-brands fa-facebook fs-3"></i>
                </button>
                <button className='btn text-white'>
                  <i className="fa-brands fa-twitter fs-3"></i>
                </button>
                <button className='btn text-white'>
                  <i className="fa-brands fa-square-instagram fs-3"></i>
                </button>
                <button className='btn text-white'>
                  <i className="fa-brands fa-tiktok fs-3"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;