import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="mb-0">Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className="col-6">
              <p className="text-end mb-0">
                Hotline {"\u00A0"}:{"\u00A0"}
                <span>
                  <a href="tel:+91 9337094761">+91 9337094761</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2 className="mb-0">
                <Link>EpicCart.</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex flex-row align-items-center gap-10">
                    <img src="/images/compare.svg" alt="compare" />
                    <p>
                      Compare
                      <br />
                      Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex flex-row align-items-center gap-10">
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p>
                      Favourite
                      <br />
                      Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex flex-row align-items-center gap-10">
                    <img src="/images/user.svg" alt="user" />
                    <p>
                      Login
                      <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex flex-row align-items-center gap-10">
                    <img src="/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p>$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
