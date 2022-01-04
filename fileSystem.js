const fs = require("fs");

//file Write
fs.writeFile(
  "demo.txt",
  "I am Mahfuz Alam ,I am 25 year old,I am completely BSC Engineering",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      //   console.log("Successfully Done");
    }
  }
);

//file Append(add something main previous file new text add )
fs.appendFile(
  "demo.txt",
  "Recently I am Searching Development site job and I am planning for 3 project done in January Month",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      //   console.log("Successfully Done");
    }
  }
);

//file read
fs.readFile("demo.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    // console.log(data);
  }
});

//delete file
fs.unlink("demo.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file deleted successfully");
  }
});
