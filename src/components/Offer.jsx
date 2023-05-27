import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Offer = ({data}) => {
    console.log(data);

    const [timerDays,setTimerDays] = useState();
    const [timerHours,setTimerHours] = useState();
    const [timerMinu,setTimerMinu] =useState();
    const [timerSeconds,setTimerSeconds] = useState();

    let interval;
    const itemImage = data[1]?.image;
    const itemTitle = data[1]?.title;
    const itemPrice = data[1]?.price;
    const itemId = data[1]?.id;

    const startTimer = () => {
        const countDownDate = new Date("June 1,2023").getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance/(24*60*60*1000));
            const Hours = Math.floor((distance%(24*60*60*1000))/(1000*60*60));
            const Minutes = Math.floor((distance%(60*60*1000))/(1000*60));
            const Seconds = Math.floor((distance%(60*1000))/1000)

            if(distance < 0){
                clearInterval(interval.current);
            }
            else{
                setTimerDays(days)
                setTimerHours(Hours)
                setTimerMinu(Minutes)
                setTimerSeconds(Seconds)
            }
        });
    }

    useEffect(() => {
        startTimer()
    },[])

  return (
    <div className='clock-timer'>
      <div className="clock-timer-container">
        <div className="clock-item">
            <h1 className='heading'>Shop'n</h1>
            <h1>Limited exclusive offer..!!</h1>
            <p className='des'>checkout trending quality item for you</p>
        <div className="clock">
            <section>
                <p>{timerDays}</p>
                <small>Days</small>
            </section>
            <span>:</span>
            <section>
                <p>{timerHours}</p>
                <small>Hours</small>
            </section>
            <span>:</span>
            <section>
                <p>{timerMinu}</p>
                <small>Minutes</small>
            </section>
            <span>:</span>
            <section>
                <p>{timerSeconds}</p>
                <small>Seconds</small>
            </section>
        </div>
        </div>
        <div className="clock-items">
            <img src={itemImage} alt="" />
            <div className="clock-items-text">
                <h3>{itemTitle}</h3>
                <p>${itemPrice}</p>
                <Link to={`${itemId}`}>Buy Now</Link>
            </div>
        </div>
      </div>
    </div>
  )
}


export default Offer
