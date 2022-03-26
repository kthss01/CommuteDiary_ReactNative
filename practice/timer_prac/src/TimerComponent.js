import React from 'react';
import {useEffect, useState} from 'react';
import {Text} from 'react-native';

// setTimeout
function timerExample1() {
  setTimeout(() => {
    console.log('2 sec.');
  }, 2000);

  setTimeout(() => {
    console.log('1 sec.');
  }, 1000);

  console.log('no timer');

  return <Text>Hello World</Text>;
}

// setTimeout with useEffect
function timerExample2() {
  setTimeout(() => {
    console.log('2 sec.');
  }, 2000);

  useEffect(() => {
    setTimeout(() => {
      console.log('1 sec.');
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  }, []);

  return <Text>Hello World</Text>;
}

// setTimeout vs clearTimeout
function timerExample3() {
  useEffect(() => {
    setTimeout(() => {
      console.log('2 sec.');
    }, 2000);

    var oneSec = setTimeout(() => {
      console.log('1 sec.');
    }, 1000);
    clearTimeout(oneSec);
  }, []);

  return <Text>Hello World</Text>;
}

// setInterval and clearInterval
function timerExample4() {
  useEffect(() => {
    setTimeout(() => {
      console.log('2 sec.');
    }, 2000);

    setInterval(() => {
      console.log('1 sec.');
    }, 1000);
  }, []);

  return <Text>Hello World</Text>;
}

// clearInterval
function timerExample5() {
  useEffect(() => {
    var counter = 0;

    var oneSecInterval = setInterval(() => {
      console.log('1 sec.');
      counter++;

      if (counter == 5) {
        clearInterval(oneSecInterval);
      }
    }, 1000);
  }, []);

  return <Text>Hello World</Text>;
}

// setImmediate and claerImmediate
// 즉시 하는거
function timerExample6() {
  useEffect(() => {
    console.log('1');
    setImmediate(() => {
      console.log('Immediate.');
    });
    console.log('2');
  }, []);

  return <Text>Hello World</Text>;
}

function timerExample7() {
  useEffect(() => {
    console.log('1');
    var immediate = setImmediate(() => {
      console.log('Immediate.');
    });
    clearImmediate(immediate);
    console.log('2');
  }, []);

  return <Text>Hello World</Text>;
}

// requestAnimationFrame() and clearAnimationFrame()
function timerExample8() {
  const [number, setNumber] = useState(0);

  var increment = function () {
    setNumber(number + 1);
    requestAnimationFrame(increment);
  };

  requestAnimationFrame(increment);

  return <Text>{number}</Text>;
}

function timerExample9() {
  const [number, setNumber] = useState(0);

  var increment = function () {
    setNumber(number + 1);
    var animationUpdate = requestAnimationFrame(increment);
    if (number >= 500) {
      clearAnimationFrame(animationUpdate);
    }
  };

  requestAnimationFrame(increment);

  return <Text>{number}</Text>;
}

// setTimeout clearTimeout
// export {timerExample1 as TimerComponent};
// export {timerExample2 as TimerComponent};
// export {timerExample3 as TimerComponent};

// setInterval clearInterval
// export {timerExample4 as TimerComponent};
export {timerExample5 as TimerComponent};

// setImmediate clearImmediate
// export {timerExample6 as TimerComponent};
// export {timerExample7 as TimerComponent};

// requestAnimationFrame clearAnimationFrame
// export {timerExample8 as TimerComponent};
// export {timerExample9 as TimerComponent};
