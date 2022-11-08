import { signOut } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { auth } from '../firebase'
import ROUTES from '../routes'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: black;
  color: white;
  padding-bottom: 1rem;
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`

const BlobContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100% - 2rem);
`

const Blob = styled.div<{ isInContainer?: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${ props => props.isInContainer ? '100%' : 'calc(100% - 2rem)' };
  height: 10rem;
  margin: ${ props => props.isInContainer ? '1rem 1rem 0 0' : '1rem' };
  margin-bottom: 0;
  background-color: white;
  color: white;
  font-weight: 800;
  font-size: 1.5rem;
  border-radius: 1rem;
  overflow: hidden;
`

const BlobText = styled.div`
  position: relative;
  z-index: 1;
`

const BlobImage = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.5) blur(1px);
  transform: scale(1.05);
`

const Feed = () => {
  const navigate = useNavigate()
  const logout = async () => {
    try {
      await signOut(auth)
      localStorage.setItem('isLoggedIn', 'false')
      navigate('/')
    } catch(e) {
      console.error(e)
    }
  }
  return (
    <Wrapper>
      <Title style={{ marginTop: '2rem' }}>What are you looking for?</Title>
      <Blob style={{ color: 'red' }} onClick={ () => navigate(ROUTES.FEED.EMERGENCY) }>Emergency</Blob>
      <BlobContainer>
        <Blob isInContainer onClick={ () => navigate(ROUTES.FEED.HOUSE_HELP) }>
          <BlobText>House Help</BlobText>
          <BlobImage style={{ backgroundImage: 'url(https://images.pexels.com/photos/3768140/pexels-photo-3768140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }} />
        </Blob>
        <Blob isInContainer style={{ marginRight: 0 }}>
          <BlobText style={{ fontSize: '1rem' }}>House-Hold Items</BlobText>
          <BlobImage style={{ backgroundImage: 'url(https://images.pexels.com/photos/5217897/pexels-photo-5217897.jpeg?auto=compress&cs=tinysrgb&w=1600)' }} />
        </Blob>
      </BlobContainer>
      <Blob>
        <BlobText>Clothes</BlobText>
        <BlobImage style={{ backgroundImage: 'url(https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1600)' }} />
      </Blob>
      <BlobContainer>
        <Blob isInContainer onClick={ () => navigate(ROUTES.FEED.HEALTHCARE) }>
          <BlobText>Healthcare</BlobText>
          <BlobImage style={{ backgroundImage: 'url(https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1600)' }} />
        </Blob>
        <Blob isInContainer style={{ marginRight: 0 }}>
          <BlobText>Hobbies</BlobText>
          <BlobImage style={{ backgroundImage: 'url(https://images.pexels.com/photos/19680/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600)' }} />
        </Blob>
      </BlobContainer>
      <Blob>
        <BlobText>Find Friends</BlobText>
        <BlobImage style={{ backgroundImage: 'url(https://images.pexels.com/photos/935835/pexels-photo-935835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }} />
      </Blob>
      <BlobContainer>
        <Blob isInContainer>
          <BlobText>Mood</BlobText>
          <BlobImage style={{ backgroundImage: 'url(https://images.pexels.com/photos/208147/pexels-photo-208147.jpeg?auto=compress&cs=tinysrgb&w=1600)' }} />
        </Blob>
        <Blob isInContainer style={{ marginRight: 0 }}>
          <BlobText>Events</BlobText>
          <BlobImage style={{ backgroundImage: 'url(https://images.pexels.com/photos/6518966/pexels-photo-6518966.jpeg?auto=compress&cs=tinysrgb&w=1600)' }} />
        </Blob>
      </BlobContainer>
      <Blob>
        <BlobText>Food</BlobText>
        <BlobImage style={{ backgroundImage: 'url(https://images.pexels.com/photos/7837720/pexels-photo-7837720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }} />
      </Blob>
      <Blob onClick={ logout }>
        <BlobText>Log Out</BlobText>
        <BlobImage style={{ backgroundImage: 'url(https://images.pexels.com/photos/756903/pexels-photo-756903.jpeg?auto=compress&cs=tinysrgb&w=1600)' }} />
      </Blob>
    </Wrapper>
  )
}

export default Feed