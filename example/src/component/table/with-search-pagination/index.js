import { ESTable } from "@eversoft/react-table";
import { useEffect, useState } from "react";
import { Card, RefreshButton } from "../../card";
import { data } from "../../data";

const Title = () => {
  return (
    <h4 style={{ textAlign: "center" }}>Table with search and pagination</h4>
  );
};

export const WithSearchAndPagination = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const refreshClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  const syntax = `<ESTable
  ...
  showPagination={true}
  showSearch={true}
  ...
/>`;

  useEffect(() => {
    setTimeout(() => {
      setUser(data);
    }, 5000);
  }, []);

  return (
    <div style={{ width: "80rem" }}>
      <Card title={<Title />} code={syntax}>
        <RefreshButton onClick={refreshClick} />
        <ESTable
          data={user}
          fields={[
            {
              name: "Username",
              key: "user",
            },
            {
              name: "Likes",
              key: "likes",
            },
            {
              name: "Status",
              key: "active",
            },
          ]}
          showPagination={true}
          title="Table <b>Details</b>"
          loadingTime={5000}
          loading={loading}
          showSearch={true}
        />
      </Card>
    </div>
  );
};
