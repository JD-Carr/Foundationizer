var fs = require('fs');

function World(inpName){
  this.worldName = inpName;

  this.changeName = function (newName) {
    this.worldName = newName;
  }
};

const newWorld = new World("TestWorld");

console.log(newWorld.worldName);

saveWorld(newWorld.worldName);

//Create worlds dir and save the JSON file to it.
//Later create worlds dir at install/first run.
function saveWorld(name){
  fs.mkdir("./worlds", (err) => {
    if (err) {
      if (err.code === 'EEXIST') {
        return console.error('worlds directory already exist');
      }
      throw err;
    } else {
      console.log("Worlds directory successfully created.");
    }
  });

  fs.open("./worlds/" + name + ".json", 'wx', (err, fd) => {
    if (err) {
      if (err.code === 'EEXIST') {
        return console.error('newworld.json already exists');
      }
      throw err;
    } else {
      fs.writeFileSync("./worlds/" + name + ".json", JSON.stringify(newWorld));
      console.log(name + ".json successfully created.");
    }
  });
}
