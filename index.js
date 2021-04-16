// Your code here
function saturdayFun(str = "roller-skate") {
  return `This Saturday, I want to ${str}!`
}

const mondayWork = function (str = "go to the office") {
  return `This Monday, I will ${str}.`
}

const wrapAdjective = function(flair = "*") {
  return function(arg = "special") {
    return `You are ${flair}${arg}${flair}!`
  }
}

const Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
}

function actionApplyer(num, fns) {
  if(fns.length === 0) {
    return num
  } else {
    let result = num
    fns.forEach(fn => {
      result = fn(result)
    });
    return result
  }
}
