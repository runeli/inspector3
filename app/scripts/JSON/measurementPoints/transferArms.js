export default {
  "type": "array",
  "title": "Transfer arms",
  "format": "checkbox",
  "uniqueItems": true,
  "items": {
    "type": "string",
    "enum":[
      "Not fastened",
      "Loose",
      "Cracked",
      "Cut",
      "Bended",
      "Skewed",
      "Clearance"
    ]
  }
}
