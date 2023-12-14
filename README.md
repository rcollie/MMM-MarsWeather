A MagicMirror module to display the current weather on Mars. 

*** If youre using my previous module, remove it and replace it with this one ***

This was created using The NASA Insight api. Get an API key here: https://api.nasa.gov/

The data isnt always updated so you might have it display somthing like "unavailable" or something clever rather than "No Weather Data Available"

______________

To add it to your display, add the following to config/config.js:

    {
    module: "MMM-MarsWeather",
    position: "top_right", // You can change this to any region that suits your layout
    config: {
        // Optional configuration options
        updateInterval: 600000, // Update interval in milliseconds (10 minutes)
        apiKey: "key here" // Your NASA API key
    }
},
  
_______________
