import StaticTable from './static-table';

export default function staticData(props) {
  const { companies, ages } = props;
  return (
    <section>
      <h2>Companies full info</h2>
      <StaticTable companies={companies} ages={ages} />
    </section>
  );
}
