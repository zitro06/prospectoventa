var mongoose = require( 'mongoose' );
var ProspectUserSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  Address: String,
  phoneNumber: String
});
mongoose.model( 'prospectUser',  ProspectUserSchema,'prospectUser' );  
