describe('Thermostat', function(){

    var thermostat;

    beforeEach (function(){
      thermostat = new Thermostat();
    });

  it('initializes at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases the temp by 1 when you press up',function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('decreases the temp by 1 when you press down', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('Cannot drop below 10',function(){
    var times =10;
    for(var i=0; i < times; i++) { thermostat.down(); };
    expect(function(){ thermostat.down(); }).toThrow( Error('Error: Minimum temperature reached'));
  });

  it('By default power saving mode is ON',function(){
    expect(thermostat.powerSave).toBe(true);
  });

  it('Power saving mode can be turned on',function(){
    thermostat.switchPowerSaveOn();
    expect(thermostat.powerSave).toBe(true);
  });

  it('Power saving mode can be turned off',function(){
    thermostat.switchPowerSaveOff();
    expect(thermostat.powerSave).toBe(false);
  });

  it('If power saving mode is on, max temp is 25',function(){
    for(var i=0; i < 5; i++) { thermostat.up(); };
      // expect(thermostat.temperature).toEqual(25)
    expect(function(){ thermostat.up(); }).toThrow( Error('Error: Maximum temperature reached'))
  });

  it('If power saving mode is off, the max temp is 32', function(){
    thermostat.switchPowerSaveOff();
    for(var i=0; i < 12; i++){ thermostat.up(); };
    expect(function(){ thermostat.up(); }).toThrow( Error('Error: Maximum temperature reached'))
  });

  it('Has a reset button', function(){
    thermostat.up();
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20)
  });

  // The thermostat should colour the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red
  it('Has a colour display: green if below 18', function(){
    for(var i=0; i < 3; i++){ thermostat.down(); };
    expect(thermostat.displayColourReporter()).toEqual('green')
  });

  it('Has a colour display: yellow if below 25', function(){
    for(var i=0; i <4; i++) { thermostat.up(); };
    expect(thermostat.displayColourReporter()).toEqual('yellow')
  })

  it('Has a colour display: red if above 25', function(){
    thermostat.switchPowerSaveOff();
    var times = 10
    for(var i = 0; i<times; i++){ thermostat.up(); };
    expect(thermostat.displayColourReporter()).toEqual('red')
  })




});
