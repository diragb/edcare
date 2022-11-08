import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffectOnce } from 'react-use'
import styled from 'styled-components'


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
`

const Subtitle = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #aeaeae;
`

const BackgroundImage = styled.div`
  width: 100%;
  height: ${ window.innerWidth }px;
  background-image: url(https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg?auto=compress&cs=tinysrgb&w=1600);
  background-size: cover;
  background-position: center;
  border-radius: 50% 0 50% 0;
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

const Prelogin = () => {
  const navigate = useNavigate()

  useEffectOnce(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      navigate('/feed')
    }
  })

  return (
    <Wrapper>
      <Title>EdCare</Title>
      <Subtitle>Connect to a better life.</Subtitle>
      <BackgroundImage style={{ margin: '2rem 0 1rem 0' }} />
      <Button isPrimary={ true } onClick={ () => navigate('/login') }>Log In</Button>
      <Button onClick={ () => navigate('/register') }>Create Account</Button>
    </Wrapper>
  )
}


export default Prelogin
