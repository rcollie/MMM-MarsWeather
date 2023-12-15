A MagicMirror module to display the current weather on Mars. 

*** If youre using my previous module, remove it and replace it with this one ***

This was created using The NASA Insight api. Get an API key here: https://api.nasa.gov/

The data is rarely updated because... you know (https://x.com/NASAInSight/status/1604955574659035136?s=20). so you might have it display somthing like "Mars is there, waiting to be reached. - Buzz Aldrin" or something clever rather than "No Weather Data Available". Stil that over an image of Mars maybe?

Newayz. If you want this, here it is.

______________

To add it to your display, add the following to config/config.js:

    {
    module: "MMM-MarsWeather",
    position: "top_right", // You can change this to any region that suits your layout
    config: {
        // Optional configuration options
        updateInterval: 600000, // Update interval in milliseconds (10 minutes)
        apiKey: "your_api_here" // Your NASA API key
    }
},
  
_______________
