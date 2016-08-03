
Thermostat = function(){
  this.temperature = 20;
  this.powerSave = true;
};

  Thermostat.prototype.temperature = function() {
    return this.temperature;
  };

  Thermostat.prototype.up = function() {
    if (this.powerSave && (this.temperature >= 25)) {
      throw new Error('Powersave On: Can not go above 25 degrees');
    }
    else if (this.temperature >= 32) {
      throw new Error('Powersave Off: Can not go above 32 degrees');
    }
    else {
      return this.temperature += 1;
    }
  };

  Thermostat.prototype.down = function() {
    if (this.temperature > 10) {
      return this.temperature -= 1;
    } else {
      throw new Error("It's too cold you CRAZY!!");
    }
  };

  Thermostat.prototype.powerSavingOn = function() {
    return this.powerSave = true;
  };

  Thermostat.prototype.powerSaveStatus = function() {
    return this.powerSave;
  };

  Thermostat.prototype.powerSavingOff = function() {
    return this.powerSave = false;
  };

  Thermostat.prototype.reset = function () {
    return this.temperature = 20
  };
