import StaticTable from './static-table';

export default function staticData(props) {
  return (
    <section>
      <h2>Complete information</h2>
      <StaticTable state={props.state} />
    </section>
  );
}
