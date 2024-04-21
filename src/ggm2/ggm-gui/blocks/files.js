Blockly.defineBlocksWithJsonArray([
{
  "type": "gvbvdxx_files_dataurl",
  "message0": "Get File As Data Url: %1",
  "args0": [
    {
      "type": "field_input",
      "name": "name",
      "text": "face.png"
    }
  ],
  "inputsInline": true,
  "output": "DataURL",
  "colour": BlockColors["files"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_files_makeimage",
  "message0": "Make Image From Data Url %1 Data URL: %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "dataURI",
      "align": "CENTRE"
    }
  ],
  "inputsInline": false,
  "output": "Image",
  "colour": BlockColors["files"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_files_data_input",
  "message0": "Get File As Data Url: %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "dataURL",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": BlockColors["files"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_files_localstorageput",
  "message0": "Put Item In Storage Named %1 %2 With Data: %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "name"
    },
    {
      "type": "input_value",
      "name": "data"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["files"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_files_localstorageget",
  "message0": "Get Item In Storage Named %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "name"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": BlockColors["files"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_files_filetypes",
  "message0": "File type: %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "FileTypes",
      "options": [
        [
          "GIF Image",
          "image/gif"
        ],
        [
          "PNG image",
          "image/png"
        ],
        [
          "SVG image",
          "image/svg+xml"
        ],
        [
          "HTML document",
          "text/html"
        ],
        [
          "Plain text",
          "text/plain"
        ],
        [
          "OGG Audio",
          "audio/ogg"
        ],
        [
          "WAV Audio",
          "audio/wav"
        ],
        [
          "MP3 Audio",
          "audio/mp3"
        ],
        [
          "FLAC Audio",
          "audio/flac"
        ],
        [
          "AVI Video",
          "video/x-msvideo"
        ],
        [
          "MP4",
          "video/mp4"
        ],
        [
          "ZIP Archive",
          "application/zip"
        ],
        [
          "MPEG Video",
          "video/mpeg"
        ],
        [
          "JSON Document",
          "application/json"
        ],
        [
          "JavaScript Document",
          "text/javascript"
        ],
        [
          "PDF Document",
          "application/pdf"
        ],
        [
          "WEBM Audio",
          "video/webm"
        ]
      ]
    }
  ],
  "output": "String",
  "colour": BlockColors["files"],
  "tooltip": "Returns a string of the mime type",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_files_download",
  "message0": "Save file named: %1 type: %2 with contents: %3",
  "args0": [
    {
      "type": "input_value",
      "name": "name",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "type"
    },
    {
      "type": "input_value",
      "name": "contents"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["files"],
  "tooltip": "Opens the file save dialog and saves a file with the specified name, with the specified contents.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_files_upload",
  "message0": "Open file with types types: %1 . when uploaded set %2 and do: %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "type"
    },
    {
      "type": "field_variable",
      "name": "content_variable",
      "variable": "fileContents"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "whendone",
      "align": "CENTRE"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["files"],
  "tooltip": "Opens the file open dialog, sets the specified variable to the file text contents,and runs the code specified.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_files_data_url_to_text",
  "message0": "Get data URL as text:  %1",
  "args0": [
    {
      "type": "input_value",
      "name": "name"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": BlockColors["files"],
  "tooltip": "Gets a file data URL to readable text.",
  "helpUrl": ""
}
]);
Blockly.JavaScript['gvbvdxx_files_dataurl'] = function(block) {
  var text_name = block.getFieldValue('name');
  // TODO: Assemble JavaScript into code variable.
  try {
	window.vm.project.resources[text_name].data;
	var code = 'window.vm.project.resources["'+text_name.replaceAll('"','\\"')+'"].data';
	block.setWarningText(null);
  }catch(e){
	  block.setWarningText("File Does Not Exist!");
	  return ["", Blockly.JavaScript.ORDER_NONE];
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_files_makeimage'] = function(block) {
  var value_datauri = Blockly.JavaScript.valueToCode(block, 'dataURI', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'vm.project.block.dataToImg('+value_datauri+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_files_data_input'] = function(block) {
  var value_dataurl = Blockly.JavaScript.valueToCode(block, 'dataURL', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `window.vm.project.resources[${value_dataurl}].data`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_files_localstorageput'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  if (!(value_name)) {value_name = '""';}
  if (!(value_data)) {value_data = '""';}
  // TODO: Assemble JavaScript into code variable.
  var code = `localStorage.setItem("GGM2G_"+(${value_name}),${value_data});\n`;
  return code;
};
Blockly.JavaScript['gvbvdxx_files_localstorageget'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  if (!(value_name)) {
	  value_name = '""';
  }
  // TODO: Assemble JavaScript into code variable.
  var code = `localStorage.getItem("GGM2G_"+(${value_name}))`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_files_filetypes'] = function(block) {
  var dropdown_filetypes = block.getFieldValue('FileTypes');
  // TODO: Assemble JavaScript into code variable.
  var code = JSON.stringify(dropdown_filetypes);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_files_download'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_type = Blockly.JavaScript.valueToCode(block, 'type', Blockly.JavaScript.ORDER_ATOMIC);
  var value_contents = Blockly.JavaScript.valueToCode(block, 'contents', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `vm.project.block.saveFileFromText(${value_name},${value_type},${value_contents});`+"\n";
  return code;
};
Blockly.JavaScript['gvbvdxx_files_upload'] = function(block) {
  var value_type = Blockly.JavaScript.valueToCode(block, 'type', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_content_variable = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('content_variable'), Blockly.Variables.NAME_TYPE);
  var statements_whendone = Blockly.JavaScript.statementToCode(block, 'whendone');
  // TODO: Assemble JavaScript into code variable.
  var code = `vm.project.block.loadFileAsText(${value_type}, function (__TEMP_COTNENTS_TEMP__) {${"\n"}${variable_content_variable} = __TEMP_COTNENTS_TEMP__;${"\n"}${statements_whendone}${"\n"}});`+'\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_files_data_url_to_text'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `vm.project.block.convertURLToText(${value_name})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};