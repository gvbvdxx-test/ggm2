var fs = require("fs");
var child = require("child_process");
var process = require("process");
var node = child.spawn("node",["makevm.js"]);
node.on("exit", () => {
	var node = child.spawn("node",["build.js"]);
	node.on("exit", () => {
		var node = child.spawn("node",["dev.js"]);
		node.on("exit", () => {
			process.exit();
		})
	})
});