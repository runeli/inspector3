export default {
  "type": "array",
  "title": "Guide clearances",
  "format": "checkbox",
  "uniqueItems": true,
  "items": {
    "type": "string",
    "enum":[
      "OK",
      "Left",
      "Right",
      "Both",
      "Other"
    ]
  }
}
