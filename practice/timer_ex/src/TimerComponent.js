import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import useInterval from '../useInterval';

// export default function TimerComponent() {
//   const [number, setNumber] = useState(0);

//   useEffect(() => {
//     var interval = setInterval(() => {
//       console.log(number);
//       setNumber(parseInt(number) + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [number]);

//   return (
//     <View>
//       <Text>{number}</Text>
//     </View>
//   );
// }

export default function TimerComponent() {
  const [number, setNumber] = useState(0);

  useInterval(() => {
    console.log(number);
    setNumber(prevNumber => prevNumber + 1);
  }, 1000);

  return (
    <View>
      <Text>{number}</Text>
    </View>
  );
}
