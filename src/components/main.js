import StaticData from './static-data';
import DynamicData from './dynamic-data';

export default function Main(props) {
  return (
    <main>
      <StaticData state={props.state} />
      <DynamicData state={props.state} />
    </main>
  );
}
