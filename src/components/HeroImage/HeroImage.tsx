import React from 'react';
import styled from 'styled-components';

interface HeroImageProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
}

const Container = styled.div<{ imageUrl: string }>`
  position: relative;
  width: 100%;
  height: 400px; 
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url(${props.imageUrl})`};
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 4rem; 
  margin-bottom: 10px;
  font-weight: bold; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
  color: black;
`;

const Subtitle = styled.p`
  font-size: 2.5rem; 
  font-weight: bold; 
  margin-bottom: 20px;
  color: black;
`;

const Description = styled.p`
  font-size: 1.8rem; 
  font-weight: bold; 
  color: black;
`;

const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, title, subtitle, description }) => {
  return (
    <Container imageUrl={imageUrl}>
      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
      </Content>
    </Container>
  );
};

export default HeroImage;
