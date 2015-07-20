export default {
  "type": "array",
  "title": "Rotation device",
  "format": "checkbox",
  "uniqueItems": true,
  "items": {
    "type": "string",
    "enum": [
      "Not fastened",
      "Loose",
      "Cracked",
      "Cut",
      "Dirty",
      "Bended",
      "Skewed",
      "Hot",
      "Does not rotate",
      "Lack of lubrication",
      "Clearance"
    ]
  }
}
