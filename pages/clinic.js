import React from 'react'

const clinic = () => {
    return( 
    <>

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



  <div className="hero_area"style={{ height:"65px"}}>
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
                    Galería de mascotas{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="clinic">
                   Clinica {" "}
                    
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact">
                    Contactanos {" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="shope">
                     Comprar ahora{" "}
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
              <a>Llamanos: +52 6291238703</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
    {/* end header section */}
    
  </div>
  {/* about section */}
  <section className="about_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="img-box">
            <img src="images/about.png" alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <h2 className="custom_heading">
              Acerca de nosotros
              <span>PetShop</span>
            </h2>
            <p>
              Somos una clinica de mascotas, donde podrás comprar tus mascotas,
              accesorios y servicios haciendo uso de una nueva tecnología, donde
              podrás hacer tus pagos con tu wallet de Phantom.
            </p>
            <div>
              <a href="service">¿Qué ofrecemos?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* info section */}
  <section className="info_section layout_padding2">
    <div className="container">
      <div className="info_items">
        <a href="https://goo.gl/maps/aho2xSVtJFLLD3J96">
          <div className="item ">
            <div className="img-box box-1">
              <img src="" alt="" />
            </div>
            <div className="detail-box">
              <p>Ubicación</p>
            </div>
          </div>
        </a>
        <a>
          <div className="item ">
            <div className="img-box box-2">
              <img src="" alt="" />
            </div>
            <div className="detail-box">
              <p>+52 6291238703</p>
            </div>
          </div>
        </a>
        <a>
          <div className="item ">
            <div className="img-box box-3">
              <img src="" alt="" />
            </div>
            <div className="detail-box">
              <p>kg2732914@gmail.com</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
  {/* end info_section */}
  {/* footer section */}
  <section className="container-fluid footer_section"></section>
  {/* footer section */}
  </>



  )
  }
  export default clinic
