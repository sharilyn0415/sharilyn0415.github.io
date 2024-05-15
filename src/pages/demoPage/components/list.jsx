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
          <th>Backend Status</th>
        </tr>
      </thead>
      <tbody>
        {expList.map((exp) => {
          return (
            <tr key={exp.id}>
              <th>{exp.id}</th>
              <th>{exp.name}</th>
              <th>{exp.type}</th>
              <th>{exp.product}</th>
              <th>{exp.engineer}</th>
              <th>{exp.business}</th>
              <th>{exp.allocation}%</th>
              <th>{exp.status}</th>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default ExpTable;
