"use client";

import React, { useState, useEffect } from "react";

interface timeProps {
    countDownDate: number;
}

export default function TimerComponent({ countDownDate }: timeProps) {
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

    useEffect(() => {
        var updateTime = setInterval(() => {
            var now = new Date().getTime();

            var difference = countDownDate - now;

            var newHours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            var newMinutes = Math.floor(
                (difference % (1000 * 60 * 60)) / (1000 * 60)
            );
            var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

            setHours(newHours);
            setMinutes(newMinutes);
            setSeconds(newSeconds);

            if (difference <= 0) {
                clearInterval(updateTime);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
            }
        }, 300);

        return () => {
            clearInterval(updateTime);
        };
    }, []);

    return (
        <>
            <div>
                Time Remaining: {hours}:{minutes}:{seconds}
            </div>
        </>
    );
}
