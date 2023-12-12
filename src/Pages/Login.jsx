import React, { useState } from 'react';
import Colors from '../Components/Colors';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';

const Login = () => {
  const isMobile = useMediaQuery({ maxWidth: 426 })
  const isTablet = useMediaQuery({ maxWidth: 769 })

  const passVisibleRef = useRef(null)
  const eyeRefPass = useRef(null)

  let click1 = 0
  const passwordVisible1 = () => {
    click1 += 1
    eyeRefPass.current.className = "fa-solid fa-eye-slash text-black-50 fs-3"
    passVisibleRef.current.type = "free"
    if (click1 === 2) {
      eyeRefPass.current.className = "fa-solid fa-eye text-black-50 fs-3"
      passVisibleRef.current.type = "password"
      click1 = 0
    }
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const validate = async (e) => {
    e.preventDefault()
    const data = {
      identifier: email,
      password: password
    }

    try {
      const resp = await axios.post('http://localhost:1337/api/auth/local', data)
      const user = resp.data.user
      console.log(resp.data)
      if (user) {
        alert("login succes!"),
        navigate('/')
      }
    } catch (error) {
      alert('wrong email or password! please try again!')
      console.log(error)
    }
  }

  return (
    <div>
      {isMobile || isTablet ? (
        <div className='vh-100 w-100 d-flex justify-content-center align-items-center' style={{
          backgroundImage: "url(/logBack.png)",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}>
          <div className='w-75 m-auto bg-white py-3 rounded-3 container shadow-lg' style={{
            height: "85vh"
          }}>
            <Link to={'/'} className='position-absolute mt-1'>
              <i className="fa-solid fa-arrow-left fs-3 mb-0" style={{
                color: Colors.green
              }}></i>
            </Link>
            <h3 className='text-center mb-0 fs-3 fw-bold mb-5' style={{
              color: Colors.green
            }}>MASUK</h3>

            <div className=''>
              <form className='w-100 d-flex justify-content-center align-items-center flex-column'>
                <div className='py-3 w-100 my-3 rounded-4 container d-flex justify-content-between align-items-center' style={{
                  border: `1px solid ${Colors.green}`
                }}>
                  <i className="fa-solid fa-envelope text-black-50 fs-2 mb-0 mt-1"></i>
                  <input type="email" placeholder='Email' className='w-100 border-0 px-3 fs-5 text-black-50' style={{
                    outline: "none"
                  }} />
                </div>
                <div className='py-3 w-100 my-3 rounded-4 container d-flex justify-content-between align-items-center' style={{
                  border: `1px solid ${Colors.green}`
                }}>
                  <i className="fa-solid fa-lock text-black-50 fs-2 mb-0"></i>
                  <input type="password" placeholder='Password' className='w-100 border-0 px-3 fs-5 text-black-50' style={{
                    outline: "none"
                  }} ref={passVisibleRef} />
                  <i className="fa-solid fa-eye text-black-50 fs-3" onClick={() => {
                    passwordVisible1()
                  }} ref={eyeRefPass}></i>
                </div>
                <button type='submit' className='btn text-white w-50 fs-4 fw-bold rounded-4 my-3' style={{
                  backgroundColor: Colors.green
                }}>LOGIN</button>

                <div className='w-100 d-flex justify-content-between align-items-center my-2'>
                  <hr className='w-50 bg-light-subtle me-4' />
                  <p className='mb-0'>Atau</p>
                  <hr className='w-50 bg-light-subtle ms-4' />
                </div>
                <p className='mb-0'>Belum punya akun? <Link to={'/register'}>Daftar Sekarang</Link></p>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className='vh-100 w-100 d-flex justify-content-center align-items-center' style={{
          backgroundImage: "url(/logBack.png)",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}>
          <div className='w-25 m-auto bg-white py-3 rounded-3 container shadow-lg' style={{
            height: "85vh"
          }}>
            <Link to={'/'} className='position-absolute mt-1'>
              <i className="fa-solid fa-arrow-left fs-3 mb-0" style={{
                color: Colors.green
              }}></i>
            </Link>
            <h3 className='text-center mb-0 fs-3 fw-bold mb-5' style={{
              color: Colors.green
            }}>MASUK</h3>

            <div className=''>
              <form className='w-100 d-flex justify-content-center align-items-center flex-column' onSubmit={(e) => validate(e)}>
                <div className='py-3 w-100 my-3 rounded-4 container d-flex justify-content-between align-items-center' style={{
                  border: `1px solid ${Colors.green}`
                }}>
                  <i className="fa-solid fa-envelope text-black-50 fs-2 mb-0 mt-1"></i>
                  <input type="email" placeholder='Email' className='w-100 border-0 px-3 fs-5 text-black-50' style={{
                    outline: "none"
                  }} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='py-3 w-100 my-3 rounded-4 container d-flex justify-content-between align-items-center' style={{
                  border: `1px solid ${Colors.green}`
                }}>
                  <i className="fa-solid fa-lock text-black-50 fs-2 mb-0"></i>
                  <input type="password" placeholder='Password' className='w-100 border-0 px-3 fs-5 text-black-50' style={{
                    outline: "none"
                  }} ref={passVisibleRef} onChange={(e) => setPassword(e.target.value)} />
                  <i className="fa-solid fa-eye text-black-50 fs-3" onClick={() => {
                    passwordVisible1()
                  }} ref={eyeRefPass}></i>
                </div>
                <button type='submit' className='btn text-white w-50 fs-4 fw-bold rounded-4 my-3' style={{
                  backgroundColor: Colors.green
                }}>LOGIN</button>

                <div className='w-100 d-flex justify-content-between align-items-center my-2'>
                  <hr className='w-50 bg-light-subtle me-4' />
                  <p className='mb-0'>Atau</p>
                  <hr className='w-50 bg-light-subtle ms-4' />
                </div>
                <p className='mb-0'>Belum punya akun? <Link to={'/register'}>Daftar Sekarang</Link></p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;