import React, { useEffect, useState } from 'react';
import { FaFacebookSquare, FaInstagram, FaPinterest } from 'react-icons/fa';
import FlipCard from './FlipCard';

function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const countdownDate = new Date(`December 30 ${currentYear} 00:00:00`);

    const updateTimer = () => {
      const currentDate = new Date();
      const diff = countdownDate - currentDate;

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='countdown'>
      <div className="countdowncol">
        <div className="countdownheader">
          <h3>WE'RE LAUNCHING SOON</h3>
        </div>

        <div className="countdownmain">
          <div className="days">
            <FlipCard initialValue={days} title="Days" />
          </div>
          <div className="hours">
            <FlipCard initialValue={hours} title="Hours" />
          </div>
          <div className="minutes">
            <FlipCard initialValue={minutes} title="Minutes" />
          </div>
          <div className="seconds">
            <FlipCard initialValue={seconds} title="Seconds" />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footercol">
          <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
          <a href="http://www.pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
          <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
}

export default Countdown;

