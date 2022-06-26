export default function StaticTable(props) {
  const { companies, ages } = props;
  return (
    <>
      <table>
        <tr>
          <th>Company name</th>
          <th>Category</th>
          <th>Start date</th>
          <th>End date</th>
        </tr>
        {companies.map((company) => {
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
      <table>
        <tr>
          <th>Ages</th>
          {ages.map((age) => (
            <td>{age}</td>
          ))}
        </tr>
      </table>
    </>
  );
}
