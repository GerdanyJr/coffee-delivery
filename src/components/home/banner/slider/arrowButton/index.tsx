import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";

export function ArrowButton({
  onClick,
  left,
}: {
  onClick?: (e: any) => void;
  left?: boolean;
}) {
  return (
    <button
      className={`absolute ${
        left ? "left-0" : "right-0"
      } -translate-y-1/2 top-1/2`}
      onClick={onClick}
    >
      {left && <CaretCircleLeft size={40} />}
      {!left && <CaretCircleRight size={40} />}
    </button>
  );
}
