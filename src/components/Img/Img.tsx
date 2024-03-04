import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled component for the image
const StyledImg = styled.img<{ disabled?: boolean }>`
  max-width: 100%;
  height: auto;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

interface ImgProps {
    src: string;
    alt: string;
    className?: string;
}
  
const Img: React.FC<ImgProps> = ({ src, alt, className, ...rest }) => {
  return <StyledImg src={src} alt={alt} className={className} {...rest} />;
};

Img.propTypes = {
  /** Image source URL */
  src: PropTypes.string.isRequired,
  /** Alternate text for the image */
  alt: PropTypes.string.isRequired,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default Img;
export type { ImgProps };
