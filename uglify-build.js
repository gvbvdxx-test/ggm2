var UglifyJS = require("uglify-js");
var fs = require("fs");
var bigCode = fs.readFileSync("dist/main.js",{encoding:"UTF-8"});
var result = UglifyJS.minify(bigCode, {
	toplevel: true,
	warnings: true,
    compress: {
        passes: 10,
		annotations: true,
    },
    output: {
        beautify: false,
        preamble: "/* This file has been minimized to save space and load times, I don't recommend editing this directly. */"
    }
});
fs.writeFileSync("dist/main.js",result.code);