import DynamicTable from './dynamic-table';

export default function dynamicData(props) {
  const { companies, ages } = props;
  return (
    <section>
      <h2>Selected infomation</h2>
      <DynamicTable companies={companies} ages={ages} />
    </section>
  );
}
