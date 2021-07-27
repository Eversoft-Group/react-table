export const ConnectSocial = () => {
  return (
    <div className="col" style={{ marginTop: "20px" }}>
      <h4 style={{ textAlign: "center" }}>Follow Us</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textalign: "center",
        }}
      >
        <a
          href="https://facebook.com/dhpradeep25"
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa fa-facebook"
            style={{
              fontSize: "25px",
            }}
          />
        </a>
        <a
          href="https://github.com/dhpradeep"
          style={{ textDecoration: "none", paddingLeft: "10px" }}
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa fa-github"
            style={{
              fontSize: "25px",
            }}
          />
        </a>
        <a
          href="https://linkedin.com/in/dhpradeep25/"
          style={{ textDecoration: "none", paddingLeft: "10px" }}
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa fa-linkedin"
            style={{
              fontSize: "25px",
            }}
          />
        </a>
        <a
          href="https://stackoverflow.com/users/8653313/pradip-dhaka/"
          style={{ textDecoration: "none", paddingLeft: "10px" }}
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa fa-stack-overflow"
            style={{
              fontSize: "25px",
            }}
          />
        </a>
      </div>
    </div>
  );
};
