import React from "react";
import "./DataStyle.css";
class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
<<<<<<< HEAD
        
=======
   
>>>>>>> 6fd24fae0d113ea0383c30ff4e8a58c7da7161a3
        <th>
          <td>ID</td>
          <td>Title</td>
          <td>Body</td>
        </th>
        {items.map((item) => (
          <table key={item.id}>
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          </table>

          // <ol key={item.id}>
          //   ID: {item.id},<br />
          //   Title: {item.title},<br />
          //   Body: {item.body}, <br />
          // </ol>
        ))}
      </div>
    );
  }
}

export default App;
