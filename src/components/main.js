import StaticData from './static-data';
import DynamicData from './dynamic-data';
import { useState } from 'react';
import data from '../store.js';

console.log(data);
export default function Main() {
  const [state, setState] = useState(data);
  return (
    <main>
      <StaticData />
      <DynamicData />
      {state.ages[0]}
    </main>
  );
}
