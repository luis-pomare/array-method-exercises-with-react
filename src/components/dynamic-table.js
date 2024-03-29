import data from "../store";

export default function dynamicTable() {
  const { companies, ages } = data;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Company name</th>
            <th>Category</th>
            <th>Start date</th>
            <th>End date</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Ages</th>
            {ages.map((age) => (
              <td>{age}</td>
            ))}
          </tr>
        </thead>
      </table>
    </>
  );
}
