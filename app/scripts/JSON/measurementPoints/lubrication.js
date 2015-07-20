export default {
  "type": "array",
  "title": "Lubrication",
  "format": "checkbox",
  "uniqueItems": true,
  "items": {
    "type": "string",
    "enum":[
      "Lack of lubrication",
      "Out of grease",
      "Pipes blocked",
      "Pipes leak",
      "Over lubrication",
      "Other",
      "System empty",
      "Safematic"
    ]
  }
}
