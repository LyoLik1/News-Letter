import { FC, forwardRef, RefObject } from "react";
import clsx from "clsx";

import "./backdrop.scss";

export const Backdrop: FC<{
  className?: string;
  open?: boolean;
}> = forwardRef(({ open = false, className = "" }, ref) => {
  return (
    <div
      className={clsx({ "base-Backdrop-open": open }, className, "backdrop")}
      ref={ref as RefObject<HTMLDivElement>}
    />
  );
});
