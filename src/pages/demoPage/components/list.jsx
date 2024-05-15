import Table from "react-bootstrap/Table";

function ExpTable({ expList }) {
  if (expList.length === 0) return <>No exp data from backend</>;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>EXP Name</th>
          <th>Type</th>
          <th>Product POC</th>
          <th>Engineer POC</th>
          <th>Business</th>
          <th>Control Allocation</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {expList.map((exp) => {
          const expObj = JSON.parse(exp);
          return (
            <tr key={expObj.id}>
              <th>{expObj.id}</th>
              <th>{expObj.name}</th>
              <th>{expObj.type}</th>
              <th>{expObj.product}</th>
              <th>{expObj.engineer}</th>
              <th>{expObj.business}</th>
              <th>{expObj.allocation}%</th>
              <th>{expObj.status}</th>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default ExpTable;
