import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  color: white;
  padding-bottom: 1rem;
`

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
  overflow: hidden;
`

const BackgroundImage = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-image: url(https://images.pexels.com/photos/3768140/pexels-photo-3768140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(1px) brightness(0.7);
  transform: scale(1.01);
`

const Title = styled.div`
  position: relative;
  z-index: 1;
  font-size: 2rem;
  font-weight: 600;
  color: white;
`

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  width: 50vw;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: orangered;
  border-radius: 0 5rem 5rem 0;
  font-weight: 500;
`

const Helpers = styled.div`
  display: flex;
  flex-direction: column;
`

const Helper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: calc(100vw - 2rem);
  margin: 0 1rem;
  height: 5rem;
  margin-bottom: 2rem;
`

const HelperImage = styled.div<{ src: string }>`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-image: url(${ props => props.src });
  background-size: cover;
  background-position: center;
`

const Blob = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: calc(70% - 1rem);
  padding: 1rem;
  margin: 1rem;
  margin-right: 0rem;
  border: 1px solid white;
  border-radius: 1rem;
`

const Stars = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 0.75rem;
`

const Name = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
`

const Details = styled.div`
  font-size: 0.75rem;
`

const HouseHelp = () => {
  return (
    <Wrapper>
      <Header>
        <BackgroundImage />
        <Title>House Help</Title>
      </Header>
      <div style={{ width: '100vw', height: '5rem' }}>
        <Tag>Popular Helpers</Tag>
      </div>
      <Helpers>
        <Helper>
          <HelperImage src={'https://thispersondoesnotexist.com/image'} />
          <Blob>
            <Stars>{ Array.from(Array(Math.floor(Math.random() * 5) + 1).keys()).map(e => '⭐') }</Stars>
            <Name>Anna G</Name>
            <Details>Anna has been in the industry for 12 years helping the elderly or anyone that needs her..</Details>
          </Blob>
        </Helper>
        <Helper>
          <HelperImage src={'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1600'} />
          <Blob>
            <Stars>{ Array.from(Array(Math.floor(Math.random() * 5) + 1).keys()).map(e => '⭐') }</Stars>
            <Name>Christa</Name>
            <Details>Christa is helping, caring, and loving since she joined the industry for the needy in 2009..</Details>
          </Blob>
        </Helper>
        <Helper>
          <HelperImage src={'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
          <Blob>
            <Stars>{ Array.from(Array(Math.floor(Math.random() * 5) + 1).keys()).map(e => '⭐') }</Stars>
            <Name>Lili G Anthony yp.</Name>
            <Details>Lili is an enthusiastic youth who loves devoting her time and effotts towards giving back to..</Details>
          </Blob>
        </Helper>
        <Helper>
          <HelperImage src={'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600'} />
          <Blob>
            <Stars>{ Array.from(Array(Math.floor(Math.random() * 5) + 1).keys()).map(e => '⭐') }</Stars>
            <Name>Adam</Name>
            <Details>Adam is a 34 year old with a medical background, he knows how to take care and support..</Details>
          </Blob>
        </Helper>
        <Helper>
          <HelperImage src={'https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&w=1600'} />
          <Blob>
            <Stars>{ Array.from(Array(Math.floor(Math.random() * 5) + 1).keys()).map(e => '⭐') }</Stars>
            <Name>Agile Jr.</Name>
            <Details>Agile is an enthusastic industry professional whose life's mission is to take care of the..</Details>
          </Blob>
        </Helper>
      </Helpers>
    </Wrapper>
  )
}

export default HouseHelp