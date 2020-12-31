/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {

  const units = {
  'gal': ['gallons', 'l', v =>  v * 3.785],
  'l': ['liters', 'gal', v => v / 3.785],
  'mi': ['miles', 'km', v => v * 1.609],
  'km': ['kilometers', 'mi', v => v / 1.609],
  'lbs': ['pounds', 'kg', v => v / 2.2045],
  'kg': ['kilograms', 'lbs', v => v * 2.2045],
  'cm': ['centimeters', 'in', v => v * 0.3937],
  'in': ['inches', 'cm', v => v / 0.3937]
};
  
  this.getNum = function(input) {
    let result;

    const unit = input.split(/[\d.?/?]+/)[1];
    result = input.substring(0, input.indexOf(unit));

    if (!result) result = 1;

    return eval(result);
  };
  
  this.getUnit = function(input) {

    let result = input.split(/[\d.?/?]+/)[1];
    
    const validUnits = Object.keys(units);
    
    return validUnits.includes(result.toLowerCase()) 
        ? result 
        : 'Invalid Unit';
  };
  
  this.getReturnUnit = function(initUnit) {

    let result;

    let unit = this.getUnit(initUnit).toLowerCase();

    result = (unit && unit !== 'invalid unit')
      ? units[unit][1] 
      : 'Invalid Unit';
    
    return result;
  };

  this.spellOutUnit = function(inputUnit) {

    let result;

    let unit = this.getUnit(inputUnit).toLowerCase();

    result = (unit && unit !== 'invalid unit')
              ? units[unit][0]
              : 'Invalid Unit';
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {

    let result;
    
    const newUnit = this.getUnit('' + initNum + initUnit).toLowerCase();
    
    result = (newUnit && newUnit !== 'invalid unit')
        ? units[newUnit][2](eval(initNum)) : 'Invalid Unit';
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    result = '' + initNum + ' ' + units[initUnit][0] + ' converts to '
      + returnNum + ' ' + units[returnUnit][0];
    return result;
  };
  
}

module.exports = ConvertHandler;
