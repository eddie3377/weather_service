/*eslint-env browser*/
/*eslint "no-console": "off"*/
/*eslint "no-undef": "off"*/
/*global $*/

$(document).ready(function () {

    $('#submitWeather').click(function () {
        var city = $('#city').val();
        if (city != '') {
            $.getJSON({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=5186b868a35391dedfa1c42832fafe22",
                type: "GET",
                dataType: "jsonp",
                success: function (data) {
                    var widget = show(data);
                    $('#show').html(widget);
                    $('#city').val('');

                }
            });
        } else {
            $('#error').html('Fill-in the field');
        }
    });
});

function show(data) {
    return "<h2>Current weather for " + data.name + ", " + data.sys.country + "<h2>" +
        "<h3><strong>Weather</strong>: " + data.weather[0].main + "<h3>" +
        "<h3><strong>Now</strong>: " + data.main.temp + "&deg;C<h3>" +
        "<h3><strong>Max. Temperature</strong>: " + data.main.temp_max + "&deg;C<h3>" +
        "<h3><strong>Min. Temperature</strong>: " + data.main.temp_min + "&deg;C<h3>";
}
