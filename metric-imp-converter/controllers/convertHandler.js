/*
*
*
*       Complete the handler logic below
*       
*       
*/

  const units = {
  'gal': ['gallons', 'L', v =>  v * 3.785],
  'l': ['liters', 'gal', v => v / 3.785],
  'mi': ['miles', 'km', v => v * 1.609],
  'km': ['kilometers', 'mi', v => v / 1.609],
  'lbs': ['pounds', 'kg', v => v / 2.2045],
  'kg': ['kilograms', 'lbs', v => v * 2.2045],
  'cm': ['centimeters', 'in', v => v * 0.3937],
  'in': ['inches', 'cm', v => v / 0.3937]
};

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;

    const unit = input.split(/[\d.?/?]+/)[1];
    result = input.substring(0, input.indexOf(unit));

    if (/\/.*\//.test(result)) 
      result = 'Invalid Input';
    if (!result) result = 'No Numerical Input';
    console.log('GetNumReturn', result);
    return result === 'Invalid Input'
      || result === 'No Numerical Input'
      ? result
      : eval(result);
  };
  
  this.getUnit = function(input) {
    let result;
    let unit = input.split(/[\d.?/?]+/);
    if (unit.length > 1) {
      result = unit[1].toLowerCase();
    } else {
      result = input.toLowerCase();
    }
    const validUnits = Object.keys(units);
    const output = validUnits.includes(result) 
        ? result 
        : 'Unknown Unit Input';
    
    return output;
  };
  
  this.getReturnUnit = function(initUnit) {

    let result;

    let unit = this.getUnit(initUnit).toLowerCase();

    result = (unit && unit !== 'unknown unit input')
      ? units[unit][1]
      : 'Unknown Unit Input';
    
    return result;
  };

  this.spellOutUnit = function(inputUnit) {

    let result;

    let unit = this.getUnit(inputUnit).toLowerCase();

    result = (unit && unit !== 'unknown unit input')
              ? units[unit][0]
              : 'Unknown Unit Input';
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {

    let result;
    
    const newUnit = this.getUnit('' + initNum + initUnit).toLowerCase();
    
    result = (newUnit && newUnit !== 'unknown unit input')
        ? units[newUnit][2](eval(initNum)) : 'Unknown Unit Input';
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;

    const isInvalidNumber = initNum === 'Invalid Input' 
          || initNum === 'No Numerical Input'
          && returnNum === 'Unknown Unit Input';

    const isInvalidUnit = initUnit === 'Unknown Unit Input' 
          && returnNum === 'Unknown Unit Input'
          && returnUnit === 'Unknown Unit Input';

    const isNoNumber = initNum === 'No Numerical Input';

console.log('ValidNumber?', !isInvalidNumber, 'ValidUnit?', !isInvalidUnit, 'NoNumber?', isNoNumber);

      if (!isInvalidNumber && isInvalidUnit && !isNoNumber) {

        result = 'Invalid Input Unit';

      } else if (isInvalidNumber && !isInvalidUnit && !isNoNumber) {

        result = 'Invalid Number';

      } else if (isInvalidNumber && isInvalidUnit) {

        result = 'Invalid Number And Unit';

      } else if (!isInvalidUnit && isNoNumber) {

        result = 'No Number';

      } else {
      result = initNum + initUnit + ' converts to '
      + returnNum + ' ' + returnUnit;
    }
    
    return result;
  };
  
}

module.exports = ConvertHandler;
