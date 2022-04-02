import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Button} from 'react-native';
import useInterval from './useInterval';

const TIME_DELAY = 1;
const DELAY_DIFF = 1000 / TIME_DELAY;

export default function TimerComponent() {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [ms, setMs] = useState(0);
  const [running, setRunning] = useState(false);
  const time = useRef(0);

  useInterval(
    () => {
      setMs(time.current % DELAY_DIFF);
      setSec(parseInt(time.current / DELAY_DIFF) % 60);
      setMin(parseInt(time.current / (DELAY_DIFF * 60)) % 60);
      setHour(parseInt(time.current / (DELAY_DIFF * 60 * 60)) % 24);
      time.current += 1;
    },
    running ? TIME_DELAY : null,
  );

  return (
    <View>
      <Text>
        {hour}:{min}:{sec}:{ms}
      </Text>
      <Button
        title="시작"
        onPress={() => {
          setRunning(true);
        }}
      />
      <Button
        title="종료"
        onPress={() => {
          setRunning(false);
        }}
      />
    </View>
  );
}
