const Title = (props) => {
  let valuess = props.valuess;
  let setvalues = props.setvalues;
  let submitted = props.submitted;
  return (
    <section className="title">
      <h3>Color Generator</h3>
      <form onSubmit={submitted}>
        <input
          value={valuess}
          onChange={(element) => {
            setvalues(element.target.value);
          }}
        ></input>
        <button className="btn">GO</button>
      </form>
    </section>
  );
};

export default Title;
