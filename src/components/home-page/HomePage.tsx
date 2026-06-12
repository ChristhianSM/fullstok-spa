// import styles from "./styles.module.css";

export const HomePage = () => {
  return (
    <>
      <section className="hero">
        <div className="container hero__container">
          <h2 className="hero__title">Nuevos productos disponibles</h2>
          <p className="hero__text">
            Un pequeño lote de increíbles productos acaba de llegar.
            <br />
            Agrega tus favoritos al carrito antes que se agoten.
          </p>
          <a href="/categories/polos" className="button button--xl">
            Compra ahora
          </a>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <div className="categories__header">
            <h2 className="categories__title">Compra por categoría</h2>
            <p className="categories__description">
              Explora nuestra selección de productos especialmente diseñados
              para desarrolladores web.
              <br className="categories__description-break" />
              Encuentra lo que buscas navegando por nuestras categorías de
              polos, tazas, stickers y más.
            </p>
          </div>
          <div className="categories__grid">
            <a href="categories/polos" className="category">
              <div className="category__image">
                <img src="/images/polos.jpg" alt="Polos" />
              </div>
              <div>
                <h3 className="category__title">Polos</h3>
                <p className="category__description">
                  Polos exclusivos con diseños que todo desarrollador querrá
                  lucir. Ideales para llevar el código a donde vayas.
                </p>
              </div>
            </a>
            <a href="categories/tazas" className="category">
              <div className="category__image">
                <img src="/images/tazas.jpg" alt="Tazas" />
              </div>
              <div>
                <h3 className="category__title">Tazas</h3>
                <p className="category__description">
                  Tazas que combinan perfectamente con tu café matutino y tu
                  pasión por la programación. ¡Empieza el día con estilo!
                </p>
              </div>
            </a>
            <a href="categories/stickers" className="category">
              <div className="category__image">
                <img src="/images/stickers.jpg" alt="Stickers" />
              </div>
              <div>
                <h3 className="category__title">Stickers</h3>
                <p className="category__description">
                  Personaliza tu espacio de trabajo con nuestros stickers únicos
                  y muestra tu amor por el desarrollo web.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="features__title">Nuestra Promesa de Calidad</h2>
          <div className="features__grid">
            <div className="feature">
              <img
                src="/images/icons/truck.svg"
                alt=""
                className="feature__icon"
              />
              <h3 className="feature__title">Entrega rápida</h3>
              <p className="feature__description">
                Recibe tus productos en tiempo récord, directo a tu puerta, para
                que puedas disfrutar de ellos cuanto antes.
              </p>
            </div>

            <div className="feature">
              <img
                src="/images/icons/return.svg"
                alt=""
                className="feature__icon"
              />
              <h3 className="feature__title">Satisfacción Garantizada</h3>
              <p className="feature__description">
                Tu felicidad es nuestra prioridad. Si no estás 100% satisfecho,
                estamos aquí para ayudarte con cambios o devoluciones.
              </p>
            </div>

            <div className="feature">
              <img
                src="/images/icons/ribbon.svg"
                alt=""
                className="feature__icon"
              />
              <h3 className="feature__title">Materiales de Alta Calidad</h3>
              <p className="feature__description">
                Nos aseguramos de que todos nuestros productos estén hechos con
                materiales de la más alta calidad.
              </p>
            </div>

            <div className="feature">
              <img
                src="/images/icons/idea.svg"
                alt=""
                className="feature__icon"
              />
              <h3 className="feature__title">Diseños Exclusivos</h3>
              <p className="feature__description">
                Cada producto está diseñado pensando en los desarrolladores, con
                estilos únicos que no encontrarás en ningún otro lugar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
