import { useState, useEffect } from "react";


export default function Watch({ cityName, timezone, onDelete }) {
  const [state, setState] = useState({
    secondArrowDeg: 0,
    minuteArrowDeg: 0,
    hourArrowDeg: 0,
  });

  useEffect(() => {
    let timerId = setInterval(currentTime, 1000);

    return () => {
      clearInterval(timerId);
    }
  }, []);

  let currentTime = () => {
    let date = new Date();

    let UTCHours = date.getUTCHours();
    let currentHours;
    
    if (timezone == 0) {
      currentHours = UTCHours;
    } else if (+timezone < 0) {
      currentHours = UTCHours - +timezone.replace('-', '');
    } else {
      currentHours = UTCHours + +timezone.replace('+', '');
    }

    console.log(timezone < 0);


    setState({
      secondArrowDeg: date.getSeconds() * 6 + 180,
      minuteArrowDeg: date.getMinutes() * 6 + 180,
      hourArrowDeg: currentHours * 30 + 180
    });
  };

  return (
    <div className="watch-item">
      <p>{cityName}</p>
      <div className="watch">
        <div
          className="secondArrow"
          style={{ transform: "rotate(" + state.secondArrowDeg + "deg)" }}
        ></div>
        <div
          className="minuteArrow"
          style={{ transform: "rotate(" + state.minuteArrowDeg + "deg)" }}
        ></div>
        <div
          className="hourArrow"
          style={{ transform: "rotate(" + state.hourArrowDeg + "deg)" }}
        ></div>
      </div>
      <button className="watch-item__delete-btn" onClick={onDelete}>✖</button>
    </div>
  );
}
