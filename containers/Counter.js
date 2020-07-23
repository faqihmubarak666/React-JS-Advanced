import React from "react";
import { connect } from "react-redux";
import CounterOutput from "../components/CounterOutput";
import CounterControl from "../components/CounterControl";

class Counter extends React.Component {
  state = {
    angka1: 0,
    angka2: 0,
  };

  onChangeInput = (e) => {
    const name = e.target.name;
    this.setState({
      ...this.state,
      [name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <input
          type="number"
          name="angka1"
          placeholder="angka1"
          onChange={this.onChangeInput}
        />
        <input
          type="number"
          name="angka2"
          placeholder="angka2"
          onChange={this.onChangeInput}
        />
        <CounterControl
          label="+"
          clicked={() =>
            this.props.onIncrement(this.state.angka1, this.state.angka2)
          }
        />
        <CounterControl
          label="-"
          clicked={() =>
            this.props.onSubtraction(this.state.angka1, this.state.angka2)
          }
        />
        <CounterControl
          label="*"
          clicked={() =>
            this.props.onMultiplication(this.state.angka1, this.state.angka2)
          }
        />
        <CounterControl
          label="/"
          clicked={() =>
            this.props.onDivision(this.state.angka1, this.state.angka2)
          }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ctr: state.result };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: (angka1, angka2) =>
      dispatch({ type: "INCREMENT", angka1: angka1, angka2: angka2 }),
    onSubtraction: (angka1, angka2) =>
      dispatch({ type: "SUBTRACTION", angka1: angka1, angka2: angka2 }),
    onMultiplication: (angka1, angka2) =>
      dispatch({ type: "MULTIPLICATION", angka1: angka1, angka2: angka2 }),
    onDivision: (angka1, angka2) =>
      dispatch({ type: "DIVISION", angka1: angka1, angka2: angka2 }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
