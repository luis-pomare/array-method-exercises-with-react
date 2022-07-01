import DynamicTable from './dynamic-table';

export default function dynamicData(props) {
  return (
    <section>
      <h2>Selected infomation</h2>
      <DynamicTable state={props.state} />
    </section>
  );
}
