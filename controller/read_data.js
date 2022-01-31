const User = require("../model/schema");

exports.get_data = async (req, res) => {
  try {
    // const result = await User.find({name:req.body.name});

    const result = await User.findById(req.params.id);

    // const result = await User.find().limit("2");

    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
