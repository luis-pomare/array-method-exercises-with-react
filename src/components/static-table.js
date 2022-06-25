export default function StaticTable(props) {
  return (
    <table>
      <tr>
        <td>Company name</td>
        <td>Category</td>
        <td>Start date</td>
        <td>End date</td>
      </tr>
      {props.companies.map((company) => {
        return (
          <tr>
            <td>{company.name}</td>
            <td>{company.category}</td>
            <td>{company.start}</td>
            <td>{company.end}</td>
          </tr>
        );
      })}
    </table>
  );
}
