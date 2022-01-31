const User = require("../model/schema");

exports.update = async (req, res) => {
  try {
    const result = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: { result },
    });
  } catch (err) {
    res.status(400).json({
      status: fail,
      message: err,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
