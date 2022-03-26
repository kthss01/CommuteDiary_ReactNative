import React, {useEffect, useState, useRef} from 'react';
import {View, Text} from 'react-native';
import useInterval from './useInterval';

export default function TimerComponent() {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [ms, setMs] = useState(0);
  const time = useRef(0);

  useInterval(() => {
    setMs(time.current % 100);
    setSec(parseInt(time.current / 1000) % 60);
    setMin(parseInt(time.current / (1000 * 60)) % 60);
    setHour(parseInt(time.current / (1000 * 60 * 60)) % 24);
    time.current += 1;
  }, 1);

  return (
    <View>
      <Text>
        {hour}:{min}:{sec}:{ms}
      </Text>
    </View>
  );
}
