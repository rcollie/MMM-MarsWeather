Module.register("MMM-MarsWeather", {
    defaults: {
        updateInterval: 600000, // 10 minutes
        apiKey: 'your_api_key', // Your NASA API key
    },

    start: function() {
        Log.info("Starting module: " + this.name);
        this.marsWeather = null;
        this.getData();
        this.scheduleUpdate();
    },

    getData: function() {
        const url = `https://api.nasa.gov/insight_weather/?api_key=${this.config.apiKey}&feedtype=json&ver=1.0`;
        axios.get(url)
            .then(response => {
                this.marsWeather = response.data;
                this.updateDom();
            })
            .catch(error => console.error("Error fetching Mars weather data:", error));
    },

    getDom: function() {
        var wrapper = document.createElement("div");

        if (this.marsWeather) {
            var title = document.createElement("h2");
            title.innerHTML = "Mars Weather";
            wrapper.appendChild(title);

            var content = document.createElement("p");

            if (this.marsWeather.sol_keys && this.marsWeather.sol_keys.length > 0) {
                var latestSol = this.marsWeather.sol_keys[this.marsWeather.sol_keys.length - 1];
                var weatherData = this.marsWeather[latestSol];
                content.innerHTML = "Sol: " + latestSol + "<br>" +
                                    "Average Temperature: " + weatherData.AT.av + " °C<br>" +
                                    "Wind Speed: " + weatherData.HWS.av + " m/s<br>" +
                                    "Pressure: " + weatherData.PRE.av + " Pa";
            } else {
                content.innerHTML = "No weather data available";
            }

            wrapper.appendChild(content);
        } else {
            wrapper.innerHTML = "Loading Mars Weather Data...";
        }

        return wrapper;
    },

    scheduleUpdate: function() {
        setInterval(() => {
            this.getData();
        }, this.config.updateInterval);
    },

    getScripts: function() {
        return ["axios.min.js"];
    },
});
