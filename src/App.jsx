import { AiOutlineBars } from "react-icons/ai";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { RxLapTimer } from "react-icons/rx";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { BiAlignLeft } from "react-icons/bi";

function App() {
  return (
    <div className="homepage">

 <CountdownCircleTimer
    isPlaying
    duration={7}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
  <BiAlignLeft />

      <h1>Online timer<AiOutlineBars /></h1>
      
      
      <p>SEARCH BAR</p>
      <input></input>
      <button>chronometer</button>
      <button> timer</button>
      <div></div>
      
    </div>



  );
}

export default App;

