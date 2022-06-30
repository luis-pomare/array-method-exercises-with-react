import Nav from './nav';

export default function header(props) {
  return (
    <header>
      <h1 onClick={props.onClick}>
        High order array methods practice with React
      </h1>
      <Nav />
    </header>
  );
}
