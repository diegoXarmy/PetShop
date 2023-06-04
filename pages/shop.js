import React from 'react'

const shop = () => {
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
                    Clinica{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact">
                    Contactanos{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="shop">
                    Compre ahora{" "}
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
              <li className="pull-right fa fa-fw fa-chevron-circle-down mt-1" />
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
                  src="assets/img/pechera.jpg"
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
                  Set de paseo multicolor
                </a>
                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                  <li className="pt-2">
                    <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                  </li>
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
                <p className="text-center mb-0">0.8 SOL</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
              <div className="card rounded-0">
                <img
                  className="card-img rounded-0 img-fluid"
                  src="assets/img/gabardina.jpg"
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
                <a className="h3 text-decoration-none">Gabardina Clásica</a>
                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                  <li className="pt-2">
                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                  </li>
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
                <p className="text-center mb-0">1 SOL</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
              <div className="card rounded-0">
                <img
                  className="card-img rounded-0 img-fluid"
                  src="assets/img/limpia.jpg"
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
                <a className="h3 text-decoration-none">Limpia pelitos</a>
                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                  <li className="pt-2">
                    <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                    <span className="product-color-dot color-dot-white float-left rounded-circle ml-1" />
                  </li>
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
                <p className="text-center mb-0">0.6 SOL</p>
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

  )
  }
  export default shop