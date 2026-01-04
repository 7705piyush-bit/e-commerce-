'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      {/* Top Navigation Bar */}
      <div className="container-fluid">
        <div className="row bg-black text-light text-center">
          <div className="col-sm-6 mt-2">
            <h5>Free shipping, 30-day return or refund guarantee</h5>
          </div>
          <div className="col-sm-6 mt-2">
            <div className="row">
              <ul className="text-end">
                <Link href="/signin">
                  <button className="rounded-4 mx-3 border-0">SIGN IN</button>
                </Link>
                <Link href="/cart">
                  <button className="rounded-4 mx-3 border-0">
                    <i className="fa-solid fa-cart-shopping" style={{color: '#63E6BE'}}></i>
                    Cart Area
                  </button>
                </Link>
                <select name="USD" className="rounded-4 mx-3">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="row">
          <div className="col-sm-5">
            <Link href="/">
              <Image 
                src="/Male Fashion/img/logo.png" 
                alt="Male Fashion Logo" 
                width={200} 
                height={80}
                className="text-center mt-4 px-5"
              />
            </Link>
          </div>
          <div className="col-sm-7 mt-3">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link active" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/shop">Shop</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                        More
                      </a>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="/about">About us</Link></li>
                        <li><Link className="dropdown-item" href="/contact">Contact</Link></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#new-arrivals" className="nav-link fst-italic">New Arrivals</a>
                    </li>
                    <li>
                      <Link href="/contact" className="nav-link">Contact</Link>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}