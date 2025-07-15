
const Automovil = ( {automovil, addToCart} ) => {

  const {name, brand, image, price, topSpeed, year} = automovil

  return (
    <>
      <div className="col-md-8 col-lg-4 my-4 row align-items-center mx-auto">
        <div className="col-10 row align-items-center mx-auto">
          <img
            className="img-fluid"
            src={[`./public/img/${image}.jpg`]}
            alt="imagen automóvil"
          />
          <h3 className="text-black fs-4 fw-bold text-uppercase">
            {name}
          </h3>
          <p>Marca: {brand}</p>
          <p>Maxima velocidad: {topSpeed}</p>
          <p>Año: {year}</p>
          <p className="fw-black text-primary fs-3">U$S - {price.toLocaleString()}</p>
          <button 
            type="button" 
            className="btn btn-dark w-100"
            onClick={() => addToCart(automovil)}  
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  );
};

export { Automovil };
