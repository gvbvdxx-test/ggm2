Blockly.defineBlocksWithJsonArray([
{
  "type": "gvbvdxx_lists_new",
  "message0": "New list",
  "inputsInline": true,
  "output": null,
  "colour": BlockColors["lists"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_lists_new_text",
  "message0": "Split text  %1 and split it with %2",
  "args0": [
    {
      "type": "field_input",
      "name": "text",
      "text": "Hello-World!"
    },
    {
      "type": "field_input",
      "name": "split",
      "text": "-"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": BlockColors["lists"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_lists_item_number",
  "message0": "%1 get item number %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "list",
      "variable": "List"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": BlockColors["lists"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_lists_add",
  "message0": "%1 add item %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "list",
      "variable": "List"
    },
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["lists"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_lists_delete_number",
  "message0": "%1 Delete Item Number %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "list"
    },
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["lists"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_lists_length",
  "message0": "%1 length",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "list"
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": BlockColors["lists"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_lists_delete_all",
  "message0": "%1 Delete all",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "list"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["lists"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_list_split_string_value",
  "message0": "Split Text %1 and split it with %2 into a list",
  "args0": [
    {
      "type": "input_value",
      "name": "list"
    },
    {
      "type": "input_value",
      "name": "value"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": BlockColors["lists"],
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_lists_replace_item",
  "message0": "Replace item number %1 in list %2 %3 with %4",
  "args0": [
    {
      "type": "input_value",
      "name": "number",
      "check": "Number"
    },
    {
      "type": "field_variable",
      "name": "List",
      "variable": "list"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "replacement_Item"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": BlockColors["lists"],
  "tooltip": "Replaces the specified item number with the provided item",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_lists_item_exists",
  "message0": "Item %1 in list %2 exists?",
  "args0": [
    {
      "type": "input_value",
      "name": "item"
    },
    {
      "type": "field_variable",
      "name": "List",
      "variable": "list"
    }
  ],
  "output": "Boolean",
  "colour": BlockColors["lists"],
  "tooltip": "Checks to see if a item exists in a list, this is case sensitive.",
  "helpUrl": ""
},
{
  "type": "gvbvdxx_lists_get_item_number",
  "message0": "Get item number of %1 in list %2",
  "args0": [
    {
      "type": "input_value",
      "name": "item"
    },
    {
      "type": "field_variable",
      "name": "List",
      "variable": "list"
    }
  ],
  "output": "Number",
  "colour": BlockColors["lists"],
  "tooltip": "Finds the item number of the specified item in a list, this is case sensitive. When no item is found, -1 will be returned.",
  "helpUrl": ""
}
]);
Blockly.JavaScript['gvbvdxx_lists_new'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '[]';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_lists_new_text'] = function(block) {
  var text_text = block.getFieldValue('text');
  var text_split = block.getFieldValue('split');
  // TODO: Assemble JavaScript into code variable.
  var code = '"'+text_text+'".split("'+text_split+'")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_lists_item_number'] = function(block) {
  var variable_list = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list+'['+value_name+']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_lists_add'] = function(block) {
  var variable_list = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list+'.push('+value_name+');\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_lists_delete_number'] = function(block) {
  var variable_name = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_name+' = vm.project.block.deleteList('+variable_name+','+value_name+');\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_lists_length'] = function(block) {
  var variable_name = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_name+'.length';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_lists_delete_all'] = function(block) {
  var variable_name = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_name+' = [];\n';
  return code;
};
Blockly.JavaScript['gvbvdxx_list_split_string_value'] = function(block) {
  var value_list = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `(${value_list}).split(${value_value})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_lists_replace_item'] = function(block) {
  var value_number = Blockly.JavaScript.valueToCode(block, 'number', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_list = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('List'), Blockly.Variables.NAME_TYPE);
  var value_replacement_item = Blockly.JavaScript.valueToCode(block, 'replacement_Item', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `(${variable_list})[${value_number}] = (${value_replacement_item});`+"\n";
  return code;
};
Blockly.JavaScript['gvbvdxx_lists_item_exists'] = function(block) {
  var value_item = Blockly.JavaScript.valueToCode(block, 'item', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_list = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('List'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `(${variable_list}.indexOf(${value_item}) > -1)`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gvbvdxx_lists_get_item_number'] = function(block) {
  var value_item = Blockly.JavaScript.valueToCode(block, 'item', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_list = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('List'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_list}.indexOf(${value_item})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};