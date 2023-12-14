A MagicMirror module to display the current weather on Mars.

This was created using The {MAAS} API found at https://github.com/ingenology/mars_weather_api

To use their api you'll need to download zip from the repository and set it up locally. It's using an out of date version of django (2.5 IIRC). I re-created it in current django. 

______________

To add it to your display, add the following to config/config.js:

    {
        module: "MMM-MarsWeather",
        position: "top_right", // You can change the position as needed
        config: {
            updateInterval: 300000 // Update every 5 minutes
        }
    },
  
_______________
