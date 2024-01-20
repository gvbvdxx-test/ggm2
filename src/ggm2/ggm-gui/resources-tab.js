var elements = require("elements");

var console = require("log");

//does the resources stuff


var resoureupload = elements.getGPId('resourceupload');
var files = elements.getGPId('files');
window.fileResources = [];
window.fileResourcesArray = [];
resoureupload.accept = "audio/*,image/*";
window.clearResources = function clearResources() {
    files.innerHTML = "";
    window.fileResources = [];
    window.fileResourcesArray = [];
};
var supportedTypes = ["image","audio"];
function createElmPreview(data, name, type) {
	var out = {};
	
	if (type == "image") {
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

window.readFileAsResource = function readFileAsResource(data, name, type) {
	if (window.fileResources[name]) {
		console.log("File \""+name+"\" already exists!");
		Blockly.alert("File \""+name+"\" already exists!");
	} else {
		if (supportedTypes.indexOf(type) < -1) {
			console.log("File \""+name+"\" does not have a valid format!");
			Blockly.alert("File \""+name+"\" does not have a valid format!");
			return;
		}
		
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
			},
			createElmPreview(data, name, type),
			{element:"br"}
		];
		
		var doms = elements.createElementsFromJSON(elmJSON);
		
		elements.appendElements(div, doms);
		
		var input = elements.getGPId("tmp-fileInput");
		
		var deleteButton = elements.getGPId("tmp-fileDeleteButton");
		
		function deleteFile () {
			removeFileFromData(updatedName);
			div.remove();
		}
		
		deleteButton.addEventListener("click", deleteFile);
		
		function updateName(ignoreDialog) {
			if (input.value.length < 1) {
				input.value = updatedName;
				return;
			}
			if (window.fileResources[input.value]) {
				if (!ignoreDialog) {
					console.log("File \""+input.value+"\" already exists!");
					Blockly.alert("File \""+input.value+"\" already exists!");
				}
				
				input.value = updatedName;
				return;
			}
			
			var nName = input.value;
			
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
				
				updateName(true);
				
				event.preventDefault();
			}
		});
		
		input.addEventListener("change", () => {
			updateName();
		});
		
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
				console.log("Prevented a server overload from happening.");
				Blockly.alert("This file is too big!");
            } else {
                reader.readAsDataURL(file);
            }
        }
    }
};
