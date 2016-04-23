PROPERTY_SUFFIX = {
  "height": "px",
  "width": "px",
  "top": "px",
  "bottom": "px",
  "left": "px",
  "right": "px",
}
ELEMENTS = {
  "elementIndex": 0,
}
//Generate Initial Element
var selectedElementId = "hook";

// Adjust Properties
function adjustProperty(event, property, value) {
  if (selectedElementId == 'hook'){return}
  ELEMENTS[selectedElementId].style[property] = value;
  var div = document.getElementById(selectedElementId);
  value = PROPERTY_SUFFIX[property] ? value+PROPERTY_SUFFIX[property] : value
  div.style[property] = value;
}

// Special Case
function adjustRGBA(){
  if (selectedElementId == 'hook'){return}
  var div = document.getElementById(selectedElementId);
  var red = document.getElementById('red').value;
  var green = document.getElementById('green').value;
  var blue = document.getElementById('blue').value;
  var opacity = document.getElementById('opacity').value / 100;
  var rgba = "rgba("+red+","+green+","+blue+","+opacity+")";
  ELEMENTS[selectedElementId].style['background-color'] = rgba;
  div.style['background-color'] = rgba;
  ELEMENTS[selectedElementId].generateStyleString();
}

//Handle adding an element, be it child or sibling
function addElement(type){
  //Find the current element to base relationship off of
  var currentElement = document.getElementById(selectedElementId)
  //Increment the elementIndex
  ELEMENTS['elementIndex']++;
  //Create a new instance of Element
  var elementName = "element" + ELEMENTS['elementIndex'];
  ELEMENTS[elementName] = new Element(elementName);
  element = ELEMENTS[elementName];
  //Add default styling to element, assign an id, and add the selected element event listener
  var newEl = element.generateStyle();
  newEl.id = elementName;
  newEl.addEventListener("click", selectElement);

  //If the element is a sibling, append parent, else append self
  if(type == 'sibling' && selectedElementId != 'hook'){
    currentElement.parentElement.appendChild(newEl);
  } else {
    currentElement.appendChild(newEl);
  }
}
selectElement = function selectElement(event) {
  selectedElementId = event.target.id;
  element = ELEMENTS[selectedElementId];
  styleString = element.generateStyleString();

}

Element.prototype.generateStyle = function(){
  var styleList = this.style;
  var div = document.getElementById(this.name) ? document.getElementById(this.name) : document.createElement("div");
  styles = Object.keys(styleList);
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
Element.prototype.generateStyleString = function(){
  var styleList = this.style;
  var string = selectedElementId+" {";
  styles = Object.keys(styleList);
  for (var i = 0; i < styles.length; i++) {
    if (styleList[styles[i]]){
      var value = styleList[styles[i]];
      var property = styles[i];
      value = PROPERTY_SUFFIX[property] ? value+PROPERTY_SUFFIX[property] : value
      string += property+": "+value+";";
      string += "\r\n";
    }
  }
  string += "}";
  output = document.getElementById('output');
  output.innerHTML = string;
}
function Element(elementName){
  this.name = elementName,
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
