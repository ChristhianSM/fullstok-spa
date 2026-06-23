import { useRef } from "react";

export const Focus = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleButton() {
    inputRef.current?.focus();
  }
  return (
    <div>
      <button onClick={handleButton}>FocusInput</button>
      <input type="text" ref={inputRef} />
    </div>
  );
};
