import React from 'react'

const animales = () => {
    return( 
    <>

  <title>PetShop</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="apple-touch-icon" href="assets/img/apple-icon.png" />
  <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico" />
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/templatemo.css" />
  <link rel="stylesheet" href="assets/css/custom.css" />
  {/* Load fonts style after rendering the layout styles */}
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;700;900&display=swap"
  />
  <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
  {/* Basic */}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  {/* Mobile Metas */}
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  {/* Site Metas */}
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>PetShop</title>
  {/* slider stylesheet */}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css"
  />
  {/* bootstrap core css */}
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
  {/* fonts style */}
  <link
    href="https://fonts.googleapis.com/css?family=Dosis:400,500|Poppins:400,700&display=swap"
    rel="stylesheet"
  />
  {/* Custom styles for this template */}
  <link href="css/style.css" rel="stylesheet" />
  {/* responsive style */}
  <link href="css/responsive.css" rel="stylesheet" />


  <div className="hero_area" style={{ height:"65px"}}>
    {/* header section strats */}
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index">
            <img src="images/logo.png" alt="" />
            <span>PetShop</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <a className="nav-link" href="index">
                    Inicio <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service">
                    Servicios{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pet">
                    Galeria De Mascotas{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="clinic">
                    Clinica
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact">
                    Contactanos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="shop">
                    Compre ahora
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                <button
                  className="btn  my-2 my-sm-0 nav_search-btn"
                  type="submit"
                />
              </form>
            </div>
            <div className="quote_btn-container  d-flex justify-content-center">
              <a>LLamada: +52 6291238703</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
    {/* end header section */}
  </div>
  {/* Modal */}
  <div
    className="modal fade bg-white"
    id="templatemo_search"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg" role="document">
      <div className="w-100 pt-1 mb-5 text-right">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <form
        action=""
        method="get"
        className="modal-content modal-body border-0 p-0"
      >
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control"
            id="inputModalSearch"
            name="q"
            placeholder="Search ..."
          />
          <button
            type="submit"
            className="input-group-text bg-success text-light"
          >
            <i className="fa fa-fw fa-search text-white" />
          </button>
        </div>
      </form>
    </div>
  </div>
  {/* Start Content */}
  <div className="container py-5">
    <div className="row">
      <div className="col-lg-3">
        <h1 className="h2 pb-4">Categorias</h1>
        <ul className="list-unstyled templatemo-accordion">
          <li className="pb-3">
            <a
              className="collapsed d-flex justify-content-between h3 text-decoration-none"
              href="shop"
            >
              Accesorios
              <i className="fa fa-fw fa-chevron-circle-down mt-1" />
            </a>
          </li>
          <li className="pb-3">
            <a
              className="collapsed d-flex justify-content-between h3 text-decoration-none"
              href="animales"
            >
              Animales
              <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1" />
            </a>
          </li>
          <li className="pb-3">
            <a
              className="collapsed d-flex justify-content-between h3 text-decoration-none"
              href="servicios"
            >
              Servicios
              <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1" />
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-9">
        <div className="row">
          <div className="col-md-6">
            <ul className="list-inline shop-top-menu pb-3 pt-1">
              <li className="list-inline-item">
                <a
                  className="h3 text-dark text-decoration-none mr-3"
                  href="shop"
                >
                  Accesorios
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="h3 text-dark text-decoration-none mr-3"
                  href="animales"
                >
                  Animales
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="h3 text-dark text-decoration-none"
                  href="Servicios"
                >
                  Servicios
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
              <div className="card rounded-0">
                <img
                  className="card-img rounded-0 img-fluid"
                  src="https://photos.encuentra24.com/t_or_fh_l/f_auto/v1/sv/24/28/69/00/24286900_16a01e"
                />
                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="btn btn-success text-white mt-2"
                        href="wallet"
                      >
                        <i className="fas fa-cart-plus" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <a className="h3 text-decoration-none">
                  Labrador cachorro Hembra, vacunada, dos meses y medio.
                </a>
                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                  <li className="pt-2"></li>
                </ul>
                <ul className="list-unstyled d-flex justify-content-center mb-1">
                  <li>
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-muted fa fa-star" />
                  </li>
                </ul>
                <p className="text-center mb-0">2 SOL</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
              <div className="card rounded-0">
                <img
                  className="card-img rounded-0 img-fluid"
                  src="https://photos.encuentra24.com/t_or_fh_l/f_auto/v1/sv/24/14/87/19/24148719_706354"
                />
                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="btn btn-success text-white mt-2"
                        href="wallet"
                      >
                        <i className="fas fa-cart-plus" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <a className="h3 text-decoration-none">
                  Gato Persa Macho, exotico persa doll face, vacunado, un mes y
                  dos semanas.
                </a>
                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                  <li className="pt-2"></li>
                </ul>
                <ul className="list-unstyled d-flex justify-content-center mb-1">
                  <li>
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-muted fa fa-star" />
                    <i className="text-muted fa fa-star" />
                  </li>
                </ul>
                <p className="text-center mb-0">1.8 SOL</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
              <div className="card rounded-0">
                <img
                  className="card-img rounded-0 img-fluid"
                  src="data:image/jpeg;base64,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"
                />
                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="btn btn-success text-white mt-2"
                        href="wallet"
                      >
                        <i className="fas fa-cart-plus" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <a className="h3 text-decoration-none">Hamster ruso bebé.</a>
                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                  <li className="pt-2"></li>
                </ul>
                <ul className="list-unstyled d-flex justify-content-center mb-1">
                  <li>
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                    <i className="text-warning fa fa-star" />
                  </li>
                </ul>
                <p className="text-center mb-0">0.5 SOL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Content */}
    {/* Start Brands */}
    <section className="bg-light py-5">
      <div className="container my-4">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Acerca De Nuestras Mascotas</h1>
            <p>
              "Tener un animal en tu vida no te hace ser mejor persona, pero
              cuidarlo y respetarlo como se merece sí"
            </p>
          </div>
          <div className="col-lg-9 m-auto tempaltemo-carousel">
            <div className="row d-flex flex-row">
              {/*Controls*/}
              <div className="col-1 align-self-center">
                <a
                  className="h1"
                  href="#multi-item-example"
                  role="button"
                  data-bs-slide="prev"
                >
                  <i className="text-light fas fa-chevron-left" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>


  </>



  );
  };
  export default animales