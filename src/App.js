import React from "react";
import axios from "axios";

class App extends React.Component {
  componentDidMount = async () => {
    const data1 = "세종대왕님";
    const data2 = "하이!";

    const inputData = {
      data1: data1,
      data2: data2,
    };

    await axios.post(
      "/api/test",
      {
        params: { inputData },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  render() {
    return <div>Hello React</div>;
  }
}

export default App;
