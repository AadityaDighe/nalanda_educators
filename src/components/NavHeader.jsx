const NavHeader = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center px-3 py-2 navHeader">
        {/* Left Side */}
        <div>
          <span className="me-3">9527107291 / 9860963039</span>
          <span className="d-block d-sm-inline" style={{ maxWidth: "200px" }}>
            nalanda.educators@gmail.com
          </span>
        </div>

        {/* Right Side */}
        <div>
          <span className="me-2">
            <i className="fa-solid fa-phone"></i>
          </span>
          <span className="me-2">
            <i className="fa-brands fa-facebook"></i>
          </span>
          <span>
            <i className="fa-brands fa-youtube"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default NavHeader;
