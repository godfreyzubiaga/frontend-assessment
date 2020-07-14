import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { desktopBannerBG, mobileBannerBG } from '../assets/images/backgrounds';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Banner = styled.div`
  width: 100%;
  height: 650px;
  background: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;

  @media screen and (max-width: 600px) {
    background: url(${(props) => props.backgroundImgMobile});
    background-position: center center;
    font-size: 0.7em;
  }
`;

const Title = styled.span`
  font-size: 3em;
  font-weight: bold;
`;

const Subtitle = styled.span`
  font-size: 2em;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  place-items: center;
  padding: 30px 0;
  flex-wrap: wrap;
`;

const sampleData = [
  {
    id: 1,
    imageUrl: 'http://via.placeholder.com/400x300',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam repellat hic atque distinctio odio, quae minima quibusdam ullam temporibus placeat',
  },
  {
    id: 2,
    imageUrl: 'http://via.placeholder.com/400x300',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, cupiditate voluptatum earum deserunt soluta doloribus',
  },
  {
    id: 3,
    imageUrl: 'http://via.placeholder.com/400x300',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet laborum rerum voluptatem nulla? Ex nam voluptate suscipit quos molestiae corporis quis, nostrum ut reiciendis dolores unde maiores qui tempore',
  },
];

const App = () => (
  <StyledDiv>
    <Banner
      backgroundImg={desktopBannerBG}
      backgroundImgMobile={mobileBannerBG}
    >
      <Title>Hello Developer</Title>
      <Subtitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Subtitle>
    </Banner>
    <CardContainer>
      {sampleData &&
        sampleData.map((data) => (
          <Card
            {...data}
            buttonAction={() => alert('read more')}
            key={data.id}
          />
        ))}
    </CardContainer>
  </StyledDiv>
);

export default App;
