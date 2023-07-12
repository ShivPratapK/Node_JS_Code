const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/ttchannel");


/*----------  Requiring validator throush npm package  ----------*/
const validator = require('validator');


/*----------  Creating Schema  ----------*/
const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: {
    type: String,
    ennum: ['Front End', 'Back End', 'Data Base'] //enum gives the option and forces to select only those values which are given in options
  },
  
  /*----------  Creating Custom validator  ----------*/
  videos: {
    type: Number,
    validate(value){
      if(value<0){
        throw new Error('videos count should not be negative')
      }
    }
  },
  author: String,
  
  /*----------  Validating Email through Validator Module  ----------*/
  email: {
    type: String,
    required: true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error('Email is invalid');
      }
    }
  },
  active: Boolean,
});


/*----------  Collection creation and connecting schema  ----------*/
const Playlist = new mongoose.model("Playlist", playlistSchema);


/*----------  Create Document  ----------*/
const reactPlaylist = new Playlist({
  name: "React JS",
  ctype: "Front End",
  videos: 80,
  author: "Shiv Pratap",
  active: true,
});

/*----------  Saving document  ----------*/
//reactPlaylist.save();


/*----------  Crating and Saving document using Async and Await  ----------*/
const createDocument = async () => {
  try {
    const nodeJsPlaylist = new Playlist({
      name: "Node JS",
      ctype: "Back End",
      videos: 80,
      author: "Shiv Pratap",
      active: true,
    });
    const result = await nodeJsPlaylist.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
//createDocument();


/*----------  Creating Multiple Documents  ----------*/
const multiDocument = async () => {
  try {
    const reactJsPlaylist = new Playlist({
      name: "React JS",
      ctype: "Front End",
      videos: 80,
      author: "Shiv Pratap",
      active: true,
    });

    const mongoPlaylist = new Playlist({
      name: "MongoDB",
      ctype: "Data Base",
      videos: 80,
      author: "Shiv Pratap",
      active: true,
    });

    const mongoosePlaylist = new Playlist({
      name: "Mongoose",
      ctype: "Data Base",
      videos: 80,
      author: "Shiv Pratap",
      active: true,
    });

// insertMany function will work with collection name not with documents name
    const result = await Playlist.insertMany([
      reactJsPlaylist,
      mongoPlaylist,
      mongoosePlaylist,
    ]);
    console.log(result);
  } 
  catch (err) {
    console.log(err);
  }
};
//multiDocument();


/*----------  Reading and filtering documents ----------*/
const getDocument = async() =>{
  try{
      //getting full document with author 
      const result = await Playlist
      .find({author: 'Shiv Pratap'})
      .countDocuments()
      .sort({name: 1}); // for ascending keep the value 1 and for descending use -1
      console.log(result);
      //getting only name field with ctype frontend
      const resultSelected = await Playlist
      .find({ctype: 'Front End'})
      .select({name: 1});
      console.log(resultSelected);
  }
  catch(err){
    console.log(err);
  }
}
getDocument();


/*----------  Updating the document  ----------*/
const updateDocument = async(_id) =>{
  try{
    const result = await Playlist.findByIdAndUpdate({_id},
      {$set: {author: 'Aayush'}}
    );
    console.log(result);
  }
  catch(err){
    console.log(err);
  }
}
let id = "64aa728ac18f9369666a8736";
updateDocument(id);


/*----------  Deleting the document  ----------*/
const deleteDocument = async(_id) =>{
  try{
    const result = await Playlist.findByIdAndDelete({_id});
    console.log(result);
  }
  catch(err){
    console.log(err);
  }
}
let idOfDeletingDoc = "64aa7299d80e294c48f52712";
deleteDocument(idOfDeletingDoc);

