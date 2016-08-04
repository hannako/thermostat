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
    $("#powersave_off").removeClass("pushed");
    $("#powersave_on").toggleClass("pushed");
    $("body").removeClass("palms")
    $("body").addClass("clouds");
  });

  $('#powersave_off').click(function() {
    thermostat.switchPowerSaveOff();
    $("#powersave_on").removeClass("pushed")
    $("#powersave_off").toggleClass("pushed");
    $("body").removeClass("clouds")
    $("body").addClass("palms");
  });

  function updateTemperature(){
    $('#temperature').text(thermostat.getTemperature());
    $('#temperature').attr('class',thermostat.energyUseReporter());
  };

  function displayWeather(city) {
     var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
     var token = ',&appid=6b9d318fe42ee8c5f85ba016a32d5492';
     var units = '&units=metric';
     $.get(url + token + units, function(data) {
       $('#current_temperature').text(data.main.temp);
     });
  };

  displayWeather('London');

  $('#select-city').submit(function(event){
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });
});
