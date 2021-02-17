import { InputLabel, Switch, Typography } from "@material-ui/core";
import { useState } from "react";
import EventFormBootstrap from "./components/atoms/EventFormBootstrap";
import EventFormMUI from "./components/atoms/EventFormMUI";

const App = () => {
  const [toggle, setToggle] = useState(true);

  const handleChange = (event) => {
    setToggle(event.target.checked);
  };
  return (
    <div className="App">
      <span>Using Material-UI</span>
      <Switch
        checked={toggle}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      {toggle ? <EventFormMUI /> : <EventFormBootstrap />}
    </div>
  );
};

export default App;
