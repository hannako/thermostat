$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temp_up').click(function() {
    thermostat.up();
    $('#temperature').text(thermostat.getTemperature());
  });
  $('#temp_down').click(function() {
    thermostat.down();
    $('#temperature').text(thermostat.getTemperature());
  });
  $('#temp_reset').click(function() {
    thermostat.reset();
    $('#temperature').text(thermostat.getTemperature());
  });
  $('#powersave_on').click(function() {
    thermostat.switchPowerSaveOn();
    $("#power_save_status").text(" on");
  });
  $('#powersave_off').click(function() {
    thermostat.switchPowerSaveOff();
    $("#power_save_status").text(" off");
  });
});
