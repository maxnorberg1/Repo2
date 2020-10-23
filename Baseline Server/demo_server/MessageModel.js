const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    email: String,
    messageType: String
});
  
const Message = mongoose.model('Message', messageSchema);


exports.createMessage = (email, messageType) => {
    var person = new Person({
        email: email, 
        messageType: messageType
    })

    return message
}