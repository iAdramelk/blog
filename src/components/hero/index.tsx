import Image from 'gatsby-image';
import React from 'react';

import { imageMaxWidthHero } from '../../constants';

import styles from './styles.module.css';

interface IFluidObject {
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
  base64?: string;
  tracedSVG?: string;
  srcWebp?: string;
  srcSetWebp?: string;
  presentationWidth?: number;
}

interface IGatsbyImageProps {
  fluid?: IFluidObject;
  style?: object;
}

interface IHeroProps {
  picture?: {
    childImageSharp: {
      fluid?: IFluidObject;
    };
  };
  pictureComment?: string;
}

function NonStretchedImage(props: IGatsbyImageProps) {
  let normalizedProps = props;
  if (props.fluid && props.fluid.presentationWidth) {
    const presetantionWidth = props.fluid?.presentationWidth;
    const width =
      presetantionWidth < imageMaxWidthHero
        ? presetantionWidth / 2
        : presetantionWidth;
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: width,
        margin: '0 auto'
      }
    };
  }
  return <Image {...normalizedProps} />;
}

function Hero({ pictureComment, picture }: IHeroProps) {
  return (
    <div className={styles.pictureWrapper}>
      <div className={styles.picture}>
        <NonStretchedImage fluid={picture?.childImageSharp.fluid} />
      </div>
      {pictureComment && (
        <div className={styles.pictureComment}>{pictureComment}</div>
      )}
    </div>
  );
}

export default Hero;
