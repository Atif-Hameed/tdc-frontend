import Link from "next/link";
import React from "react";

interface linkProps {
  href?: string;
  className?: string;
  children: any;
  areaLebel?: string;
  title?: string;
  target?: string;
  onClick?: any;
}
const CustomLink: React.FC<linkProps> = ({
  href = "#",
  className,
  children,
  areaLebel,
  title,
  target,
  onClick
}) => {
  return (
    <Link
      href={href}
      aria-label={areaLebel}
      title={title}
      className={`${className}`}
      target={target}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
