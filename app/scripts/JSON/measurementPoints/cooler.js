export default {
  "type":"array",
  "title": "Cooler",
  "format": "checkbox",
  "uniqueItems": true,
  "items": {
    "type": "string",
    "enum": [
      "Leak",
      "Clearance",
      "Other"
    ]
  }
}
