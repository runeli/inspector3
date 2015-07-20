import cooler from '../measurementPoints/cooler.js';
import supportWheels from '../measurementPoints/supportWheels.js';
import frame from '../measurementPoints/frame.js';

export default {
  "title":"Step feeder / Linear loader",
  "options": {
    "collapsed":true
  },
  "type": "object",
  "properties":{
    "cooler": cooler,
    "supportWheels":supportWheels,
    "frame": frame
  }
}
