export default {
  "type":"array",
  "title": "Support wheels",
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
