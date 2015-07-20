export default {
  "type": "array",
  "title": "Lasers",
  "format": "checkbox",
  "uniqueItems": true,
  "items": {
    "type": "string",
    "enum":[
      "Not fastened",
      "Loose",
      "Cracked",
      "Cut",
      "Dirty",
      "Skewed",
      "Other",
      "Program problem"
    ]
  }
}
