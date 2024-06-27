var gvbvdxxPack = require("gvbvdxx-pack-2");
var fs = require("fs");
var path = require("path");
var FS = fs;
var filepathlist = [];
var UglifyJS = require("uglify-js");
function ThroughDirectory(directory) {
    fs.readdirSync(directory).forEach(File => {
        const absolute = path.join(directory, File);
        if (fs.statSync(absolute).isDirectory()) {
            return ThroughDirectory(absolute);
        } else {
            return filepathlist.push(absolute);
        }
    });
}
filepathlist = [
	"./src/usevm.js",
	"./src/index.js",
	"./src/paths.js"
];
ThroughDirectory("./src/ggm2/ggm-vm");
var files = gvbvdxxPack.compile(filepathlist, false, [], false);
gvbvdxxPack.build(files, fs.readFileSync("template/index-no-ws.html"));