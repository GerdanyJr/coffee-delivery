import { MagnifyingGlass, X } from "@phosphor-icons/react";
import {
  ForwardedRef,
  KeyboardEventHandler,
  LegacyRef,
  MouseEventHandler,
  forwardRef,
} from "react";

interface SearchBarProps {
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
  onReset: MouseEventHandler<HTMLButtonElement>;
}

export const SearchBar = forwardRef(
  ({ onKeyDown, onReset }: SearchBarProps, ref: any) => {
    return (
      <div className="flex justify-around lg:justify-normal">
        <div className="relative flex max-w-max">
          <label htmlFor="searchbar" className="sr-only">
            Buscar produtos
          </label>
          <input
            type="text"
            id="searchbar"
            className="p-2 border-2 rounded-md bg-yellow-light border-yellow-dark  w-[300px] font-baloo text-sm outline-none focus:border-yellow"
            placeholder="Buscar produtos"
            ref={ref}
            onKeyDown={onKeyDown}
          />
          <MagnifyingGlass size={20} color="#dbac2c" weight="bold" />
          <button onClick={onReset}>
            <X size={18} color="#dbac2c" weight="bold" />
          </button>
        </div>
      </div>
    );
  }
);
// className={`${
//   empty ? "absolute top-1/2 -translate-y-1/2 right-2" : "hidden"
// }  `}
// className={`${
//   ? "hidden" : "absolute top-1/2 -translate-y-1/2 right-2" `}
// }
