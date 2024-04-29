import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { ChangeEvent, KeyboardEventHandler, MouseEventHandler } from "react";

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
  onReset: MouseEventHandler<HTMLButtonElement>;
}

export function SearchBar({
  value,
  onChange,
  onKeyDown,
  onReset,
}: SearchBarProps) {
  return (
    <div className="flex justify-around lg:justify-normal">
      <div className="relative flex max-w-max">
        <label htmlFor="searchbar" className="sr-only">
          Buscar produtos
        </label>
        <input
          type="text"
          id="searchbar"
          value={value}
          onChange={onChange}
          className="p-2 border-2 rounded-md bg-yellow-light border-yellow-dark  w-[300px] font-baloo text-sm outline-none focus:border-yellow"
          placeholder="Buscar produtos"
          onKeyDown={onKeyDown}
        />
        <MagnifyingGlass
          size={20}
          color="#dbac2c"
          weight="bold"
          className={
            value.length == 0
              ? "absolute top-1/2 -translate-y-1/2 right-2"
              : "hidden"
          }
        />
        <button onClick={onReset}>
          <X
            size={18}
            color="#dbac2c"
            weight="bold"
            className={
              value.length > 0
                ? "absolute top-1/2 -translate-y-1/2 right-2"
                : "hidden"
            }
          />
        </button>
      </div>
    </div>
  );
}
