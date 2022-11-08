import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffectOnce } from 'react-use'
import styled from 'styled-components'
import { auth } from '../firebase'
import useInput from '../hooks/useInput'

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

const Input = styled.input`
  margin-top: 1rem;
  width: calc(90% - 2rem);
  height: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: white;
  outline: none;
  border: none;
`

const Login = () => {
  const navigate = useNavigate()
  const { value: email, bind: bindEmail } = useInput('')
  const { value: password, bind: bindPassword } = useInput('')

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      localStorage.setItem('isLoggedIn', 'true')
      const isFirstLogin = localStorage.getItem('isFirstLogin')
      if (isFirstLogin === null || isFirstLogin === 'false') {
        localStorage.setItem('isFirstLogin', 'true')
        navigate('/landing')
      } else {
        navigate('/feed')
      }
    } catch(e) {
      console.error(e)
    }
  }

  useEffectOnce(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      navigate('/feed')
    }
  })

  return (
    <Wrapper>
      <Title style={{ marginBottom: '2rem' }}>Log in</Title>
      <Input type='text' placeholder='Your email' { ...bindEmail } />
      <Input type='password' placeholder='Password' style={{ marginBottom: '0.5rem' }} { ...bindPassword } />
      <Subtitle style={{ width: '90%', textAlign: 'right' }}>Forgot password?</Subtitle>
      <Button isPrimary onClick={ login }>Log In</Button>
      <Subtitle style={{ marginTop: '5rem', color: '#7c7c7c' }}>Don't have an account?</Subtitle>
      <Button onClick={ () => navigate('/register') }>Create Account</Button>
    </Wrapper>
  )
}

export default Login