import { AiOutlineBars } from "react-icons/ai";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { RxLapTimer } from "react-icons/rx";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { BiAlignLeft } from "react-icons/bi";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    // <div className="homepage">

    //   <BiAlignLeft />

    //   <Tabs defaultActiveKey={"home"} className="m-3" >
    //     <Tab eventKey={"home"} title="home">
    //       <h1>Home Page</h1>
    //       <h1>
    //         mi project sobre el reloj en el 2025 el cual muestra la importancia del tiempo y cuanto el tiempo vale mucho

    //         <AiOutlineBars />
    //       </h1>

    //       <p>SEARCH BAR</p>
    //       <input></input>
    //       <button>chronometer</button>
    //       <button> timer</button>
    //       <div></div>
    //     </Tab>
    //     <Tab eventKey={"other"} title="other">
    //       Otro Tab
    //       </Tab>
    //   </Tabs>
    // </div>
    <Container fluid className="homepage">
      <Row>
        <Col>
          <CountdownCircleTimer
            isPlaying
            duration={7}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[7, 5, 2, 0]}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
          <img src="https://us.123rf.com/450wm/zinetron/zinetron2402/zinetron240217682/226145996-nonstop-service-concept-businessman-holding-the-clock-nonstop-and-full-time-for-worldwide-nonstop.jpg?ver=6" />
        </Col>
        <Col>
          {" "}
          
          <input></input>
              <button>chronometer</button>
              <button> timer</button>
          <Tabs defaultActiveKey={"home"} className="m-3">
            <Tab eventKey={"home"} title="home">
            

              <h1>Home Page</h1>
              <h1>
                mi project sobre el reloj en el 2025 el cual muestra la
                importancia del tiempo y cuanto el tiempo vale mas que el oro
                <AiOutlineBars />
                
              </h1>
              
             
              <div></div>
            </Tab>
            <Tab eventKey={"other"} title="other"> 
            
              Otro Tab
            </Tab>
            <Tab eventKey="Result" title="Result">
            
        Tab content for Contact
      </Tab>
      
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
