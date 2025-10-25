import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/getstarted');
  }

  return (
    <div>
      <button onClick={handleClick}>GET STARTED</button>
    </div>
  )
}

export default Home;
