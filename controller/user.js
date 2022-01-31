const User = require("../model/schema");

exports.userData = (req, res) => {
  const userInfo = User({
    name: req.body.name,
    surname: req.body.surname,
    mob_no: req.body.mob_no,
  });

  userInfo
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
