export default function staticData(props) {
  return (
    <section>
      <h2>Companies full info</h2>
      <p>{props.companies[0].name}</p>
      <p>{props.ages[0]}</p>
    </section>
  );
}
