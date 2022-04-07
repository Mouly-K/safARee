import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {Text} from 'react-native';

interface Props {
  time?: number;
}

const Countdown = forwardRef((props: Props, ref) => {
  const [time, setTime] = useState(props.time || 60);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval: any;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (time === 0) {
      setIsRunning(false);
    }
  }, [time]);

  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');

  const reset = () => {
    setTime(120);
    setIsRunning(true);
  };

  const isFinished = () => !isRunning;

  useImperativeHandle(ref, () => ({
    reset,
    isFinished,
  }));

  return (
    <Text>
      {minutes}:{seconds}
    </Text>
  );
});

export default Countdown;
