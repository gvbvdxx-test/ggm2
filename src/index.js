/*
Uncomment this if you want cloud variables


window.cloudsetup = {
	ws:"ws://localhost:4726", //websocket url
	id:12345 //connection id, to separate cloud messages from others
};
*/

window.useBlocklyBlocks = false; //change this to true to have more blocks (from blockly)
window.useConfirmDialog = true; //asks the user if they want to save their changes (if true)

//this here loads everything.
var usevm = require("src/usevm.js");
var ggm2path = require("src/paths.js");
if (usevm) {
	function doScriptAdd(s) {
		return require("src/" + ggm2path + "/" + s);
	}
	doScriptAdd("ggm-vm/index.js");
	doScriptAdd("ggm-vm/renderer.js");
	doScriptAdd("ggm-vm/audio.js");
	doScriptAdd("ggm-vm/better-audio-ctx.js");
} else {
	require("src/"+ggm2path+"/ggm-gui/main.js");
}