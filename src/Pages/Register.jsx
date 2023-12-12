import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Colors from '../Components/Colors';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';

const Register = () => {
  const isMobile = useMediaQuery({ maxWidth: 426 })
  const isTablet = useMediaQuery({ maxWidth: 769 })
  const passVisibleRef = useRef(null)
  const rePassVisibleRef = useRef(null)
  const eyeRefPass = useRef(null)
  const eyeRefRePass = useRef(null)
  const navigate = useNavigate()

  // userData
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setrePassword] = useState("")

  const reg = async (e) => {
    e.preventDefault()
    const data = {
      username: email.slice(0, 6),
      email: email,
      password: password,
    }
    console.log(data)
    if (password == rePassword) {
      try {
        const resp = await axios.post('http://localhost:1337/api/auth/local/register', data)
        if (resp.status === 200) {
          alert('user has been registered!')
          navigate('/')
          console.log(email, password)
        } else {
          alert('user hasnt registered!')
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      alert('sorry password must be match!')
    }
  }

  console.log(rePassword, password, email)


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

  let click2 = 0
  const passwordVisible2 = () => {
    click2 += 1
    eyeRefRePass.current.className = "fa-solid fa-eye-slash text-black-50 fs-3"
    rePassVisibleRef.current.type = "free"
    if (click2 === 2) {
      eyeRefRePass.current.className = "fa-solid fa-eye text-black-50 fs-3"
      rePassVisibleRef.current.type = "password"
      click2 = 0
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
            height: "95vh"
          }}>
            <Link to={'/'} className='position-absolute mt-1'>
              <i className="fa-solid fa-arrow-left fs-3 mb-0" style={{
                color: Colors.green
              }}></i>
            </Link>
            <h3 className='text-center mb-0 fs-3 fw-bold mb-5' style={{
              color: Colors.green
            }}>DAFTAR</h3>

            <div className=''>
              <form className='w-100 d-flex justify-content-center align-items-center flex-column' onSubmit={(e) => reg(e)}>
                <div className='py-3 w-100 my-3 rounded-4 container d-flex justify-content-between align-items-center' style={{
                  border: `1px solid ${Colors.green}`
                }}>
                  <i className="fa-solid fa-envelope text-black-50 fs-2 mb-0 mt-1"></i>
                  <input type="email" placeholder='Email' className='w-100 border-0 px-3 fs-5 text-black-50' style={{
                    outline: "none"
                  }} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className='py-3 w-100 my-3 rounded-4 container d-flex justify-content-between align-items-center' style={{
                  border: `1px solid ${Colors.green}`
                }}>
                  <i className="fa-solid fa-lock text-black-50 fs-2 mb-0"></i>
                  <input type="password" placeholder='Password' className='w-100 border-0 px-3 fs-5 text-black-50' style={{
                    outline: "none"
                  }} ref={passVisibleRef} onChange={(e) => { setPassword(e.target.value) }} />
                  <i className="fa-solid fa-eye text-black-50 fs-3" onClick={() => {
                    passwordVisible1()
                  }} ref={eyeRefPass}></i>
                </div>
                <div className='py-3 w-100 my-3 rounded-4 container d-flex justify-content-between align-items-center' style={{
                  border: `1px solid ${Colors.green}`
                }}>
                  <i className="fa-solid fa-lock text-black-50 fs-2 mb-0"></i>
                  <input type="password" placeholder='Repeat Password' className='w-100 border-0 px-3 fs-5 text-black-50' style={{
                    outline: "none"
                  }} ref={rePassVisibleRef} onChange={(e) => { setrePassword(e.target.value) }} />
                  <i className="fa-solid fa-eye text-black-50 fs-3" onClick={() => {
                    passwordVisible2()
                  }} ref={eyeRefRePass}></i>
                </div>
                <div className='w-100 container my-3 justify-content-start d-flex align-items-center'>
                  <input type="checkbox" style={{
                    transform: "scale(1.5)"
                  }} />
                  <h3 className='fs-5 ms-3 text-black-50 mb-0'>Remember Me</h3>
                </div>

                <button className=' bg-transparent py-3 w-100 my-3 rounded-4 container d-flex justify-content-center align-items-center' style={{
                  border: `1px solid ${Colors.green}`
                }}>
                  <i className="fa-brands fa-google text-black-50 fs-2 mb-0 mt-1"></i>
                  <h3 className='fs-5 mb-0 text-black-50 ms-3'>Sign up with google</h3>
                </button>

                <button type='submit' className='btn text-white w-50 fs-4 fw-bold rounded-4 my-3' style={{
                  backgroundColor: Colors.green
                }}>Sign Up</button>
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
            }}>DAFTAR</h3>

            <div className=''>
              <form className='w-100 d-flex justify-content-center align-items-center flex-column' onSubmit={(e) => { reg(e) }}>
                <div className='py-3 w-100 my-3 rounded-4 container d-flex justify-content-between align-items-center' style={{
                  border: `1px solid ${Colors.green}`
                }}>
                  <i className="fa-solid fa-envelope text-black-50 fs-2 mb-0 mt-1"></i>
                  <input type="email" placeholder='Email' className='w-100 border-0 px-3 fs-5 text-black-50' style={{
                    outline: "none"
                  }} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className='py-3 w-100 my-3 rounded-4 container d-flex justify-content-between align-items-center' style={{
                  border: `1px solid ${Colors.green}`
                }}>
                  <i className="fa-solid fa-lock text-black-50 fs-2 mb-0"></i>
                  <input type="password" placeholder='Password' className='w-100 border-0 px-3 fs-5 text-black-50' style={{
                    outline: "none"
                  }} ref={passVisibleRef} onChange={(e) => { setPassword(e.target.value) }} />
                  <i className="fa-solid fa-eye text-black-50 fs-3" onClick={() => {
                    passwordVisible1()
                  }} ref={eyeRefPass}></i>
                </div>
                <div className='py-3 w-100 my-3 rounded-4 container d-flex justify-content-between align-items-center' style={{
                  border: `1px solid ${Colors.green}`
                }}>
                  <i className="fa-solid fa-lock text-black-50 fs-2 mb-0"></i>
                  <input type="password" placeholder='Repeat Password' className='w-100 border-0 px-3 fs-5 text-black-50' style={{
                    outline: "none"
                  }} ref={rePassVisibleRef} onChange={(e)=>setrePassword(e.target.value)}/>
                  <i className="fa-solid fa-eye text-black-50 fs-3" onClick={() => {
                    passwordVisible2()
                  }} ref={eyeRefRePass}></i>
                </div>
                <div className='w-100 container my-3 justify-content-start d-flex align-items-center'>
                  <input type="checkbox" style={{
                    transform: "scale(1.5)"
                  }} />
                  <h3 className='fs-5 ms-3 text-black-50 mb-0'>Remember Me</h3>
                </div>

                <button className=' bg-transparent py-3 w-100 my-3 rounded-4 container d-flex justify-content-center align-items-center' style={{
                  border: `1px solid ${Colors.green}`
                }}>
                  <i className="fa-brands fa-google text-black-50 fs-2 mb-0 mt-1"></i>
                  <h3 className='fs-5 mb-0 text-black-50 ms-3'>Sign up with google</h3>
                </button>

                <button type='submit' className='btn text-white w-50 fs-4 fw-bold rounded-4 my-3' style={{
                  backgroundColor: Colors.green
                }} >Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;