import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { media } from '../../utilities/media';

const TopImage = styled.div`
  height: 28rem;
  background-color: #674c4d;
  position: relative;
  z-index: -100;
`;

const RedBar = styled.div`
  background: #902e2d;
  height: 7rem;
  display: flex;
  justify-content: center;

  ${media.tablet`
    height: 9vw;`}

  ${media.phone`
    height: 15vw;`};
`;

const HeadlineText = styled.h1`
  font-size: 8.4rem;
  color: white;
  font-family: 'Dancing Script', cursive;
  position: absolute;
  margin-top: -3.3rem;
  font-weight: 500;

  ${media.tablet`
    font-size: 8vw;
    margin-top: -2vw;`}

  ${media.phone`
    font-size: 9vw;
    margin: 0;
    position: static;
    padding-top: .7rem;`};
`;

const ShortHero = ({ image, headline }: { image: StaticImageData | string; headline: string }) => (
  <div>
    <TopImage>
      {typeof image === 'string' ? (
        <Image src={image} layout="fill" objectFit="cover" />
      ) : (
        <Image src={image} layout="fill" objectFit="cover" placeholder="blur" />
      )}
    </TopImage>
    <RedBar>
      <HeadlineText>{headline}</HeadlineText>
    </RedBar>
  </div>
);

export default ShortHero;
