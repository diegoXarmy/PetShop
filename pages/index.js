import React from 'react'

import Script from 'next/script'
const home = () => {
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
      


  <div className="hero_area">
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
          <div className=" navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                <li className="nav-item">
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
                    Compra Ahora{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="quote_btn-container  d-flex justify-content-center">
              <a>Llamanos: +52 6291238703</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
    {/* end header section */}
    {/* slider section */}
    <section className=" slider_section position-relative">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4 offset-md-2">
                  <div className="slider_detail-box">
                    <h1>
                      Atención Profesional
                      <span>A Tu Mascota</span>
                    </h1>
                    <p>
                      Darle un hábito y atención a tu mascota, generan un cierto
                      proceso que aporta paz y seguridad al animal. Contactanos
                    </p>
                    <div className="btn-box">
                      <a href="contact" className="btn-2">
                        Contactanos
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="slider_img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4 offset-md-2">
                  <div className="slider_detail-box">
                    <h1>
                      ¡El Cuidado De Tu Mascota,
                      <span>Nunca Ha Sido Tan Facil!</span>
                    </h1>
                    <p>
                      Tener una PetShop ayuda a mantenerse al día con el cuidado
                      preventivo de las mascotas.
                    </p>
                    <div className="btn-box">
                      <a href="contact" className="btn-2">
                        Contactanos
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="slider_img-box">
                    <img src="images/vet1.avif" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4 offset-md-2">
                  <div className="slider_detail-box">
                    <h1>
                      Accesorios
                      <span>Para Tus Mascotas</span>
                    </h1>
                    <p>
                      Accesorios básicos para tus mascotas como son la cama, los
                      platos, cepillo de dientes, cepillo para pelo, shampoo,
                      talco y de más elementos de higiene.
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-2">
                        Contactanos
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="slider_img-box">
                    <img src="images/vet2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end slider section */}
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
            <h2 className="custom_heading">Acerca de nuestras mascotas</h2>
            <p>
              "Tener un animal en tu vida no te hace ser mejor persona, pero
              cuidarlo y respetarlo como se merece sí"
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* service section */}
  <section className="service_section layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-2">
          <h2 className="custom_heading">
            Nuestros <span>Servicios</span>
          </h2>
          <div className="container layout_padding2">
            <div className="row">
              <div className="col-md-4">
                <div className="img_box">
                  <img src="images/s-1.png" alt="" />
                </div>
                <div className="detail_box">
                  <h6>Cuidado De Mascotas</h6>
                  <p>
                    Ofrecemos cuidado de mascotas en un lugar adaptado para su
                    especie
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="img_box">
                  <img src="images/s-2.png" alt="" />
                </div>
                <div className="detail_box">
                  <h6>Hotel De Mascotas</h6>
                  <p>
                    Lugar ideal para dejar a tus mascotas si tienes que salir de
                    viaje
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="img_box">
                  <img src="images/s-3.png" alt="" />
                </div>
                <div className="detail_box">
                  <h6>Emergencia</h6>
                  <p>Atencion total a tus mascotas en caso de emergencia</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="col-md-4">
          <img src="images/tool.png" alt="" className="w-100" />
        </div>
      </div>
    </div>
  </section>
  {/* end service section */}
  {/* gallery section */}
  <section className="gallery-section layout_padding">
    <div className="container">
      <h2>Galeria</h2>
    </div>
    <div className="container ">
      <div className="img_box box-1">
        <img src="images/g-1.png" alt="" />
      </div>
      <div className="img_box box-2">
        <img src="images/g-2.png" alt="" />
      </div>
      <div className="img_box box-3">
        <img src="images/g-3.png" alt="" />
      </div>
      <div className="img_box box-4">
        <img src="images/g-4.png" alt="" />
      </div>
      <div className="img_box box-5">
        <img src="images/g-5.png" alt="" />
      </div>
    </div>
  </section>
  {/* end gallery section */}
  {/* buy section */}
  <section className="buy_section layout_padding">
    <div className="container">
      <h2>Puedes comprar y adoptar mascotas en nuestra clínica</h2>
      <p>
        Tenemos una variedad de mascotas rescatadas y adaptadas en su habitat
        natural listas para su venta o adopcion
      </p>
      <div className="d-flex justify-content-center"></div>
    </div>
  </section>
  {/* end buy section */}
  {/* client section */}
  <section className="client_section layout_padding-bottom">
    <div className="container">
      <h2 className="custom_heading text-center">
        Opinion De Nuestros Clientes
      </h2>
      <p className="text-center">
        Nos importa mucho la opinion de nuestros clientes para la continua
        mejora de nuestros Servicios
      </p>
      <div
        id="carouselExample2Indicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExample2Indicators"
            data-slide-to={0}
            className="active"
          />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="layout_padding2 pl-100">
              <div className="client_container ">
                <div className="img_box">
                  <img src="images/client.jpg" alt="" />
                </div>
                <div className="detail_box">
                  <h5>Jennifer Aguilar</h5>
                  <p>
                    Excelente servicio super recomendado, tienen instalaciones
                    muy novedosas e ideales para nuestras mascotas, Me encanto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end client section */}
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
              <p>Ubicacion</p>
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

  <Script type="text/javascript" src="js/jquery-3.4.1.min.js"></Script>
  <Script type="text/javascript" src="js/bootstrap.js"></Script>

    
    </>

    );
};

export default home