export const Card = (props) => {
  return (
    <div className="card" style={{ background: "#e3e3e3", marginTop: "20px" }}>
      <div className="card-title" style={{padding: "10px"}}>{props.title}</div>
      {props.code && (
        <div className="card-subtitle text-muted">
          <pre>
            <code>{props?.code}</code>
          </pre>
        </div>
      )}
      <div className="card-body">{props.children}</div>
    </div>
  );
};

export const RefreshButton = ({ onClick }) => {
  return (
    <button className="btn btn-default pull-right" title="refresh data" onClick={onClick}>
      <i
        className="fa fa-refresh"
        style={{
          fontSize: "15px",
          display: "flex",
        }}
      />
    </button>
  );
};
