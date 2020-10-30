const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚`, `Assertion Passed: `, actual, ` === `, expected, `   Whew, that was close...`);
  } else {
    console.log(`🚫🚫🚫`, `Assertion Failed: `, actual, ` !== `, expected, ` STOP. DO NOT PASS GO. DO NOT COLLECT $200!`);
  }
};

// Just a Test!
assertEqual(1, "1");
assertEqual('Gabriel', 'gabriel');
assertEqual('');

module.exports = { assertEqual }