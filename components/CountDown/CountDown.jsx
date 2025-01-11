"use client";
import React, { useState, useEffect } from "react";
import style from "@/styles/index_conut_down.module.scss"
const CountdownTimer = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("06-10-2025");
  const [countdownStarted, setCountdownStarted] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    if (countdownStarted && eventDate) {
      const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const eventTime = new Date(eventDate).getTime();
        let remainingTime = eventTime - currentTime;

        if (remainingTime <= 0) {
          remainingTime = 0;
          clearInterval(countdownInterval);
          alert("Countdown complete!");
        }

        setTimeRemaining(remainingTime);
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [countdownStarted, eventDate, timeRemaining]);

  useEffect(() => {
    if (countdownStarted) {
      document.title = eventName;
    }
  }, [countdownStarted, eventName]);

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return (
      <div className={`${style.countdown_display} flex gap-4`}>
        <div
          className={`${style.countdown_value}  flex p-4 rounded-md flex-col gap-2 text-amber-50 font-bold justify-center 
          
          `}
        >
          {days.toString().padStart(2, "0")}

          <span className={"font-bold block"}>روز</span>
        </div>
        <div
          className={`${style.countdown_value}  flex p-4 rounded-md flex-col gap-2 text-amber-50 font-bold justify-center`}
        >
          {hours.toString().padStart(2, "0")} <span> ساعت</span>
        </div>
        <div
          className={`${style.countdown_value}  flex p-4 rounded-md flex-col gap-2 text-amber-50 font-bold justify-center`}
        >
          {minutes.toString().padStart(2, "0")} <span>دقیقه</span>
        </div>
        <div
          className={`${style.countdown_value}  flex p-4 rounded-md flex-col gap-2 text-amber-50 font-bold justify-center`}
        >
          {seconds.toString().padStart(2, "0")} <span>ثانیه</span>
        </div>
      </div>
    );
  };

  return (
    <div className="countdown-timer-container">{formatTime(timeRemaining)}</div>
  );
};

export default CountdownTimer;
