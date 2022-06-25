import StaticData from './static-data';
import DynamicData from './dynamic-data';
import { useState } from 'react';
import data from '../store.js';

export default function Main() {
  const [state, setState] = useState(data);
  const { companies, ages } = state;
  return (
    <main>
      <StaticData companies={companies} ages={ages} />
      <DynamicData />
    </main>
  );
}
