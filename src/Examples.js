const Box = ({ flap, hood, ...props }) => (
  <div {...props}>
    <p>{flap}</p>
    <h1>{hood}</h1>
  </div>
);

const Box = ({ flap, hood, onClick, onHover }) => (
  <div onClick={onClick} onHover={onHover}>
    <p>{flap}</p>
    <h1>{hood}</h1>
  </div>
);

const Box = props => {
  const { className, flap, hood, ...others } = props;
  return (
    <div className={className} {...others}>
      <p>{flap}</p>
      <h1>{hood}</h1>
    </div>
  );
};

const Box = props => {
  const { className, flap, hood, onClick, onHover } = props;
  return (
    <div className={className} onClick={onClick} onHover={onHover}>
      <p>{flap}</p>
      <h1>{hood}</h1>
    </div>
  );
};

function Box(props) {
  const { className, flap, hood, onClick, onHover } = props;
  return (
    <div className={className} onClick={onClick} onHover={onHover}>
      <p>{flap}</p>
      <h1>{hood}</h1>
    </div>
  );
}

const list = [1, 2, 3];

const container = items =>
  items.map(each => (
    <Box key={each} flap={"i have a flap"} hood={"i have a hood too"} />
  ));

const container = items => {
  return items.map(each => {
    return <Box key={each} flap={"i have a flap"} hood={"i have a hood too"} />;
  });
};

const House = () => {
  return container(list);
};
