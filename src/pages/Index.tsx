import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTimeout } from 'react-use'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-image: url(https://images.pexels.com/photos/2050976/pexels-photo-2050976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  background-position: center;
  filter: blur(2px) brightness(0.75);
  transform: scale(1.1);
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: white;
`

const Button = styled.div<{ isPrimary?: boolean; }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  width: 90%;
  height: 1rem;
  padding: 1rem 0;
  border-radius: 1rem;
  background-color: ${ props => props.isPrimary ? '#d5510b' : 'white' };
  color: ${ props => props.isPrimary ? 'white' : 'black' };
  font-weight: 600;
  transition: all 0.25s ease;

  &:hover {
    filter: brightness(1.5);
  }
`

const Index = () => {
  const navigate = useNavigate()
  const [isReady] = useTimeout(5000)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  });

  useEffect(() => {
    if (isReady() && isAuthenticated !== undefined) {
      const isLoggedIn = localStorage.getItem('isLoggedIn')
      if (isLoggedIn === null) {
        if (isAuthenticated) {
          localStorage.setItem('isLoggedIn', 'true')
          navigate('/feed')
        } else {
          localStorage.setItem('isLoggedIn', 'false')
          navigate('/prelogin')
        }
      }
      else if (isLoggedIn === 'true' || isAuthenticated) {
        localStorage.setItem('isLoggedIn', 'true')
        navigate('/feed')
      } else {
        navigate('/prelogin')
      }
    }
  }, [isReady(), isAuthenticated])
  

  return (
    <>
      {
        isReady() === false ?
        <>
          <Background />
          <Wrapper>
            <Title>EdCare</Title>
          </Wrapper>
        </>
        :
        <Wrapper>
          <Button isPrimary onClick={ () => navigate('/prelogin') }>Get Started</Button>
        </Wrapper>
      }
    </>
  )
}

export default Index
