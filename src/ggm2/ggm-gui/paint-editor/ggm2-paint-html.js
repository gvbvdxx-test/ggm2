var styles = `
		.ggm-paint-container {
			background:#e5dbff;
			font-family:arial;
		}
        .ggm-paint-menu-bar {
			 background:#adb5bd;
			 top:0;left:200px;
			 position:absolute;
			 width:calc(100% - 200px);
			 height:32px;
         }
         .ggm-paint-paint-options {
		 
			color:black;
			 background:#ced4da;
			 top:0px;
			 left:0;
			 position:absolute;
			 width:200px;
			 height:calc(100% - 0px);
			 overflow:scroll;
			 overflow-x: hidden;
         }
        .ggm-paint-paint-canvas {
			 background-image:url("static/paint/transparent.png");
			 image-rendering:pixelated;
			 background-size:32px 32px;
         }
         .ggm-paint-paint-area {
			 position:absolute;
			 top:32px;
			 left:200px;
			 overflow:scroll;
			 background:#ced4da;
			 width:calc(100% - 200px);
			 height:calc(100% - 32px);
         }
         .ggm-paint-paint-button-1 {
			 background:#ced4da;
			 border:none;
			 border-radius:5px;
			 cursor:pointer;
         }
         .ggm-paint-paint-button-1:hover {
			background:#adb5bd;
         }
         .ggm-paint-paint-input-1 {
			 background:#cccccc;
			 border:none;
			 border-radius:5px;
			 outline: none;
         }
         .ggm-paint-paint-input-1:focus {
			background:#b8b6b6;
         }
         .ggm-paint-menu-button {
			 height:32px;
			 cursor:pointer;
			 background:#adb5bd;
			 border:none;
			 font-weight:bold;
			 color:white;
			 border-radius:1px;
			 border-radius:1px;
         }
         ggm-paint-.menu-button:hover {
			background:#868e96;
         }
		 .ggm-paint-menu-label {
			 height:32px;
			 background:#adb5bd;
			 border:none;
			 font-weight:bold;
			 color:white;
			 border-radius:1px;
			 border-radius:1px;
         }
`;
module.exports = {
    element: "div",
    children: [{
            element: "style",
            innerHTML: styles
        }, {
            element: "div",
            className: "ggm-paint-container",
            children: [{
                    element: "div",
                    gid: "ggm-paint-menu-bar",
                    className: "ggm-paint-menu-bar",
                    children: [{
                            element: "button",
                            className: "ggm-paint-menu-button",
                            gid: "ggm-paint-newButton",
							textContent: "Reset Image"
                        },
						{
                            element: "span",
                            className: "ggm-paint-menu-label",
                            textContent: "Name:"
                        },
						{
                            element: "input",
							type:"text",
                            className: "ggm-paint-paint-input-1",
                            gid: "ggm-paint-filename"
                        }
                    ]
                }, {
                    element: "div",
                    className: "ggm-paint-paint-options",
                    children: [{
                            element: "button",
                            className: "ggm-paint-paint-button-1",
                            gid: "ggm-paint-mode-move2",
                            children: [{
                                    element: "img",
                                    height: "32",
                                    src: "static/paint/move2.png?n=1"
                                }
                            ]
                        },
						{
                            element: "button",
                            className: "ggm-paint-paint-button-1",
                            gid: "ggm-paint-mode-move",
                            children: [{
                                    element: "img",
                                    height: "32",
                                    src: "static/paint/move.png?n=1"
                                }
                            ]
                        },
						{
                            element: "button",
                            className: "ggm-paint-paint-button-1",
                            gid: "ggm-paint-mode-brush",
                            children: [{
                                    element: "img",
                                    height: "32",
                                    src: "static/paint/brush.png?n=1"
                                }
                            ]
                        },
						{
                            element: "button",
                            className: "ggm-paint-paint-button-1",
                            gid: "ggm-paint-mode-rect",
                            children: [{
                                    element: "img",
                                    height: "32",
                                    src: "static/paint/rectangle.png?n=1"
                                }
                            ]
                        },
						{
                            element: "button",
                            className: "ggm-paint-paint-button-1",
                            gid: "ggm-paint-mode-outline-rect",
                            children: [{
                                    element: "img",
                                    height: "32",
                                    src: "static/paint/outline-rectangle.png?n=1"
                                }
                            ]
                        },
						{
                            element: "button",
                            className: "ggm-paint-paint-button-1",
                            gid: "ggm-paint-mode-line",
                            children: [{
                                    element: "img",
                                    height: "32",
                                    src: "static/paint/line.png?n=1"
                                }
                            ]
                        },
						{
                            element: "button",
                            className: "ggm-paint-paint-button-1",
                            gid: "ggm-paint-mode-text",
                            children: [{
                                    element: "img",
                                    height: "32",
                                    src: "static/paint/text.png?n=1"
                                }
                            ]
                        },
						{
                            element: "button",
                            className: "ggm-paint-paint-button-1",
                            gid: "ggm-paint-mode-fill",
                            children: [{
                                    element: "img",
                                    height: "32",
                                    src: "static/paint/fill.png?n=1"
                                }
                            ]
                        },
						{
                            element: "button",
                            className: "ggm-paint-paint-button-1",
                            gid: "ggm-paint-mode-spray",
                            children: [{
                                    element: "img",
                                    height: "32",
                                    src: "static/paint/spray.png?n=1"
                                }
                            ]
                        },
						{
                            element: "button",
                            className: "ggm-paint-paint-button-1",
                            gid: "ggm-paint-mode-erase",
                            children: [{
                                    element: "img",
                                    height: "32",
                                    src: "static/paint/eraser.png?n=1"
                                }
                            ]
                        },
						{
                            element: "button",
                            className: "ggm-paint-paint-button-1",
                            gid: "ggm-paint-mode-getcolor",
                            children: [{
                                    element: "img",
                                    height: "32",
                                    src: "static/paint/takecolor.png?n=1"
                                }
                            ]
                        },
						{element:"br"},{element:"br"},
						{
                            element: "span",
                            gid: "ggm-paint-MODE"
                        },
						{element:"br"},{element:"br"},
						{
                            element: "b",
                            textContent: "Drawing Properties"
                        },
						{element:"br"},
						{
                            element: "small",
                            textContent: "",
							gid: "ggm-paint-selectInfo"
                        },
						{element:"br"},
						{
							element:"label",
							textContent:"Zoom:"
						},
						{
							element:"input",
							gid:"ggm-paint-zoom",
							type:"range",
							min:2,
							max:500,
							value:100,
							className:"ggm-paint-paint-input-1"
						},
						{element:"br"},
						{
							element:"label",
							textContent:"Size:"
						},
						{
							element:"input",
							gid:"ggm-paint-thickness",
							type:"range",
							min:1,
							max:120,
							value:5,
							className:"ggm-paint-paint-input-1"
						},
						{element:"br"},
						{
							element:"label",
							textContent:"Color:"
						},
						{
							element:"input",
							gid:"ggm-paint-color",
							type:"color",
							value: "#7048e8",
							className:"ggm-paint-paint-input-1"
						},
						{element:"br"},
						{
							element:"label",
							textContent:"Transparent fill color:"
						},
						{
							element:"input",
							gid:"ggm-paint-transparent",
							type:"checkbox",
							className:"ggm-paint-paint-input-1"
						},
						{element:"br"},
						{
							element:"label",
							textContent:"Dot brush:"
						},
						{
							element:"input",
							gid:"ggm-paint-dot",
							type:"checkbox",
							className:"ggm-paint-paint-input-1"
						},
						{element:"br"},
						{
							element:"label",
							textContent:"Text (value):"
						},
						{
							element:"input",
							gid:"ggm-paint-textValue",
							type:"text",
							className:"ggm-paint-paint-input-1"
						},
						{element:"br"},{element:"br"},
						{
                            element: "b",
                            textContent: "Canvas properties"
                        },
						{element:"br"},
						{
							element:"label",
							textContent:"Width:"
						},
						{
							element:"input",
							gid:"ggm-paint-width",
							type:"number",
							min:1,
							max:Infinity,
							value:600,
							className:"ggm-paint-paint-input-1"
						},
						{element:"br"},
						{
							element:"label",
							textContent:"Height:"
						},
						{
							element:"input",
							gid:"ggm-paint-height",
							type:"number",
							min:1,
							max:Infinity,
							value:600,
							className:"ggm-paint-paint-input-1"
						},
						{element:"br"},{element:"br"},
						{
                            element: "b",
                            textContent: "Other"
                        },
						{element:"br"},
						{
							element:"button",
							gid:"ggm-paint-erase",
							className:"ggm-paint-paint-input-1",
							textContent:"Erase All"
						},
						{
							element:"button",
							gid:"ggm-paint-undoButton",
							className:"ggm-paint-paint-input-1",
							textContent:"Undo"
						},
					]
                }, {
                    element: "div",
                    gid: "ggm-paint-paint-area",
                    className: "ggm-paint-paint-area",
                    children: [{
                            element: "canvas",
                            gid: "ggm-paint-paint-canvas",
                            className: "ggm-paint-paint-canvas"
                        }
                    ]
                }
            ]
        }
    ]
};
