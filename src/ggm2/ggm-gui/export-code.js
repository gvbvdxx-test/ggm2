var loader = require("file-loader");
var elements = require("elements");
window.gui.exportGame = function exportGame() {
	var code = gui.editorToJsonText();
	var title = elements.getGPId("gameTitle").value;
    var html = `<!DOCTYPE HTML>
<!--It seems like you are in the wrong place to play this game!-->
<!--To play this game, use an web browser, not an text editor.-->
<!--If you are using an old browser, please upgrade to a modern one.-->
<!--There are large heaps of code in here, do expect this file to be large.-->
<html>
	<head>
		<title>Loading...</title>
		<style>
			/* The animation code */
			@keyframes logo {
			  0%   {width:350px;margin-left:-175px;filter: brightness(1.6);}
			  50%  {width:300px;margin-left:-150px;filter: brightness(1);transition: 0.01s;}
			  100%   {width:350px;margin-left:-175px;filter: brightness(1.6);}
			}
			/* The element to apply the animation to */
			#logo {
			  animation: rotation 0 linear;
			  animation-name: logo;
			  animation-duration: 2s;
			  animation-delay: 0s;
			  animation-iteration-count: infinite;
			  transition: 0.5s;
			}
			/* The animation code */
			@keyframes example {
			  0%   {transform: rotate(0deg);}
			  100%  {transform: rotate(360deg);}
			}
			/* The element to apply the animation to */
			.loading {
			  width: 100px;
			  height: 100px;
			  animation: rotation 8s infinite linear;
			  animation-name: example;
			  animation-duration: 0.5s;
			  animation-delay: 0s;
			  animation-iteration-count: infinite;
			  position:fixed;
			  top:50%;
			  left:50%;
			  margin-top:-50px;
			  margin-left:-50px;
			  transition: 0.5s;
			}
		</style>
	</head>
	<body style="background:black;overflow:hidden;">
		<img id="loading" class="loading" selectable=false draggable=false src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4NyIgaGVpZ2h0PSI4NyIgdmlld0JveD0iMCwwLDg3LDg3Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk2LjUsLTEzNi41KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjAxLjUsMTgwYzAsLTIxLjI2Mjk2IDE3LjIzNzA0LC0zOC41IDM4LjUsLTM4LjVjMjEuMjYyOTYsMCAzOC41LDE3LjIzNzA0IDM4LjUsMzguNWMwLDIxLjI2Mjk2IC0xNy4yMzcwNCwzOC41IC0zOC41LDM4LjVjLTIxLjI2Mjk2LDAgLTM4LjUsLTE3LjIzNzA0IC0zOC41LC0zOC41eiIgc3Ryb2tlPSIjZmZmZmZmIi8+PHBhdGggZD0iTTIwNi40MjE0NiwxOTguNDQxOTdjLTMuMTM3NzgsLTUuNDE1MzggLTQuOTIxNDYsLTExLjYyOTE3IC00LjkyMTQ2LC0xOC4yMzYwNmMwLC0xMC4wNzQ3NSA0LjE0NzU2LC0xOS4yMzU0NyAxMC45MTk0NywtMjYuMDQ0OTIiIHN0cm9rZT0iI2E3YTdhNyIvPjwvZz48L2c+PC9zdmc+">
		<div id="app" hidden>
			<!--<img id="logo" style="position:fixed;top:50%;left:50%;margin-left:-150px;margin-top:-100px;" width=300 height=200 src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMDMuOTEwNDYiIGhlaWdodD0iMTEwLjM3NzExIiB2aWV3Qm94PSIwLDAsMzAzLjkxMDQ2LDExMC4zNzcxMSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxMzUuMjgzMTEiIHkxPSIxMzUuMTQzOTUiIHgyPSIxMzUuMjgzMTEiIHkyPSIyMzIuODcwNjYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjYjBiMGIwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNTY1ZTYzIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjEyOC42MTY0NSIgeTE9IjEyOC4xNDM5NSIgeDI9IjEyOC42MTY0NSIgeTI9IjIyNS44NzA2NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0yIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlZmYwZjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4MThkOTQiLz48L2xpbmVhckdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBjeD0iMTQ3Ljc0NTYxIiBjeT0iMTM1LjMzMzMzIiByPSI2LjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjEzLjk0OTc4IiB5MT0iMTM0Ljk3NzI4IiB4Mj0iMjEzLjk0OTc4IiB5Mj0iMjMyLjcwMzk5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTQiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2IwYjBiMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzU2NWU2MyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIyMDguNjE2NDUiIHkxPSIxMjguNjQzOTUiIHgyPSIyMDguNjE2NDUiIHkyPSIyMjYuMzcwNjYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItNSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZWZmMGYwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjODE4ZDk0Ii8+PC9saW5lYXJHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgY3g9IjIyNi40MTIyOCIgY3k9IjEzNiIgcj0iNi41IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTYiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjI3My41Njk3MyIgeTE9IjE5Ny41MDY0NiIgeDI9IjI3My41Njk3MyIgeTI9IjIzMS4wMDY0NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci03Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNiMGIwYjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1NjVlNjMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjY5LjkwMzA3IiB5MT0iMTkyLjUwNjQ2IiB4Mj0iMjY5LjkwMzA3IiB5Mj0iMjI2LjAwNjQ2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTgiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2VmZjBmMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzgxOGQ5NCIvPjwvbGluZWFyR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGN4PSIzODAuNzQ1NjEiIGN5PSIxMzciIHI9IjYuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci05Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MS4wNTMxNSwtMTI0LjYyOTM1KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48Zz48cGF0aCBkPSJNMTAxLjQwODU3LDE3Mi4wNjIxYzIuMTI4MzQsLTE0LjQ4MDM2IDEzLjkzMDM2LC0yOC42NDI4MSAyNS4zMzkzMiwtMzMuMjM0MTdjMTYuMzkzMjMsLTYuNTk3MTkgMzQuMDcxODQsLTIuMzIxNDcgMzQuMDcxODQsLTIuMzIxNDdsMC4xNjI4NywxNy41MTM5NmMwLDAgLTE3LjE1NzIyLC0wLjE3OTQ3IC0yOS40MzA3OCw0LjU4NDA0Yy03LjIxNzUyLDIuODAxMiAtMTIuMDkyMDQsOC4yOTMwMSAtMTIuNTQ4MTgsMTMuOTA3MDRjLTAuNzI1NzYsOC45MzI0NyAtMi4xODA2NywyNC41NzQyIDYuMjUwOTgsMzMuNDc3MjFjNS4xMTQ0LDUuNDAwMzIgMjMuNjczNzUsNi41ODY3OSAyMy42NzM3NSw2LjU4Njc5bC0wLjM0OTQ1LC0xOC44OTcxNGwtMjAuMDkxMzQsMC40NjgzM2wwLjY3Njg3LC0xOS45Mzg1bDQxLjE4MTkzLC0wLjYyNTUybC0wLjUyNjY2LDU4LjkyMzc5bC0zMS40NjIxNCwwLjM2MzA3YzAsMCAtNDYuMDQwNSwxLjA0NzE0IC0zNi45NDkwMiwtNjAuODA3NDN6IiBmaWxsPSJ1cmwoI2NvbG9yLTEpIiBzdHJva2U9IiM0MjQyNDIiIHN0cm9rZS13aWR0aD0iNSIvPjxwYXRoIGQ9Ik05NC43NDE5MSwxNjUuMDYyMWMyLjEyODM0LC0xNC40ODAzNiAxMy45MzAzNiwtMjguNjQyODEgMjUuMzM5MzIsLTMzLjIzNDE3YzE2LjM5MzIzLC02LjU5NzE5IDM0LjA3MTg0LC0yLjMyMTQ3IDM0LjA3MTg0LC0yLjMyMTQ3bDAuMTYyODcsMTcuNTEzOTZjMCwwIC0xNy4xNTcyMiwtMC4xNzk0NyAtMjkuNDMwNzgsNC41ODQwNGMtNy4yMTc1MiwyLjgwMTIgLTEyLjA5MjA0LDguMjkzMDEgLTEyLjU0ODE4LDEzLjkwNzA0Yy0wLjcyNTc2LDguOTMyNDcgLTIuMTgwNjcsMjQuNTc0MiA2LjI1MDk4LDMzLjQ3NzIxYzUuMTE0NCw1LjQwMDMyIDIzLjY3Mzc1LDYuNTg2NzkgMjMuNjczNzUsNi41ODY3OWwtMC4zNDk0NSwtMTguODk3MTRsLTIwLjA5MTM0LDAuNDY4MzNsMC42NzY4NywtMTkuOTM4NWw0MS4xODE5MywtMC42MjU1MmwtMC41MjY2Niw1OC45MjM3OWwtMzEuNDYyMTQsMC4zNjMwN2MwLDAgLTQ2LjA0MDUsMS4wNDcxNCAtMzYuOTQ5MDIsLTYwLjgwNzQzeiIgZmlsbD0idXJsKCNjb2xvci0yKSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjUiLz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCI+PHBhdGggZD0iTTEzOC4xNjY2NiwxMzcuNWMwLC0zLjU4OTg1IDIuOTEwMTUsLTYuNSA2LjUsLTYuNWMzLjU4OTg1LDAgNi41LDIuOTEwMTUgNi41LDYuNWMwLDMuNTg5ODUgLTIuOTEwMTUsNi41IC02LjUsNi41Yy0zLjU4OTg1LDAgLTYuNSwtMi45MTAxNSAtNi41LC02LjV6IiBmaWxsPSJ1cmwoI2NvbG9yLTMpIi8+PHBhdGggZD0iTTE0My44Njg0MiwxMzUuNTYxNGMwLC0wLjY3MDEyIDEuMzY2NDIsLTAuNDAxODUgMS43ODcxLC0wLjg1ODg2YzAuNDY4OSwtMC41MDkzOSAwLjAzMTc2LC0xLjcwNjkzIDAuNzc4NjgsLTEuNzA2OTNjMC45NDg1MSwwIDAuNDgyMzUsMC45NzY5OCAwLjkyNjQsMS43NDIzYzAuMjE5MzQsMC4zNzgwNCAxLjYzOTM5LDAuMzU0OTUgMS42MzkzOSwwLjgyMzQ5YzAsMS4wMTYzIC0wLjY4MzM1LDAuNDE1MjMgLTEuNTQwMzEsMC44MzA3MWMtMC4zMzc5MiwwLjE2MzgzIC0wLjYyNDc0LDEuNzM1MDggLTEuMDI1NDgsMS43MzUwOGMtMC41ODk0MSwwIC0wLjM0NjQ4LC0xLjQ5MzE5IC0wLjc3OTcsLTEuODI3MzFjLTAuNjA4MzIsLTAuNDY5MTggLTEuNzg2MDksMC4wODkxNyAtMS43ODYwOSwtMC43Mzg0N3oiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9nPjxnPjxwYXRoIGQ9Ik0xODAuMDc1MjQsMTcxLjg5NTQzYzIuMTI4MzQsLTE0LjQ4MDM2IDEzLjkzMDM3LC0yOC42NDI4MSAyNS4zMzkzMiwtMzMuMjM0MTdjMTYuMzkzMjMsLTYuNTk3MTkgMzQuMDcxODQsLTIuMzIxNDcgMzQuMDcxODQsLTIuMzIxNDdsMC4xNjI4NywxNy41MTM5NmMwLDAgLTE3LjE1NzIyLC0wLjE3OTQ3IC0yOS40MzA3OCw0LjU4NDA0Yy03LjIxNzUyLDIuODAxMiAtMTIuMDkyMDUsOC4yOTMwMSAtMTIuNTQ4MTgsMTMuOTA3MDRjLTAuNzI1NzYsOC45MzI0NyAtMi4xODA2NywyNC41NzQyIDYuMjUwOTgsMzMuNDc3MjFjNS4xMTQ0LDUuNDAwMzIgMjMuNjczNzUsNi41ODY3OSAyMy42NzM3NSw2LjU4Njc5bC0wLjM0OTQ1LC0xOC44OTcxNGwtMjAuMDkxMzQsMC40NjgzM2wwLjY3Njg3LC0xOS45Mzg1bDQxLjE4MTkzLC0wLjYyNTUybC0wLjUyNjY2LDU4LjkyMzc5bC0zMS40NjIxNCwwLjM2MzA3YzAsMCAtNDYuMDQwNSwxLjA0NzE0IC0zNi45NDkwMywtNjAuODA3NDN6IiBmaWxsPSJ1cmwoI2NvbG9yLTQpIiBzdHJva2U9IiM0MjQyNDIiIHN0cm9rZS13aWR0aD0iNSIvPjxwYXRoIGQ9Ik0xNzQuNzQxOTEsMTY1LjU2MjFjMi4xMjgzNCwtMTQuNDgwMzYgMTMuOTMwMzcsLTI4LjY0MjgxIDI1LjMzOTMyLC0zMy4yMzQxN2MxNi4zOTMyMywtNi41OTcxOSAzNC4wNzE4NCwtMi4zMjE0NyAzNC4wNzE4NCwtMi4zMjE0N2wwLjE2Mjg3LDE3LjUxMzk2YzAsMCAtMTcuMTU3MjIsLTAuMTc5NDcgLTI5LjQzMDc4LDQuNTg0MDRjLTcuMjE3NTIsMi44MDEyIC0xMi4wOTIwNSw4LjI5MzAxIC0xMi41NDgxOCwxMy45MDcwNGMtMC43MjU3Niw4LjkzMjQ3IC0yLjE4MDY3LDI0LjU3NDIgNi4yNTA5OCwzMy40NzcyMWM1LjExNDQsNS40MDAzMiAyMy42NzM3NSw2LjU4Njc5IDIzLjY3Mzc1LDYuNTg2NzlsLTAuMzQ5NDUsLTE4Ljg5NzE0bC0yMC4wOTEzNCwwLjQ2ODMzbDAuNjc2ODcsLTE5LjkzODVsNDEuMTgxOTMsLTAuNjI1NTJsLTAuNTI2NjYsNTguOTIzNzlsLTMxLjQ2MjE0LDAuMzYzMDdjMCwwIC00Ni4wNDA1LDEuMDQ3MTQgLTM2Ljk0OTAzLC02MC44MDc0M3oiIGZpbGw9InVybCgjY29sb3ItNSkiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSI1Ii8+PGcgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiPjxwYXRoIGQ9Ik0yMTYuODMzMzMsMTM4LjE2NjY3YzAsLTMuNTg5ODUgMi45MTAxNSwtNi41IDYuNSwtNi41YzMuNTg5ODUsMCA2LjUsMi45MTAxNSA2LjUsNi41YzAsMy41ODk4NSAtMi45MTAxNSw2LjUgLTYuNSw2LjVjLTMuNTg5ODUsMCAtNi41LC0yLjkxMDE1IC02LjUsLTYuNXoiIGZpbGw9InVybCgjY29sb3ItNikiLz48cGF0aCBkPSJNMjIyLjUzNTA5LDEzNi4yMjgwN2MwLC0wLjY3MDEyIDEuMzY2NDIsLTAuNDAxODUgMS43ODcxLC0wLjg1ODg2YzAuNDY4OSwtMC41MDkzOSAwLjAzMTc1LC0xLjcwNjkzIDAuNzc4NjgsLTEuNzA2OTNjMC45NDg1MSwwIDAuNDgyMzUsMC45NzY5OCAwLjkyNjQsMS43NDIzYzAuMjE5MzQsMC4zNzgwNCAxLjYzOTM5LDAuMzU0OTUgMS42MzkzOSwwLjgyMzQ5YzAsMS4wMTYzIC0wLjY4MzM0LDAuNDE1MjMgLTEuNTQwMzEsMC44MzA3MWMtMC4zMzc5MiwwLjE2MzgzIC0wLjYyNDc0LDEuNzM1MDggLTEuMDI1NDgsMS43MzUwOGMtMC41ODk0MSwwIC0wLjM0NjQ4LC0xLjQ5MzE5IC0wLjc3OTcsLTEuODI3MzFjLTAuNjA4MzIsLTAuNDY5MTggLTEuNzg2MDksMC4wODkxNyAtMS43ODYwOSwtMC43Mzg0N3oiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9nPjxnPjxwYXRoIGQ9Ik0yNTUuODE5NzMsMjMyLjUwNjQ2bDU5LjE1ODcxLC04OS44OTUyNmMwLDAgMy40NDE2MywtMTAuOTE4OTMgMTUuMDgwMTgsLTEwLjQ2ODI3YzkuNTYyMywwLjM3MDI2IDcuOTYyNTUsNjAuOTg4OTggNy45NjI1NSw2MC45ODg5OGMwLDAgOC44OTc1MiwtMTMuNTUxOTIgMTcuNzMwMDEsLTI4LjI2Njg0YzkuNTQxNTQsLTE1Ljg5NjIyIDE1LjQyNDY5LC0zMi4wNjYxNiAyNS42NTM4NywtMzIuNjMwNTljMy45MjgxOCwtMC4yMTY3NSAxMC40MzM2OSw5LjM3NzY1IDEwLjQzMzY5LDkuMzc3NjVsMC42MDgxMSw4OC4zODI5NmwtMTkuNzk1NSwwLjU3NTAzbDEuMTY4MzksLTYwLjA2MzY2bC0yOC40NjU3OCw0NS41MjY5MWMwLDAgLTEzLjAzNzQ5LDE2LjI4MDYxIC0xNy4xMzE1NywxNi4xMjE3MmMtOS4zMjA3NiwtMC4zNjE3NSAtMTIuOTM5MzUsLTExLjM1ODE4IC0xMi45MzkzNSwtMTEuMzU4MThsLTAuNDY3MzgsLTQ3LjY1MjgzbC0zNi45OTU5Myw1OS4zNjIzOHoiIGZpbGw9InVybCgjY29sb3ItNykiIHN0cm9rZT0iIzQyNDI0MiIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZD0iTTI1Mi4xNTMwNywyMjcuNTA2NDZsNTkuMTU4NzEsLTg5Ljg5NTI2YzAsMCAzLjQ0MTYzLC0xMC45MTg5MyAxNS4wODAxOCwtMTAuNDY4MjdjOS41NjIzLDAuMzcwMjYgNy45NjI1NSw2MC45ODg5OCA3Ljk2MjU1LDYwLjk4ODk4YzAsMCA4Ljg5NzUyLC0xMy41NTE5MiAxNy43MzAwMSwtMjguMjY2ODRjOS41NDE1NCwtMTUuODk2MjIgMTUuNDI0NjksLTMyLjA2NjE2IDI1LjY1Mzg3LC0zMi42MzA1OWMzLjkyODE4LC0wLjIxNjc1IDEwLjQzMzY5LDkuMzc3NjUgMTAuNDMzNjksOS4zNzc2NWwwLjYwODExLDg4LjM4Mjk2bC0xOS43OTU1LDAuNTc1MDNsMS4xNjgzOSwtNjAuMDYzNjZsLTI4LjQ2NTc4LDQ1LjUyNjkxYzAsMCAtMTMuMDM3NDksMTYuMjgwNjEgLTE3LjEzMTU3LDE2LjEyMTcyYy05LjMyMDc2LC0wLjM2MTc1IC0xMi45MzkzNSwtMTEuMzU4MTggLTEyLjkzOTM1LC0xMS4zNTgxOGwtMC40NjczOCwtNDcuNjUyODNsLTM2Ljk5NTkzLDU5LjM2MjM4eiIgZmlsbD0idXJsKCNjb2xvci04KSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjUiLz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCI+PHBhdGggZD0iTTM3MS4xNjY2NywxMzkuMTY2NjdjMCwtMy41ODk4NSAyLjkxMDE1LC02LjUgNi41LC02LjVjMy41ODk4NSwwIDYuNSwyLjkxMDE1IDYuNSw2LjVjMCwzLjU4OTg1IC0yLjkxMDE1LDYuNSAtNi41LDYuNWMtMy41ODk4NSwwIC02LjUsLTIuOTEwMTUgLTYuNSwtNi41eiIgZmlsbD0idXJsKCNjb2xvci05KSIvPjxwYXRoIGQ9Ik0zNzYuODY4NDIsMTM3LjIyODA3YzAsLTAuNjcwMTIgMS4zNjY0MywtMC40MDE4NSAxLjc4NzExLC0wLjg1ODg2YzAuNDY4OSwtMC41MDkzOSAwLjAzMTc1LC0xLjcwNjkzIDAuNzc4NjgsLTEuNzA2OTNjMC45NDg1MSwwIDAuNDgyMzYsMC45NzY5OCAwLjkyNjQsMS43NDIzYzAuMjE5MzUsMC4zNzgwNSAxLjYzOTM5LDAuMzU0OTUgMS42MzkzOSwwLjgyMzQ5YzAsMS4wMTYzIC0wLjY4MzM1LDAuNDE1MjMgLTEuNTQwMzEsMC44MzA3MWMtMC4zMzc5MSwwLjE2MzgzIC0wLjYyNDc0LDEuNzM1MDggLTEuMDI1NDgsMS43MzUwOGMtMC41ODk0MSwwIC0wLjM0NjQ4LC0xLjQ5MzE5IC0wLjc3OTY5LC0xLjgyNzMyYy0wLjYwODMxLC0wLjQ2OTE3IC0xLjc4NjEsMC4wODkxNyAtMS43ODYxLC0wLjczODQ3eiIgZmlsbD0iI2ZmZmZmZiIvPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4=">-->
			<center id="text">
				<h1 style="
					position: fixed;
					top: 0;
					left: 0;
					width: 100vw;
					height: 100vh;
					text-align: center;
					line-height: 100vh;
					color: white;
					font-family: arial;
				">
				Click to play ${title}!</h1>
			</center>
			<center style="width: 100%;height: 100vh;position: fixed;top: 0;left: 0;">
				<canvas id="gameScreen" hidden width=600 height=360 style="image-rendering:pixelated;"></canvas>
			</center>
		</div>
		<!--TODO: replace the vm src with the compressed vm-->
		<script>eval(atob(${JSON.stringify(btoa(loader.read("src/vm-build.js")))}));</script>
		<script>
			var gs = document.getElementById("gameScreen");
			setInterval(() => {
				gs.style.backgroundColor = "white";
				var screenScale = (window.innerHeight)/360;
				gs.style.width = (screenScale*600)-0+"px";
				gs.style.height = (screenScale*360)+"px";
				gs.width = gs.getBoundingClientRect().width;
				gs.height = gs.getBoundingClientRect().height;
			},1);
			document.getElementById("app").hidden = false;
			document.getElementById("loading").hidden = true;
			var file = (${code});
			document.title = ${JSON.stringify(title)};
			document.onclick = function () {
				renderer.canvas = document.getElementById("gameScreen");
				vm.code = "";
				vm.attachRenderer(renderer);
				vm.attachAudioEngine(audioEngine);
				function readFiles(files) {
					var index = 0;
					while (index < files.length) {
						window.vm.project.resources[files[index].name] = {
							name:files[index].name,
							data:files[index].data,
							type:files[index].type
						};
						index += 1;
					}
				}
				function getMousePos(canvas, evt) {
					var rect = canvas.getBoundingClientRect();
					return {
						x: ((evt.clientX - rect.left) / (rect.right - rect.left) * renderer.width)/2,
						y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * renderer.height
					};
				}
				document.getElementById("gameScreen").onmousemove = function (event) {
					var pos = getMousePos(document.getElementById("gameScreen"), event);// get adjusted coordinates as above
					var x = Math.round(pos.x/1)-(renderer.width/2)/2;
					var y = Math.round(pos.y*-1)+(renderer.height/2);
					event.preventDefault();
					vm.setMousePos({
						x:x,
						y:y
					});
				}
				document.getElementById("gameScreen").onmousedown = function (event) {
					event.preventDefault();
					vm.setMouseDown(true);
				}
				document.body.onmouseup = function (event) {
					event.preventDefault();
					vm.setMouseDown(false);
				}
				document.body.onkeydown = function (event) {
					vm.simulateKey({
						key:event.key,
						down:true
					});
					event.preventDefault();
				};
				document.body.onkeyup = function (event) {
					vm.simulateKey({
						key:event.key,
						down:false
					});
				};
				readFiles(file.files)
				vm.code = file.code;
				document.getElementById("gameScreen").hidden = false;
				//document.getElementById("logo").hidden = true;
				document.getElementById("text").hidden = true;
				vm.start();
				document.onclick = null;
			};
		</script>
	</body>
</html>`;
    var a = document.createElement("a");
    const contents = html;
    const blob = new Blob([contents], {
        type: 'html'
    });
    a.href = URL.createObjectURL(blob);
    a.download = title + ".html";
    a.click();
}
