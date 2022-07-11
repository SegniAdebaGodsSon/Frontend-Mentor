import React from 'react';

interface Props {
    src: string;
    alt: string;
}

const Logo: React.FC<Props> = ({ src, alt }) => {
    return (
        <img
            className='h-12 w-12 md:h-[88px] md:w-[88px]'
            src={src}
            alt={alt}
            loading='lazy'
        />
    );
};
export default Logo;
