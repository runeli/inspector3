//Expose global variables
require("expose?$!jquery");
require("expose?JSONEditor!json-editor");


import JSONScheme from './JSON/testScheme.js';
$(function(){
console.log(JSON.stringify(JSONScheme));
  JSONEditor.defaults.options.theme = 'bootstrap3';
  var editor = new JSONEditor(document.getElementById("editor_holder"),{
    schema: JSONScheme,
    disable_array_add: true,
    disable_array_delete: true,
    disable_array_reorder: true,
    disable_edit_json: true,
    disable_properties: true
  });
  window.editor = editor;
});
