import StaticData from './static-data';
import DynamicData from './dynamic-data';

export default function Main(props) {
  const { companies, ages } = props;
  return (
    <main>
      <StaticData companies={companies} ages={ages} />
      <DynamicData companies={companies} ages={ages} />
    </main>
  );
}
