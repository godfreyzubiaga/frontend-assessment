import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  margin: 20px 0;
  padding: 20px;
  width: 410px;
  height: 500px;
  border: 2px solid #333;
  border-radius: 20px;

  @media screen and (max-width: 600px) {
    width: 350px;
    height: 400px;
  }

  @media screen and (max-width: 450px) {
    width: 300px;
    height: 400px;
  }
`;

const ImageCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
  height: 300px;
  width: 400px;
  border-radius: 10px;

  @media screen and (max-width: 600px) {
    height: 250px;
    width: 350px;
  }

  @media screen and (max-width: 450px) {
    height: 200px;
    width: 300px;
  }
`;

const BackgroundImage = styled.img`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;

  @media screen and (max-width: 600px) {
    background-size: cover;
    background-position: center;
  }
`;

const DescriptionArea = styled.div`
  text-align: center;
`;

const Card = ({ imageUrl, description, buttonAction }) => (
  <Container>
    <ImageCard>
      <BackgroundImage src={imageUrl} />
    </ImageCard>
    <DescriptionArea>{description}</DescriptionArea>
    <Button name='Read More' buttonAction={buttonAction} />
  </Container>
);

export default Card;
