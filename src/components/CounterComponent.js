import { connect, useDispatch } from "react-redux";
import { Increment, Decrement } from "../actions/counterAction";
const CounterComponent = ({ count }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name === "up") {
      dispatch(Increment());
    } else {
      dispatch(Decrement());
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Count : {count}</h1>
      <span>
        <button name="up" onClick={(e) => handleClick(e)}>
          Increment
        </button>
        <button name="down" onClick={(e) => handleClick(e)}>
          Decrement
        </button>
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(CounterComponent);
