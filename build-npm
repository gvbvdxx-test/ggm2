var fs = require("fs");
fs.writeFileSync("src/usevm.js", "module.exports = true;");
var child = require("child_process");
var node = child.spawn("node",["buildvm.js"]);
node.on("exit", () => {
	fs.writeFileSync("src/usevm.js", "module.exports = false;");
	var vm = fs.readFileSync("dist/main.js");
	fs.writeFileSync("src/vm-build.js",vm);
})