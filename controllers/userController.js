var mongoose = require('mongoose');
var ProspectUser = mongoose.model('prospectUser');

module.exports.getUsers = function (req, res) {
  /*ProspectUser.findOne({ 'name': 'Alfred' },'name lastName Address phoneNumber' ,function (err, data) {
  if (err)
    return handleError(err);
  console.log('%s %s is a %s.', data); // Space Ghost is a talk show host.
  res.status(200);
  res.json({"prospect" : data});
})*/

ProspectUser.find({ },'name lastName Address phoneNumber' ,function (err, data) {
if (err)
  return handleError(err);
console.log('%s %s is a %s.', data); // Space Ghost is a talk show host.
res.status(200);
res.json({"prospect" : data});
})
};
