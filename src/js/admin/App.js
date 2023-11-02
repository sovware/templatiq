import React from "react";

const App = () => {
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date + " " + time;
  return (
    <div>
      {console.log(3434)}
      <h4>{dateTime}</h4>
      <h2>Hello world</h2>
    </div>
  );
};

export default App;