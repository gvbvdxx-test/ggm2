var elements = require("elements");

var console = require("log");

//does the resources stuff


var resoureupload = elements.getGPId('resourceupload');
var createImageResource = elements.getGPId('createImageButton');
var files = elements.getGPId('files');
window.fileResources = [];
window.fileResourcesArray = [];
resoureupload.accept = "audio/*,image/*,text/plain,application/json,text/javascript";
window.clearResources = function clearResources() {
    files.innerHTML = "";
    window.fileResources = [];
    window.fileResourcesArray = [];
};
var supportedTypes = ["image","audio","text","application"];
function convertURLToText(url) {
	return atob(url.split(",").pop());
}
function createElmPreview(data, name, type) {
	var out = {};
	
	if (type == "image") {
		out.gid = "resources_image_id_temp";
		
		out.element = "img";
		
		out.src = data;
		
		out.height = 54;
		
		out.style = {
			imageRendering:"pixelated"
		};
	}
	
	if (type == "audio") {
		out.element = "audio";
		out.src = data;
		out.controls = true;
	}
	if (type == "text" || type == "application") {
		out.element = "textarea";
		out.disabled = true;
		out.className = "filetextbox";
		out.value = convertURLToText(data);
	}
	
	return out;
}
window.readFileAsResourceOld = function readFileAsResourceOld(data, name, type) {
    var div = document.createElement("div");
    div.innerHTML = `${name} `;
    resoureupload.files[0]
    if (type == "image") {
        var image = document.createElement("img");
        image.src = data;
        div.appendChild(image);
        image.width = "200";
    }
    if (type == "audio") {
        var audio = document.createElement("audio");
        audio.src = data;
        audio.controls = true;
        div.appendChild(audio);
    }
    div.appendChild += "<br>";
    files.appendChild(div);
    window.fileResources[name] = ({
        data: data,
        name: name,
        type: type
    });
    window.fileResourcesArray.push({
        data: data,
        name: name,
        type: type
    });
    window.vm.project.resources = fileResources;
};
function updateFR () {
	window.vm.project.resources = window.fileResources;
}
function addFileToData (data, name, type) {
	if (window.fileResources[name]) {
		return false;
	} else {
		window.fileResources[name] = ({
			data: data,
			name: name,
			type: type
		});
		window.fileResourcesArray.push({
			data: data,
			name: name,
			type: type
		});
		updateFR();
		return true;
	}
}
function removeFileFromData (name) { //A bit more effort to remove the file.
	if (window.fileResources[name]) {
		window.fileResources[name] = null;
		
		//Clear all the "null" values from window.fileResources.
		var newFR = {};
		for (var n of Object.keys(window.fileResources)) {
			if (window.fileResources[n]) {
				newFR[n] = window.fileResources[n];
			}
		}
		window.fileResources = newFR;
		
		//Remove any files with that name.
		var newFRArray = [];
		
		for (var d of window.fileResourcesArray) {
			if (d) {
				if (d.name !== name) {
					newFRArray.push(d);
				}
			} else {
				console.warn("One or more files in the window.fileResourcesArray is null.");
			}
		}
		window.fileResourcesArray = newFRArray;
		
		updateFR();
		return true; //Return that the removal was successfull.
	} else {
		return false; //No such file exists, return that the removal was a failure.
	}
}

function renameFileTo (data, oldName, type, newName) {
	
	removeFileFromData(oldName);
	
	addFileToData(data, newName, type);
}

function waitForImage(src) {
	return new Promise((resolve,reject) => {
		var img = document.createElement("img");
		img.onload = function () {
			resolve(img);
		};
		img.onerror = function () {
			reject(img);
		};
		img.src = src;
	});
}

var paintDialog = elements.getGPId("paintDialogContainer");
var paintFileName = elements.getGPId("ggm-paint-filename");
var paintDialogButtonSave = elements.getGPId("paintDialogButtonSave");
var paintDialogButtonCancel = elements.getGPId("paintDialogButtonCancel");
window.ggm2PaintInputEnabled = false;

function editImageDialog (name,loadImage) {
	return new Promise(async (accept,reject) => {
		gui.paintEditor.resetEverything();
		var img = null;
		if (loadImage) {
			var img = await waitForImage(loadImage);
			await gui.paintEditor.loadImage(img);
		}
		paintFileName.value = name;
		
		paintDialog.hidden = false;
		window.ggm2PaintInputEnabled = true;
		
		paintDialogButtonSave.onclick = function () {
			paintDialog.hidden = true;
			window.ggm2PaintInputEnabled = false;
			accept({
				accepted: true,
				name:paintFileName.value,
				data:gui.paintEditor.getImage('image/png')
			});
		};
		paintDialogButtonCancel.onclick = function () {
			paintDialog.hidden = true;
			window.ggm2PaintInputEnabled = false;
			accept({
				accepted: false
			});
		};
	});
}

window.readFileAsResource = function readFileAsResource(dataURL, name, type) {
	if (window.fileResources[name]) {
		console.log("File \""+name+"\" already exists!");
		Blockly.alert("File \""+name+"\" already exists!");
	} else {
		if (supportedTypes.indexOf(type) < -1) {
			console.log("File \""+name+"\" does not have a valid format!");
			Blockly.alert("File \""+name+"\" does not have a valid format!");
			return;
		}
		
		var data = dataURL;
		
		addFileToData(data, name, type);
		
		var updatedName = name;
		
		var div = document.createElement("div");
		
		div.style.display = "flex";
		
		var elmJSON = [{
				element:"input",
				gid:"tmp-fileInput",
				textContent:name,
				className:"file-input",
				value:name
			}, {
				element:"button",
				gid:"tmp-fileDeleteButton",
				textContent:"Delete",
				className:"file_buttonBlue",
			} ,{
				element:"button",
				gid:"tmp-fileExportButton",
				textContent:"Export",
				className:"file_buttonBlue",
			},{
				element:"button",
				gid:"tmp-fileEditButton",
				textContent:"Edit",
				className:"file_buttonBlue",
			},
			createElmPreview(data, name, type),
			{element:"br"}
		];
		
		var doms = elements.createElementsFromJSON(elmJSON);
		
		elements.appendElements(div, doms);
		
		var input = elements.getGPId("tmp-fileInput");
		
		var deleteButton = elements.getGPId("tmp-fileDeleteButton");
		var exportButton = elements.getGPId("tmp-fileExportButton");
		var editButton = elements.getGPId("tmp-fileEditButton");
		var imageElement = elements.getGPId("resources_image_id_temp");
		
		function deleteFile () {
			removeFileFromData(updatedName);
			div.remove();
		}
		deleteButton.addEventListener("click", deleteFile);
		
		async function exportFile () {
			var request = await fetch(data);
			var blob = await request.blob();
			var url = URL.createObjectURL(blob);
			
			var a = document.createElement("a");
			a.href = url;
			a.download = updatedName;
			
			a.click();
		}
		exportButton.addEventListener("click", exportFile);
		
		function updateName(newValue2,ignoreDialog,forceOverwrite) {
			var newValue = newValue2.replaceAll("\\","").replaceAll("/","");
			if (newValue.length < 1) {
				input.value = updatedName;
				return;
			}
			
			if (!forceOverwrite) {
				if (window.fileResources[newValue]) {
					if (!ignoreDialog) {
						console.log("File \""+newValue+"\" already exists!");
						Blockly.alert("File \""+newValue+"\" already exists!");
					}
					
					input.value = updatedName;
					return;
				}
			} else {
				if (updatedName !== newValue) {
					if (window.fileResources[newValue]) {
						if (!ignoreDialog) {
							console.log("File \""+newValue+"\" already exists!");
							Blockly.alert("File \""+newValue+"\" already exists!");
						}
						
						input.value = updatedName;
						return;
					}
				}
			}
			
			var nName = newValue;
			
			renameFileTo(data, updatedName, type, nName);
			
			updatedName = nName;
			input.value = nName;
		}
		
		input.addEventListener("keydown", (event) => {
			if (event.key == "Enter") {
				var d = document.createElement("input")
				
				document.body.append(d);
				
				d.focus();
				
				d.remove();
				
				updateName(input.value,true);
				
				event.preventDefault();
			}
		});
		
		input.addEventListener("change", () => {
			updateName(input.value);
		});
		
		async function editFile () {
			if (type.startsWith("image")) {
				var info = await editImageDialog(updatedName,data);
				if (info.accepted) {
					imageElement.src = info.data;
					data = info.data;
					updateName(info.name,false,true);
				}
			} else {
				gui.dialogs.alert("Sorry, this file can not be directly edited yet.", () => {});
			}
		}
		editButton.addEventListener("click", editFile);
		
		files.appendChild(div);
	}
};

resoureupload.multiple = true;
resoureupload.onchange = function () {
    if (resoureupload.files[0]) {
        for (const file of resoureupload.files) {
            const reader = new FileReader();
            reader.onload = function () {
                readFileAsResource(reader.result, file.name, file.type.split('/')[0]);
                resoureupload.value = "";
            }
            if (file.size > 7000000 && false) {
				console.log("Prevented a possible server overload from happening.");
				Blockly.alert("This file is too big!");
            } else {
                reader.readAsDataURL(file);
            }
        }
    }
};

createImageResource.onclick = async function () {
	var info = await editImageDialog("image");
	if (info.accepted) {
		var val = info.name.replaceAll("\\","").replaceAll("/","");
		readFileAsResource(info.data, val, 'image');
	}
};