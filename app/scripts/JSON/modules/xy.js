import rotationDevice from '../measurementPoints/rotationDevice.js';
import lasers from '../measurementPoints/lasers.js';
import guideClearances from '../measurementPoints/guideClearances.js';
import transferArms from '../measurementPoints/transferArms.js';
import lubrication from '../measurementPoints/lubrication.js';
import cylinders from '../measurementPoints/cylinders.js';
import hosespipes from '../measurementPoints/hosespipes.js';


export default {
  "type": "testEditor",
  "title": "XY",
  "options": {
    "collapsed":true
  },
  "properties": {
    "noDev":{
      "type":"array",
      "options": {
        "collapsed":true
      },
      "format":"table",
      "title":"Without deviation pieces",
      "items": {
        "type": "object",
        "properties": {
          "x_plus": {
            "title": "X+",
            "type": "string"
          },
          "x_minus": {
            "title": "X-",
            "type": "string"
          },
          "y_plus": {
            "title": "Y+",
            "type": "string"
          },
          "y_minus": {
            "title": "Y-",
            "type": "string"
          }
        }
      },
      "default": [
        {"x_plus": "", "x_minus": "","y_plus": "","y_minus": ""}

      ]
    },
    "withDev":{
      "type":"array",
      "options": {
        "collapsed":true
      },
      "format":"table",
      "title":"With deviation pieces",
      "items": {
        "type": "object",
        "properties": {
          "x_plus": {
            "title": "X+",
            "type": "string"
          },
          "x_minus": {
            "title": "X-",
            "type": "string"
          },
          "y_plus": {
            "title": "Y+",
            "type": "string"
          },
          "y_minus": {
            "title": "Y-",
            "type": "string"
          }
        }
      },
      "default": [
        {"x_plus": "", "x_minus": "","y_plus": "","y_minus": ""}

      ]
    },
    "cylinderClearances":{
      "type":"array",
      "options": {
        "collapsed":true
      },
      "format":"table",
      "title":"Cylinder clearances",
      "items": {
        "type": "object",
        "properties": {
          "1": {
            "title": "1.",
            "type": "string"
          },
          "2": {
            "title": "2.",
            "type": "string"
          },
          "3": {
            "title": "3.",
            "type": "string"
          },
          "4": {
            "title": "4.",
            "type": "string"
          }
        }
      },
      "default": [
        {"1": "", "2": "","3": "","4": ""}

      ]
    },
    "guideClearances": guideClearances,
    "rotationDevice": rotationDevice,
    "lasers": lasers,
    "transferArms": transferArms,
    "lubrication": lubrication,
    "cylinders": cylinders,
    "hosespipes": hosespipes
  }
}
