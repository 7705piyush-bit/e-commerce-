export default function Footer() {
  return (
    <>
      {/* Footer Section */}
      <div className="row bg-dark text-light mt-5 rounded-1">
        <div className="col-sm-11 mx-auto mt-5">
          <div className="row border-bottom border-dark border-2 pb-5">
            <div className="col-sm-4">
              <h4>
                <i className="fa-solid fa-location-dot fs-3 me-2"></i>
                Address
              </h4>
              <p className="ps-4">Mumbai</p>
            </div>
            <div className="col-sm-4">
              <h4>
                <i className="fa-solid fa-phone"></i> Contact
              </h4>
              <p>
                +91 0112202255 <br />
                +91 0220550555
              </p>
            </div>
            <div className="col-sm-4">
              <h4>
                <i className="fa-regular fa-envelope"></i> Email
              </h4>
              <p>malefashion@gmail.com</p>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-sm-4">
              <h3>Male Fashion</h3>
              <hr />
              <p>Find your best</p>
            </div>
            <div className="col-sm-4 text-light p-4">
              <h4>Links</h4>
              <div className="underline"></div>
              <div className="row">
                <div className="col-sm-6">
                  <ul style={{ listStyleType: 'none' }}>
                    <li>
                      <a href="/" className="text-light">
                        Home
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul style={{ listStyleType: 'none' }}>
                    <li>
                      <a href="/about" className="text-light">
                        About
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-4 p-4">
              <h4>Join us</h4>
              <div className="underline"></div>
              <p className="mt-2 fw-semibold">
                <small>Don't miss out</small>
              </p>
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control py-3 rounded-1"
                  placeholder="email"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 mb-2">
        <div className="col-sm-12 text-light">
          <div className="row text-dark py-4">
            <div className="col-sm-12 text-dark text-center">
              <p className="border border-1 border-light rounded-4 border-dark">
                © Copyright 2024 Designed & Developed By | Shivam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}