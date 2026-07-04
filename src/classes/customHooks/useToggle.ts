import { useState } from "react";

export function useToggle(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return [isOpen, toggle] as const;
}
