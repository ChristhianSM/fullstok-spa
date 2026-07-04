import { useToggle } from "./useToggle";

export default function Details() {
  const [isOpen, toggle] = useToggle(true);

  return (
    <div>
      <button onClick={toggle}>
        {isOpen ? "Ocultar detalles" : "Mostrar detalles"}
      </button>
      {isOpen && <p>Full Stock es una tienda para desarrolladores.</p>}
    </div>
  );
}
