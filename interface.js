$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#temp_up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp_down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp_reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersave_on').click(function() {
    thermostat.switchPowerSaveOn();
    $("#power_save_status").text(" on");
  });

  $('#powersave_off').click(function() {
    thermostat.switchPowerSaveOff();
    $("#power_save_status").text(" off");
  });

  function updateTemperature(){
    $('#temperature').text(thermostat.getTemperature());
    $('#temperature').attr('class', thermostat.energyUseReporter());
  };

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=6b9d318fe42ee8c5f85ba016a32d5492&units=metric', function(data){
    $('#current_temperature').text(data.main.temp);
  })

});
