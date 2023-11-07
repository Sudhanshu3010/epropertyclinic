
class Navbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <section class="header ">
        <section class="head1 bg-dark">
            <div class="container containerp head1c">
              <div class="row">
                <div class="col-lg-6 col-xl-6 col-xxl-6 head1c bg-dark">
                  <div class="row">
                    <div class="col-lg-5 col-xl-5 col-xxl-5 col-md-6 col-sm-6 head1c">
                      <span class="text-light"><i class="fa-regular fa-envelope text-dark-orange m-2"> </i> info@epropertyclinic.com</span>
                    </div>
                    <div class="col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-6 head1c">
                      <span class="text-light"><i class="fa-solid fa-phone text-dark-orange m-2"> </i> +91 9923044520</span>
                    </div>
                  </div>  
                </div>

                <div class="col-lg-6 col-xl-6 col-xxl-6 head1c bg-dark">
                  <div class="row justify-content-end">
                    <div class="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-6 head1c text-end">
                      <span class="text-light me-2"><i class="fa-brands fa-facebook-f"> </i> </span>
                      <span class="text-light  me-2"> <i class="fa-brands fa-twitter"> </i> </span>
                      <span class="text-light me-2"> <i class="fa-brands fa-instagram"> </i> </span>
                      <span class="text-light me-2"><i class="fa-brands fa-dribbble"> </i> </span>
                    </div>
                    <div class="col-lg-2 col-xl-2 col-xxl-2 col-md-6 col-sm-6 head1c bg-orange">
                      <span class="text-light">Contact</span>
                    </div>
                  </div>  
                </div>
                
              </div>
            </div>
        </section>

        <section class="head2  sticky-top">
          <div class="container containerp  head2c">
            <div class="row head2c">
              <div class="col-xl-3 col-lg-3">
                <span><img src="Assets/whitelogo (1).png" style="width: 250px; filter: invert(100%);"></span>
              </div>

              <div class="col-xl-6 col-lg-6">
                <nav class="navbar navbar-expand-lg head2c">
                  <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                      <ul class="navbar-nav nav-style text-blue">

                        <li class="nav-item dropdown ms-2">
                          <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Home +
                          </a>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                        </li>
                        <li class="nav-item dropdown ms-2">
                          <a class="nav-link " href="about_us.html">
                           About_us
                          </a>
                        </li>
                        <li class="nav-item dropdown ms-2">
                          <a class="nav-link " href="#">
                           Services
                          </a>
                        </li>
                        <li class="nav-item dropdown ms-2">
                          <a class="nav-link " href="#">
                           Projects
                          </a>
                        </li>
                        <li class="nav-item dropdown ms-2">
                          <a class="nav-link " href="#">
                           Gallery
                          </a>
                        </li>
                        <li class="nav-item dropdown ms-2">
                          <a class="nav-link " href="#">
                           Contact us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>

              <div class="col-xl-3 col-lg-3">
                <div class="row head2c justify-content-end">
                  <div class="box col-lg-4 col-xl-4 mx-1 shadow my-auto"><i class="fa-solid fa-magnifying-glass icho"></i></div>
                  <div class="box col-lg-4 col-xl-4 mx-1 shadow my-auto"><i class="fa-regular fa-user icho"></i></div>
                  <div class="box col-lg-4 col-xl-4 mx-1 shadow my-auto"><i class="fa-solid fa-cart-flatbed icho"></i></div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </section>`
    }
}
customElements.define('app',Navbar);