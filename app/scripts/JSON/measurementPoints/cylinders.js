export default {
  "type": "array",
  "title": "Cylinders",
  "format": "checkbox",
  "uniqueItems": true,
  "items": {
    "type": "string",
    "enum":[
      "Leak",
      "Clearance",
      "Other",
      "Leak",
      "Scratched",
      "Loose"
    ]
  }
}
