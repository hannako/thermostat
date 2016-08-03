
Thermostat = function(){
  this.MINIMUM_TEMPERATURE = 10;
  this.DEFAULT_TEMPERATURE = 20;
  this.POWERSAVE_TEMPERATURE_LIMIT = 25;
  this.NONPS_TEMPERATURE_LIMIT = 32;
  this.MEDIUM_TEMPERATURE_LIMIT = 18;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSave = true;
  this.energyConsumption = ['low','medium','high']
};

  Thermostat.prototype.getTemperature = function() {
    return this.temperature;
  };

  Thermostat.prototype.up = function() {
    if (this.isTempMaximum()) {
      throw Error('Error: Maximum temperature reached');
    }
      return this.temperature += 1;
  };

  Thermostat.prototype.isTempMaximum = function () {
    if (this.powerSaveStatus() === false) {
      return this.temperature === this.NONPS_TEMPERATURE_LIMIT
    }
      return this.temperature === this.POWERSAVE_TEMPERATURE_LIMIT
  };

  Thermostat.prototype.down = function() {
    if (this.temperature > this.MINIMUM_TEMPERATURE) {
      return this.temperature -= 1;
    }
      throw new Error('Error: Minimum temperature reached');
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
    return this.temperature = this.DEFAULT_TEMPERATURE
  };

  Thermostat.prototype.displayColourReporter = function() {
    if (this.temperature < this.MEDIUM_TEMPERATURE_LIMIT) {
      return this.energyConsumption[0]
    }
    else if (this.temperature < this.POWERSAVE_TEMPERATURE_LIMIT) {
      return this.energyConsumption[1]
    }
    else {
      return this.energyConsumption[2]
    }
  };
