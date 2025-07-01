import Image from 'next/image';
import React from 'react';

interface CustomImageProps {
    alt?: string;
    src: string;
    className?: string;
    width?: number | string;
    height?: number | string;
    divStyle?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({
    alt = '',
    src,
    className,
    width = 1000,
    height = 1000,
    divStyle,
}) => {
    return (
        <div className={divStyle}>
            <Image
                alt={alt}
                src={src}
                className={className}
                width={Number(width)}
                height={Number(height)}
            />
        </div>
    );
};

export default CustomImage;
