const Info = () => {
  return (
    <div className="top">
      <div className="info">
        <div className="info-flex">
          <Locale />
          <Emblems />
        </div>
        <Cart />
      </div>
    </div>
  );
};

const Cart = () => {
  return (<div>cart</div>)
}

const Locale = () => {
  return (<div>locale</div>)
}

const Emblems = () => {
  return (<div>emblems</div>)
}

export default Info;
