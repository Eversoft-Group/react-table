import "./App.css";
import { Card } from "./component/card";
import { ConnectSocial } from "./component/social";
import { CompleteTable } from "./component/table/complete-table";
import { WithAction } from "./component/table/with-actions";
import { WithAddButton } from "./component/table/with-add";
import { WithSearchAndPagination } from "./component/table/with-search-pagination";
import { WithoutAction } from "./component/table/without-actions";

function App() {
  const syntax = `
  npm i @eversoft/react-table
  `;
  const Title = () => <h4 style={{ textAlign: "center" }}>How to Use</h4>;

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <ConnectSocial />
          </div>
        </div>
        <div className="row">
          <div className="col" style={{paddingRight: "40px"}}>
              <Card title={<Title />} code={syntax}>
                <a
                  href="https://github.com/Eversoft-Group/react-table"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <i
                    className="fa fa-github"
                    style={{
                      fontSize: "25px",
                    }}
                  />
                </a>
                <a
                  href="https://www.npmjs.com/package/@eversoft/react-table"
                  style={{ textDecoration: "none", paddingLeft: "10px" }}
                  target="_blank"
                >
                  <i
                    className="fa fa-archive"
                    style={{
                      fontSize: "25px",
                    }}
                  />
                </a>
              </Card>
          </div>
          <br />
          <br />
          <h4 style={{ marginTop: "25px" }}>#Examples</h4>
          <br />
          <div className="row">
            <div className="col">
              <WithoutAction />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <WithSearchAndPagination />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <WithAction />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <WithAddButton />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <CompleteTable />
            </div>
          </div>
          <br />
          <div>
            <h4 style={{ textAlign: "center", padding: "20px" }}>
              Thank you for visit!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
