
Thermostat = function(){
  this.MINIMUM_TEMP = 10;
  this.DEFAULT_TEMP = 20;
  this.POWERSAVE_MAX_TEMP = 25;
  this.MAXIMUM_TEMP = 32;
  this.temperature = this.DEFAULT_TEMP;
  this.powerSave = true;
  this.displayColour = ['green','yellow','red']
};

  Thermostat.prototype.getTemperature = function() {
    return this.temperature;
  };

  Thermostat.prototype.up = function() {
    if (this.powerSave && (this.temperature >= this.POWERSAVE_MAX_TEMP)) {
      throw new Error('Error: Maximum temperature reached');
    }
    else if (this.temperature >= this.MAXIMUM_TEMP) {
      throw new Error('Error: Maximum temperature reached');
    }
    else {
      return this.temperature += 1;
    }
  };

  Thermostat.prototype.down = function() {
    if (this.temperature > this.MINIMUM_TEMP) {
      return this.temperature -= 1;
    }
    else {
      throw new Error('Error: Minimum temperature reached');
    }
  };

  Thermostat.prototype.switchPowerSaveOn = function() {
    return this.powerSave = true;
  };

  Thermostat.prototype.powerSaveStatus = function() {
    return this.powerSave;
  };

  Thermostat.prototype.switchPowerSaveOff = function() {
    return this.powerSave = false;
  };

  Thermostat.prototype.reset = function () {
    return this.temperature = this.DEFAULT_TEMP
  };

  Thermostat.prototype.displayColourReporter = function() {
    if (this.temperature <18) {
      return this.displayColour[0]
    }
    else if (this.temperature < 25) {
      return this.displayColour[1]
    }
    else {
      return this.displayColour[2];
    }
  };
