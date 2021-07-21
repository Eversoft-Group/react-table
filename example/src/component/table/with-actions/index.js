import { ESTable } from "@eversoft/react-table";
import { useEffect, useState } from "react";
import { Card, RefreshButton } from "../../card";
import { data } from "../../data";

const Title = () => {
  return <h4 style={{ textAlign: "center" }}>Table with actions</h4>;
};

export const WithAction = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const refreshClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  const onDelete = (row) => alert(`Row is: ${JSON.stringify(row)}`);
  const onEdit = (row) => alert(`Row is: ${JSON.stringify(row)}`);

  const syntax = `
const onDelete = (row) => alert(Row is: \${JSON.stringify(row)});
const onEdit = (row) => alert(Row is: \${JSON.stringify(row)});

<ESTable
  ...
  onDeleteAction={(e) => onDelete(e)}
  onEditAction={(e) => onEdit(e)}
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
              name: "Active",
              key: "active",
            },
          ]}
          showPagination={true}
          title="Table <b>Details</b>"
          loadingTime={5000}
          loading={loading}
          showSearch={true}
          onDeleteAction={(e) => onDelete(e)}
          onEditAction={(e) => onEdit(e)}
        />
      </Card>
    </div>
  );
};
