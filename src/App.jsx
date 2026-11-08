import ClockHeading from "./components/clockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/currentTime";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center  className="clock">
    <div>
      <ClockHeading />
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </div>
    </center>
  );
}

export default App;
