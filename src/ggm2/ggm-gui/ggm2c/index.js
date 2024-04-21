var console = require("log");
var elements = require("elements");

/////////////////////////////////////////////////////////

var div = elements.getGPId("ggm2c");
var ggm2c = window.ggm2c;
window.ggm2c = undefined;

console.log("GGM2 Community mode initialized.");

/////////////////////////////////////////////////////////

var newGame = elements.getGPId("New_Game");

newGame.onclick = function () {
	ggm2c.buttons.newGame();
};

/////////////////////////////////////////////////////////

var menuBarSep = {
    element: "p",
    className: "separatorBarMenu",
    style: {
        float: "left",
        fontSize: "32px",
        marginLeft: "10px",
        marginTop: "5px"
    },
    textContent: "|"
};

/////////////////////////////////////////////////////////

function dropDownButton (label, id, img) {
	var image = {element:"div"};
	if (img) {
		image = {
			element: "img",
			src: img,
			style: {
				height: "15px",
				transition: "0.2s",
				marginRight:"5px"
			}
		};
	}
	return {
				element: "div",
				className: "ggm2c_DropDown_Button",
				gid: id,
				children: [
					image,
					{
						element:"span",
						textContent: label
					}
				]
			};
}

/////////////////////////////////////////////////////////

//Drop down buttons.

var dropDownButtons = [];

if (ggm2c.buttons.homeSupported) {
	dropDownButtons.push(dropDownButton("Home", "GGM2CHomeButton", "static/ggm2c/home.png"));
}

if (ggm2c.buttons.messagesSupported) {
	dropDownButtons.push(dropDownButton("Messages", "GGM2CMessagesButton", "static/ggm2c/mail.png"));
}

/////////////////////////////////////////////////////////
var json = [
	{
		element: "div",
		gid: "ggm2cUser",
		className: "userTab",
		children:[
			{
				element: "img",
				src: ggm2c.user.pfp,
				style: {
					width: "32px",
					height: "32px",
					marginTop: "8px"
				}
			},
			{
				element: "span",
				textContent: ggm2c.user.name,
				style: {
					lineHeight: "48px",
					fontWeight: "bold",
					textAlign: "center"
				}
			},
			{
				element: "img",
				src: "static/ggm2c/arrow.png",
				gid: "ggm2cArrow",
				style: {
					height: "8px",
					marginTop: "20px",
					marginLeft: "5px",
					transition: "0.2s"
				}
			}
		]
	},
	{
		element: "div",
		gid: "ggm2cUserTab",
		className: "userInfoTab",
		children: [
			{element:"div",children:dropDownButtons}
		]
	},
	menuBarSep,
	{
		element: "button",
		gid: "ggm2c_share",
		className: "menuButtonOrange menuButton"
	},
	{
		element: "button",
		gid: "ggm2c_saveNow",
		className: "buttonBlue menuButton",
		textContent: ""
	}
];
var elms = elements.createElementsFromJSON(json);
elements.appendElements(div, elms);

/////////////////////////////////////////////////////////

var share = elements.getGPId("ggm2c_share");

var shared = ggm2c.project.shared;

function updateShareContents (progressing) {
	if (shared) {
		if (progressing) {
			share.textContent = "Sharing...";
		} else {
			share.textContent = "Unshare";
		}
	} else {
		if (progressing) {
			share.textContent = "Unsharing...";
		} else {
			share.textContent = "Share";
		}
	}
}

updateShareContents();

var sharing = false;

async function shareButton() {
	if (!sharing) {
		sharing = true;
		
		shared = !shared;
		ggm2c.project.shared = shared;
		
		updateShareContents(true);
		
		await ggm2c.buttons.share(shared);
		
		updateShareContents();
		
		sharing = false;
	}
}

share.addEventListener("click", async function () {
	shareButton();
});

/////////////////////////////////////////////////////////

var saveNow = elements.getGPId("ggm2c_saveNow");
var saving = false;

function updateSaveNowContents (progressing) {
	if (progressing) {
		saveNow.textContent = "Saving...";
	} else {
		saveNow.textContent = "Save Now";
	}
}

updateSaveNowContents();

async function saveNowButton() {
	if (!saving) {
		saving = true;
		
		updateSaveNowContents(true);
		
		var zip = await window.gui.exportZip();
		var blob = await zip.generateAsync({
			type: "blob"
		});
		
		await ggm2c.buttons.saveNow(blob);
		
		updateSaveNowContents();
		
		saving = false;
	}
}

saveNow.addEventListener("click", async function () {
	saveNowButton();
});

/////////////////////////////////////////////////////////

var user = elements.getGPId("ggm2cUser");
var arrow = elements.getGPId("ggm2cArrow");

var toggle = false;

function updateToggle () {
	if (toggle) {
		arrow.style.rotate = "180deg";
	} else {
		arrow.style.rotate = "0deg";
	}
	elements.getGPId("ggm2cUserTab").setAttribute("toggled",toggle);
	user.setAttribute("selected",toggle);
}
updateToggle();

/////////////////////////////////////////////////////////

user.addEventListener("click", function () {
	toggle = !toggle;
	updateToggle();
});

/////////////////////////////////////////////////////////

var home = elements.getGPId("GGM2CHomeButton");

if (home) {
	home.addEventListener("click", function () {
		toggle = false;
		updateToggle();
		
		ggm2c.buttons.home();
	});
}

/////////////////////////////////////////////////////////

var mail = elements.getGPId("GGM2CMessagesButton");

if (mail) {
	mail.addEventListener("click", function () {
		toggle = false;
		updateToggle();
		
		ggm2c.buttons.messages();
	});
}

/////////////////////////////////////////////////////////

//Load zip file if possible.

(async function () {
	if (ggm2c.project.uri) {
		
		elements.getGPId("filesLoadedValue").hidden = false;
		elements.getGPId("filesLoadedValue").innerHTML = "Loading project...";
		
		var projectURL = ggm2c.project.uri;
		var request = await fetch(projectURL);
		var arrayBuffer = await request.arrayBuffer();
		
		gui.importZip(arrayBuffer);
		
	}
})();

/////////////////////////////////////////////////////////

//Only show the player if gamePlayerOnly is true.
if (ggm2c.gamePlayerOnly) {
	//Hide any ui elements that we don't need to show.
	var leftPane = elements.getGPId("leftPane");
	var menuBar = elements.getGPId("main_menu");
	
	var gameArea = elements.getGPId("gameArea");
	var toggleFullscreenButton = elements.getGPId("toggleFullscreenButton");
	var gameScreen = elements.getGPId("gameScreen");
	
	leftPane.hidden = true;
	menuBar.style.display = "none";
	
	toggleFullscreenButton.hidden = true;
	gameArea.className = "fullscreenGame";
	
	//Hide the blockly workspace.
	workspace.setVisible(false);
	
	//Use the click to start screen.
	var clickToStartProject = elements.getGPId("clickToStartProject");
	
	clickToStartProject.onclick = function () {
		clickToStartProject.style.display = "none";
		vm.start();
	};
	clickToStartProject.style.display = "block";
}

/////////////////////////////////////////////////////////