Module.register("MMM-MarsWeather", {
    defaults: {
        updateInterval: 600000, // 10 minutes
    },

    start: function() {
        this.weatherData = null;
        this.getMarsWeather();
        this.scheduleUpdate();
    },

    getDom: function() {
        var wrapper = document.createElement("div");

        if (!this.weatherData) {
            wrapper.innerHTML = "Loading Mars weather...";
            return wrapper;
        }

        var weatherInfo = document.createElement("div");
        weatherInfo.innerHTML = `Sol: ${this.weatherData.report.sol}<br>
                                 Date: ${this.weatherData.report.terrestrial_date}<br>
                                 Max Temp: ${this.weatherData.report.max_temp}°C<br>
                                 Min Temp: ${this.weatherData.report.min_temp}°C`;
        wrapper.appendChild(weatherInfo);

        return wrapper;
    },

    getMarsWeather: function() {
        this.sendSocketNotification("GET_MARS_WEATHER", {});
    },

    scheduleUpdate: function() {
        setInterval(() => {
            this.getMarsWeather();
        }, this.config.updateInterval);
    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === "MARS_WEATHER_RESULT") {
            this.weatherData = payload;
            this.updateDom();
        }
    },
});
