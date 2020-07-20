import React, { memo } from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memoData: null,
    };
  }

  componentDidMount = async () => {
    const data1 = "세종대왕님";
    const data2 = "하이!";

    const inputData = {
      data1: data1,
      data2: data2,
    };

    await axios
      .post(
        "/api/test",
        {
          params: { inputData },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) =>
        this.setState({
          memoData: response.data,
        })
      );
  };

  render() {
    const { memoData } = this.state;

    return (
      <div>
        {memoData === null
          ? "Loading..."
          : memoData.map((memo) => {
              return (
                <div key={memo.refKey}>
                  <h1>{memo.title}</h1>
                  <h3>{memo.content}</h3>
                  <h4>{memo.regDate}</h4>
                </div>
              );
            })}
      </div>
    );
  }
}

export default App;
