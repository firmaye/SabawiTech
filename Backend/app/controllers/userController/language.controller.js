const db = require("../../models");
const user = db.users;

//get all languages of the selected user 
exports.getAll = async (req,res) => {
    let userId = req.params.id
    try{
      const prevSkill = await user.findById(userId,{language:1})
      res.json(prevSkill)
    }catch(err){
      res.status(400).json({message: err.message})
    }
  };


//get single language 
exports.getSingle = async (req,res) => {
    let userId = req.params.id
    let languageId = req.params.id1
    try{
      const language = await user.find({"user._id": userId,"language._id":languageId},{language:1})
      res.json(language)
    }catch(err){
      res.status(400).json({message: err.message})
    }
  }




//Update language 
exports.update =  async (req,res) => {
  let userId = req.params.id
  let languages = req.body.language
  
  try{
    const addedLanguage = await user.updateOne({_id:userId},{language: languages})  
    res.status(201).json(languages)
  }
    catch(err){
    res.status(400).json({message: err.message})
  }
}

// delete is handled in the frontend 