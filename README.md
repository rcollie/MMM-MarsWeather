A MagicMirror module to display the current weather on Mars.

This was created using The {MAAS} API found at https://github.com/ingenology/mars_weather_api

__

To use, add the following to config/config.js:

    {
        module: "MMM-MarsWeather",
        position: "top_right", // You can change the position as needed
        config: {
            updateInterval: 300000 // Update every 5 minutes
        }
    },
  
