'use strict';

console.log('INIT_SELECT_NATION_OPTIONS_START');

const fs = require("fs");

var nationOptionsObject = {};
var nationOptionsKeyArray = [];

var nationOptionsObject = JSON.parse(fs.readFileSync('src/JSONOptions/nation_options.json', "utf-8"));
console.log(nationOptionsObject);

var nationOptionsKeyArray = Object.keys(nationOptionsObject);
console.log(nationOptionsKeyArray);

loadSelectionNationOptions(nationOptionsObject, nationOptionsKeyArray);

//This pulls the data from the JSON files so they can be added to selec option boxes.
function loadSelectionNationOptions (optionsObject, optionsKeyArray) {
  let key;
  for (key in nationOptionsObject) {
    let selectionID = addSelect(sentenceCase(key));
    let value;
    for (value in nationOptionsObject[key]) {
      addSelectionNationOptions(selectionID, nationOptionsObject[key][value]);
    }
  }
}

//This adds the values from the JSON files to select box options.
function addSelectionNationOptions (select_id, text) {
  var select = document.getElementById(select_id);
  select.options[select.options.length] = new Option(text);
}

//This is a thingamajig so I can dynamically read key values from JSON files. Will fix this to instead dynamically CREATE values for selection options.
function sentenceCase (keyStr) {
  if ((keyStr===null) || (keyStr===''))
  return false;
  else
  var str = keyStr.toString();

  return keyStr.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

//This is a thingamajig so I can dynamically read key values from JSON files. Will fix this to instead dynamically CREATE values for selection options.
function addSelect (str) {
  var strPrefix =  "selectNation";
  var res = strPrefix.concat(str);
  return res;
}

console.log('INIT_SELECT_NATION_OPTIONS_END');
