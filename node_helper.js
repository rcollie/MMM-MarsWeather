var NodeHelper = require("node_helper");
var request = require("request");

module.exports = NodeHelper.create({
    start: function() {
        console.log("MMM-MarsWeather helper started...");
    },

    getMarsWeather: function() {
        var self = this;
        var apiUrl = "http://marsweather.ingenology.com/v1/latest/"; // Mars Weather API URL

        request({ url: apiUrl, method: "GET" }, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                var result = JSON.parse(body);
                self.sendSocketNotification("MARS_WEATHER_RESULT", result);
            }
        });
    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === "GET_MARS_WEATHER") {
            this.getMarsWeather();
        }
    }
});
