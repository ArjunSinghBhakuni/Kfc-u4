import { Button } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthConext'

const Account = () => {
  const [isAuth, dispatch] = useContext(AuthContext);
const navigate = useNavigate()
  const handleClick =()=>{
    dispatch({
      type:"HANDLELOGOUT"
    })
    navigate("/")
    console.log(isAuth)
  }
  return (
    <div>
      Welcome you are logged in 

      <button onClick={ handleClick} className="btn btn-dark btn-lg btn-block">
           lOGOUT
        </button>
    </div>
  )
}

export default Account