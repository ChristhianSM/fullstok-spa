import ButtonPolimorfismo from "./ButtonPolimorfismo";
import { Card } from "./Card";

export const Polimorfismo = () => {
  return (
    <div>
      <ButtonPolimorfismo>Boton con etiqueta Button</ButtonPolimorfismo>
      <ButtonPolimorfismo href="/hola">Boton con etiqueta a</ButtonPolimorfismo>
      <Card>
        <h1>Hola mundo</h1>
      </Card>
      <Card as="article">
        <h1>Hola mundo2</h1>
      </Card>
      <Card as="main">
        <h1>Hola mundo2</h1>
      </Card>
    </div>
  );
};
