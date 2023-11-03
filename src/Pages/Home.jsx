import React from 'react';
import Header from '../Components/Header';
import Colors from '../Components/Colors'

const Home = () => {
  return (
    <div className='py-5' style={{
      marginTop: "8%"
    }}>
      <Header />

      {/* banner */}
      <div className='container-fluid'>
        <div id="carouselExampleAutoplaying" className="carousel slide container-fluid z-0" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%"
            }} />
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%"
            }} />
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%"
            }} />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/banner.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/banner.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/banner.png" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>
      {/* end of banner */}

      <div className='py-5 d-flex justify-content-center align-items-center w-100 mt-5 position-relative container-fluid'>
        <div className='container-fluid d-flex justify-content-center align-items-center flex-column position-relative'>
          <div className='px-5 fs-5 fw-bolder py-2 rounded-3 position-absolute top-0 start-50 translate-middle-x shadow z-3' style={{
            backgroundColor: Colors.green,
            color: "white"
          }}>KETEGORI</div>
          <div className='w-100 d-flex justify-content-between align-items-center rounded-5 py-4' style={{
            height: "65vh"
          }}>
            <div className='w-50 h-100 rounded-start-4 d-flex justify-content-center align align-items-center flex-column px-3 position-relative' style={{
              backgroundImage: "linear-gradient(to bottom, rgba(235, 235, 235, 0.6), rgba(235, 235, 235, 0.6)), url(/kategoriMakanan.png)",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}>
              <h1 style={{
                fontSize: "7rem",
                color: Colors.green
              }} className='fst-italic fw-light'>Food &</h1>
              <h1 style={{
                fontSize: "7rem",
                color: Colors.green
              }} className='fst-italic fw-light'>Beverages</h1>

              <button className='position-absolute bottom-0 btn fw-bold py-1' style={{
                right: "0%",
                backgroundColor: Colors.yellow,
                color: Colors.green
              }}>
                Lihat Selengkapnya {'>>>'}
              </button>
            </div>
            <div className='w-50 h-100 d-flex justify-content-center align align-items-center flex-column px-3 position-relative' style={{
              backgroundImage: "linear-gradient(to bottom, rgba(235, 235, 235, 0.5), rgba(235, 235, 235, 0.5)), url(/kategoriMinuman.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}>
              <h1 style={{
                fontSize: "7rem",
                color: Colors.green
              }} className='fst-italic fw-light'>Drink's</h1>

              <button className='position-absolute bottom-0 btn fw-bold py-1' style={{
                right: "0%",
                backgroundColor: Colors.yellow,
                color: Colors.green
              }}>
                Lihat Selengkapnya {'>>>'}
              </button>
            </div>
            <div className='w-50 h-100 rounded-end-4 d-flex justify-content-center align align-items-center flex-column px-3 position-relative' style={{
              backgroundImage: "linear-gradient(to bottom, rgba(235, 235, 235, 0.6), rgba(235, 235, 235, 0.6)), url(/kategoriKerajinan.png)",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}>
              <h1 style={{
                fontSize: "7rem",
                color: Colors.green
              }} className='fst-italic fw-light'>Art &</h1>
              <h1 style={{
                fontSize: "7rem",
                color: Colors.green
              }} className='fst-italic fw-light'>Craft</h1>

              <button className='position-absolute bottom-0 btn fw-bold py-1' style={{
                right: "0%",
                backgroundColor: Colors.yellow,
                color: Colors.green
              }}>
                Lihat Selengkapnya {'>>>'}
              </button>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;