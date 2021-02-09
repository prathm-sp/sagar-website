import "./App.css";
import "./css/bootstrap.min.css";
import "./css/mdb.min.css";
import "./css/style.min.css";
import Logo from "./img/kaur-kristjan-miUC0b1IVYU-unsplash.jpg";
import Logo1 from "./img/zoltan-tasi-WwlP3F1VksA-unsplash.jpg";
import Logo2 from "./img/derek-thomson-AJ-7QpXV9U4-unsplash.jpg";

function App() {
  return (
    <div className="App">
      <nav class="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
        <div class="container">
          <a class="navbar-brand waves-effect" target="_blank">
            <strong class="blue-text"> S.S. Cycle World</strong>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto"></ul>

            <ul class="navbar-nav nav-flex-icons">
              <li class="nav-item active mr-5">
                <a class="nav-link waves-effect" href="#">
                  Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link waves-effect" target="_blank">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        id="carousel-example-1z"
        class="carousel slide carousel-fade pt-4"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carousel-example-1z"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carousel-example-1z" data-slide-to="1"></li>
          <li data-target="#carousel-example-1z" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <div
              class="view"
              style={{
                backgroundImage: `url(${Logo})`,
                backgroundRepeat: "noRepeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div class="mask rgba-black-strong d-flex justify-content-center align-items-center">
                <div class="text-center white-text mx-5 wow fadeIn">
                  <h1 class="mb-4">
                    <strong>Ride With S.S.Cycle World</strong>
                  </h1>

                  <p>
                    <strong>
                      Life is like riding a bicycle. To keep your balance you
                      must keep moving.
                    </strong>
                  </p>

                  <p class="mb-4 d-none d-md-block">
                    <strong>
                      Cyclers see considerably more of this beautiful world than
                      any other class of citizens. A good bicycle, well applied,
                      will cure most ills this flesh is heir to
                    </strong>
                  </p>

                  <a
                    target="_blank"
                    href="https://www.google.co.in/maps/place/S.S+CYCLE+WORLD/@19.1060291,74.7278969,17z/data=!3m1!4b1!4m5!3m4!1s0x3bdcb1f4f7ebae1d:0xea3c4858ddd5ff48!8m2!3d19.106024!4d74.7300856"
                    class="btn btn-outline-white btn-lg"
                  >
                    Shop Location
                    <i class="fas fa-map-marker-alt ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div
              class="view"
              style={{
                backgroundImage: `url(${Logo1})`,
                backgroundRepeat: "noRepeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div class="mask rgba-black-strong d-flex justify-content-center align-items-center">
                <div class="text-center white-text mx-5 wow fadeIn">
                  <h1 class="mb-4">
                    <strong>Ride With S.S.Cycle World</strong>
                  </h1>

                  <p>
                    <strong>
                      Life is like riding a bicycle. To keep your balance you
                      must keep moving.
                    </strong>
                  </p>

                  <p class="mb-4 d-none d-md-block">
                    <strong>
                      Cyclers see considerably more of this beautiful world than
                      any other class of citizens. A good bicycle, well applied,
                      will cure most ills this flesh is heir to
                    </strong>
                  </p>

                  <a
                    target="_blank"
                    href="https://www.google.co.in/maps/place/S.S+CYCLE+WORLD/@19.1060291,74.7278969,17z/data=!3m1!4b1!4m5!3m4!1s0x3bdcb1f4f7ebae1d:0xea3c4858ddd5ff48!8m2!3d19.106024!4d74.7300856"
                    class="btn btn-outline-white btn-lg"
                  >
                    Shop Location
                    <i class="fas fa-map-marker-alt ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div
              class="view"
              style={{
                backgroundImage: `url(${Logo2})`,
                backgroundRepeat: "noRepeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div class="mask rgba-black-strong d-flex justify-content-center align-items-center">
                <div class="text-center white-text mx-5 wow fadeIn">
                  <h1 class="mb-4">
                    <strong>Ride With S.S.Cycle World</strong>
                  </h1>

                  <p>
                    <strong>
                      Life is like riding a bicycle. To keep your balance you
                      must keep moving.
                    </strong>
                  </p>

                  <p class="mb-4 d-none d-md-block">
                    <strong>
                      Cyclers see considerably more of this beautiful world than
                      any other class of citizens. A good bicycle, well applied,
                      will cure most ills this flesh is heir to
                    </strong>
                  </p>

                  <a
                    target="_blank"
                    href="https://www.google.co.in/maps/place/S.S+CYCLE+WORLD/@19.1060291,74.7278969,17z/data=!3m1!4b1!4m5!3m4!1s0x3bdcb1f4f7ebae1d:0xea3c4858ddd5ff48!8m2!3d19.106024!4d74.7300856"
                    class="btn btn-outline-white btn-lg"
                  >
                    Shop Location
                    <i class="fas fa-map-marker-alt ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          class="carousel-control-prev"
          href="#carousel-example-1z"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carousel-example-1z"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <main>
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5">
            <span class="navbar-brand">Categories:</span>

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#basicExampleNav"
              aria-controls="basicExampleNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="basicExampleNav">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    All
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Kids
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Adults
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Category 4
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <section class="text-center mb-4">
            <div class="row wow fadeIn">
              <div class="col-lg-3 col-md-6 mb-4">
                <div class="card">
                  <div class="view overlay">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/8166lsA66yL._SX569_.jpg"
                      class="card-img-top"
                      alt=""
                    />
                    <a>
                      <div class="mask rgba-white-slight"></div>
                    </a>
                  </div>

                  <div class="card-body text-center">
                    <a href="" class="grey-text">
                      <h5>Cycle</h5>
                    </a>
                    <h5>
                      <strong>
                        <a href="" class="dark-grey-text">
                          Firefox Bikes
                          <span class="badge badge-pill danger-color">
                            {" "}
                            NEW
                          </span>
                        </a>
                      </strong>
                    </h5>

                    <h4 class="font-weight-bold blue-text">
                      <strong>₹ 18000</strong>
                    </h4>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mb-4">
                <div class="card">
                  <div class="view overlay">
                    <img
                      src="https://rukminim1.flixcart.com/image/416/416/jwnusnk0/cycle/b/a/5/mode-1-0-orange-18-omo-single-speed-original-imafhaurukzuybve.jpeg?q=70"
                      class="card-img-top"
                      alt=""
                    />
                    <a>
                      <div class="mask rgba-white-slight"></div>
                    </a>
                  </div>

                  <div class="card-body text-center">
                    <a href="" class="grey-text">
                      <h5>Hybrid Cycle</h5>
                    </a>
                    <h5>
                      <strong>
                        <a href="" class="dark-grey-text">
                          OMO mode-1-0-orange
                        </a>
                      </strong>
                    </h5>

                    <h4 class="font-weight-bold blue-text">
                      <strong>₹ 8,995</strong>
                    </h4>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mb-4">
                <div class="card">
                  <div class="view overlay">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/8166lsA66yL._SX569_.jpg"
                      class="card-img-top"
                      alt=""
                    />
                    <a>
                      <div class="mask rgba-white-slight"></div>
                    </a>
                  </div>

                  <div class="card-body text-center">
                    <a href="" class="grey-text">
                      <h5>Cycle</h5>
                    </a>
                    <h5>
                      <strong>
                        <a href="" class="dark-grey-text">
                          Firefox Bikes
                          <span class="badge badge-pill danger-color">
                            {" "}
                            NEW
                          </span>
                        </a>
                      </strong>
                    </h5>

                    <h4 class="font-weight-bold blue-text">
                      <strong>₹ 18000</strong>
                    </h4>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mb-4">
                <div class="card">
                  <div class="view overlay">
                    <img
                      src="https://rukminim1.flixcart.com/image/416/416/jwnusnk0/cycle/b/a/5/mode-1-0-orange-18-omo-single-speed-original-imafhaurukzuybve.jpeg?q=70"
                      class="card-img-top"
                      alt=""
                    />
                    <a>
                      <div class="mask rgba-white-slight"></div>
                    </a>
                  </div>

                  <div class="card-body text-center">
                    <a href="" class="grey-text">
                      <h5>Hybrid Cycle</h5>
                    </a>
                    <h5>
                      <strong>
                        <a href="" class="dark-grey-text">
                          OMO mode-1-0-orange
                        </a>
                      </strong>
                    </h5>

                    <h4 class="font-weight-bold blue-text">
                      <strong>₹ 8,995</strong>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div class="row wow fadeIn">
              <div class="col-lg-3 col-md-6 mb-4">
                <div class="card">
                  <div class="view overlay">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/8166lsA66yL._SX569_.jpg"
                      class="card-img-top"
                      alt=""
                    />
                    <a>
                      <div class="mask rgba-white-slight"></div>
                    </a>
                  </div>

                  <div class="card-body text-center">
                    <a href="" class="grey-text">
                      <h5>Cycle</h5>
                    </a>
                    <h5>
                      <strong>
                        <a href="" class="dark-grey-text">
                          Firefox Bikes
                          <span class="badge badge-pill danger-color">
                            {" "}
                            NEW
                          </span>
                        </a>
                      </strong>
                    </h5>

                    <h4 class="font-weight-bold blue-text">
                      <strong>₹ 18000</strong>
                    </h4>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mb-4">
                <div class="card">
                  <div class="view overlay">
                    <img
                      src="https://rukminim1.flixcart.com/image/416/416/jwnusnk0/cycle/b/a/5/mode-1-0-orange-18-omo-single-speed-original-imafhaurukzuybve.jpeg?q=70"
                      class="card-img-top"
                      alt=""
                    />
                    <a>
                      <div class="mask rgba-white-slight"></div>
                    </a>
                  </div>

                  <div class="card-body text-center">
                    <a href="" class="grey-text">
                      <h5>Hybrid Cycle</h5>
                    </a>
                    <h5>
                      <strong>
                        <a href="" class="dark-grey-text">
                          OMO mode-1-0-orange
                        </a>
                      </strong>
                    </h5>

                    <h4 class="font-weight-bold blue-text">
                      <strong>₹ 8,995</strong>
                    </h4>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mb-4">
                <div class="card">
                  <div class="view overlay">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/8166lsA66yL._SX569_.jpg"
                      class="card-img-top"
                      alt=""
                    />
                    <a>
                      <div class="mask rgba-white-slight"></div>
                    </a>
                  </div>

                  <div class="card-body text-center">
                    <a href="" class="grey-text">
                      <h5>Cycle</h5>
                    </a>
                    <h5>
                      <strong>
                        <a href="" class="dark-grey-text">
                          Firefox Bikes
                          <span class="badge badge-pill danger-color">
                            {" "}
                            NEW
                          </span>
                        </a>
                      </strong>
                    </h5>

                    <h4 class="font-weight-bold blue-text">
                      <strong>₹ 18000</strong>
                    </h4>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mb-4">
                <div class="card">
                  <div class="view overlay">
                    <img
                      src="https://rukminim1.flixcart.com/image/416/416/jwnusnk0/cycle/b/a/5/mode-1-0-orange-18-omo-single-speed-original-imafhaurukzuybve.jpeg?q=70"
                      class="card-img-top"
                      alt=""
                    />
                    <a>
                      <div class="mask rgba-white-slight"></div>
                    </a>
                  </div>

                  <div class="card-body text-center">
                    <a href="" class="grey-text">
                      <h5>Hybrid Cycle</h5>
                    </a>
                    <h5>
                      <strong>
                        <a href="" class="dark-grey-text">
                          OMO mode-1-0-orange
                        </a>
                      </strong>
                    </h5>

                    <h4 class="font-weight-bold blue-text">
                      <strong>₹ 8,995</strong>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <nav class="d-flex justify-content-center wow fadeIn">
            <ul class="pagination pg-blue">
              <li class="page-item disabled">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>

              <li class="page-item active">
                <a class="page-link" href="#">
                  1<span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  4
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  5
                </a>
              </li>

              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </main>

      <footer class="page-footer text-center font-small mt-4 wow fadeIn">
        <hr class="my-4" />

        <div class="pb-4">
          <i class="fab fa-facebook-f mr-3"></i>

          <i class="fab fa-twitter mr-3"></i>

          <i class="fab fa-youtube mr-3"></i>

          <i class="fab fa-google-plus-g mr-3"></i>

          <i class="fab fa-whatsapp mr-3"></i>

          <i class="fab fa-instagram mr-3"></i>
        </div>
      </footer>
    </div>
  );
}

export default App;
