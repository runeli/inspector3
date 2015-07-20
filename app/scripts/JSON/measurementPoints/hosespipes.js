export default {
  "type": "array",
  "title": "Hoses & Pipes",
  "format": "checkbox",
  "uniqueItems": true,
  "items": {
    "type": "string",
    "enum":[
      "Not fastened",
      "Loose",
      "Cut",
      "Blocked",
      "Leak",
      "Other",
      "Worn-out",
      "Flat"
    ]
  }
}
