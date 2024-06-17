import { FC } from "react";

interface XProps {
  color?: "white" | "black";
  width?: string;
  height?: string;
}

export const XImg: FC<XProps> = ({
  color = "black",
  width = "24px",
  height = "24px",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0.0180316 24H2.10969L10.296 14.6892L16.8054 24H24L14.299 10.1925L23.2066 0H21.0789L13.3434 8.81705L7.1405 0H0L9.37641 13.3666L0.0180316 24ZM2.88505 1.56943H6.1127L21.0969 22.5187H17.8332L2.88505 1.56943Z'
        fill={color}
      />
    </svg>
  );
};
