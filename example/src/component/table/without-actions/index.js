import { ESTable } from "@eversoft/react-table";
import { useEffect, useState } from "react";
import { Card, RefreshButton } from "../../card";
import { data } from "../../data";

const Title = () => {
  return <h4 style={{ textAlign: "center" }}>Simple Table</h4>;
};

export const WithoutAction = () => {
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
  fields={[]}
  data={[]}
  ...
/>`;

  useEffect(() => {
    setTimeout(() => {
      setUser(data);
    }, 5000);
  }, []);

  return (
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
          showPagination={false}
          title="Table <b>Details</b>"
          loadingTime={5000}
          loading={loading}
        />
      </Card>
  );
};
