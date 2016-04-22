PROPERTY_SUFFIX = {
  "height": "px",
  "width": "px",
  "top": "px",
  "bottom": "px",
  "left": "px",
  "right": "px",
}
ELEMENTS = {
  "elementIndex": 1,
}

var selectedElementId = "element1";

function adjustProperty(event, property, value) {
  var div = document.getElementById(selectedElementId);
  value = PROPERTY_SUFFIX[property] ? value+PROPERTY_SUFFIX[property] : value
  div.style[property] = value;
}

function adjustRGBA(){
  var div = document.getElementById(selectedElementId);
  var red = document.getElementById('red').value;
  var green = document.getElementById('green').value;
  var blue = document.getElementById('blue').value;
  var opacity = document.getElementById('opacity').value / 100;
  var rgba = "rgba("+red+","+blue+","+green+","+opacity+")";
  div.style['background'] = rgba;
}

function addElement(type){
  ELEMENTS['elementIndex']++;
  var elementName = "element" + ELEMENTS['elementIndex'];
  var div = document.createElement("div");
  div.id = elementName;
  var hook = document.getElementById("hook");
  ELEMENTS[elementName] = new Element();
  div = generateStyle(elementName, div);
  div.addEventListener("click", function(event){
    selectedElementId = event.target.id;
  });
  hook.appendChild(div);
}

function selectElement(event) {
  selectedElementId = event.target.id;
}

generateStyle = function (elementName, div){
  var styleList = ELEMENTS[elementName].style;
  styles = Object.keys(styleList);
  styleString = "";
  for (var i = 0; i < styles.length; i++) {
    if (styleList[styles[i]]){
      var value = styleList[styles[i]];
      var property = styles[i];
      value = PROPERTY_SUFFIX[property] ? value+PROPERTY_SUFFIX[property] : value
      div.style[property] = value;
    }
  }
  return div;
}

function Element(){
  this.style = {
    "accelerator": false,
    "azimuth": false,
    "background": false,
    "background-attachment": false,
    "background-color": "red",
    "background-image": false,
    "background-position": false,
    "background-position-x": false,
    "background-position-y": false,
    "background-repeat": false,
    "behavior": false,
    "border": false,
    "border-bottom": false,
    "border-bottom-color": false,
    "border-bottom-style": false,
    "border-bottom-width": false,
    "border-collapse": false,
    "border-color": false,
    "border-left": false,
    "border-left-color": false,
    "border-left-style": false,
    "border-left-width": false,
    "border-right": false,
    "border-right-color": false,
    "border-right-style": false,
    "border-right-width": false,
    "border-spacing": false,
    "border-style": false,
    "border-top": false,
    "border-top-color": false,
    "border-top-style": false,
    "border-top-width": false,
    "border-width": false,
    "bottom": false,
    "caption-side": false,
    "clear": false,
    "clip": false,
    "color": false,
    "content": false,
    "counter-increment": false,
    "counter-reset": false,
    "cue": false,
    "cue-after": false,
    "cue-before": false,
    "cursor": false,
    "direction": false,
    "display": false,
    "elevation": false,
    "empty-cells ": false,
    "filter": false,
    "float": false,
    "font": false,
    "font-family": false,
    "font-size": false,
    "font-size-adjust": false,
    "font-stretch": false,
    "font-style": false,
    "font-variant": false,
    "font-weight": false,
    "height": "300",
    "ime-mode": false,
    "include-source": false,
    "layer-background-color": false,
    "layer-background-image": false,
    "layout-flow": false,
    "layout-grid": false,
    "layout-grid-char": false,
    "layout-grid-char-spacing": false,
    "layout-grid-line": false,
    "layout-grid-mode": false,
    "layout-grid-type": false,
    "left": false,
    "letter-spacing": false,
    "line-break": false,
    "line-height": false,
    "list-style": false,
    "list-style-image": false,
    "list-style-position": false,
    "list-style-type": false,
    "margin": false,
    "margin-bottom": false,
    "margin-left": false,
    "margin-right": false,
    "margin-top": false,
    "marker-offset": false,
    "marks": false,
    "max-height": false,
    "max-width": false,
    "min-height": false,
    "min-width": false,
    "orphans": false,
    "outline": false,
    "outline-color": false,
    "outline-style": false,
    "outline-width": false,
    "overflow": false,
    "overflow-X": false,
    "overflow-Y": false,
    "padding": false,
    "padding-bottom": false,
    "padding-left": false,
    "padding-right": false,
    "padding-top": false,
    "page": false,
    "page-break-after": false,
    "page-break-before": false,
    "page-break-inside": false,
    "pause": false,
    "pause-after": false,
    "pause-before": false,
    "pitch": false,
    "pitch-range": false,
    "play-during": false,
    "position": "relative",
    "quotes": false,
    "-replace": false,
    "richness": false,
    "right": false,
    "ruby-align": false,
    "ruby-overhang": false,
    "ruby-position  ": false,
    "-set-link-source": false,
    "size": false,
    "speak": false,
    "speak-header": false,
    "speak-numeral": false,
    "speak-punctuation": false,
    "speech-rate": false,
    "stress": false,
    "scrollbar-arrow-color": false,
    "scrollbar-base-color": false,
    "scrollbar-dark-shadow-color": false,
    "scrollbar-face-color": false,
    "scrollbar-highlight-color": false,
    "scrollbar-shadow-color": false,
    "scrollbar-3d-light-color": false,
    "scrollbar-track-color": false,
    "table-layout": false,
    "text-align": false,
    "text-align-last": false,
    "text-decoration": false,
    "text-indent": false,
    "text-justify": false,
    "text-overflow": false,
    "text-shadow": false,
    "text-transform": false,
    "text-autospace": false,
    "text-kashida-space": false,
    "text-underline-position": false,
    "top": "0",
    "unicode-bidi": false,
    "-use-link-source": false,
    "vertical-align": false,
    "visibility": false,
    "voice-family": false,
    "volume": false,
    "white-space": false,
    "widows": false,
    "width": "300",
    "word-break": false,
    "word-spacing": false,
    "word-wrap": false,
    "writing-mode": false,
  }
}
