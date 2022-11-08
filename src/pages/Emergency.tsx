import React from 'react'
import styled from 'styled-components'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../routes'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: black;
  color: white;
`

const Blob = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: calc(90% - 2rem);
  padding: 1rem;
  margin: 1rem;
  border: 1px solid white;
  border-radius: 1rem;
`

const BlobImage = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
`

const BlobButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin-left: 1rem;
  padding: 1rem;
  background: orangered;
  border-radius: 1rem;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  user-select: none;
  transition: all 0.25s ease;

  &:hover {
    filter: brightness(1.5);
  }

  &:active {
    filter: brightness(2);
  }
`

const Emergency = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <IoIosArrowBack color='white' style={{ position: 'absolute', top: '1.5rem', left: '1rem' }} onClick={ () => navigate(ROUTES.FEED.INDEX) } />
      <div style={{ marginTop: '3rem' }}></div>
      <Blob>
        <BlobImage src={ 'https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg' } />
        <BlobButton>Send Location</BlobButton>
      </Blob>
      <Blob>
        <BlobImage src={ 'https://www.alertmedia.com/wp-content/uploads/2022/08/AlertMedia-Icon-LG-687x687-1.png' } />
        <BlobButton>Alert Message</BlobButton>
      </Blob>
      <Blob>
        <BlobImage src={ 'https://static.vecteezy.com/system/resources/previews/005/217/113/original/new-emergency-icon-design-free-vector.jpg' } />
        <BlobButton>Emergency</BlobButton>
      </Blob>
      <Blob>
        <BlobImage src={ 'https://cdn-icons-png.flaticon.com/512/2561/2561978.png' } />
        <BlobButton>Call Police</BlobButton>
      </Blob>
      <Blob>
        <BlobImage src={ 'https://cdn-icons-png.flaticon.com/512/172/172835.png' } />
        <BlobButton style={{ fontSize: '1rem' }}>Medical Emergency</BlobButton>
      </Blob>
    </Wrapper>
  )
}

export default Emergency