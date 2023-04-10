// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  // id: {username:username, message:text}
  _data: {},
  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  getMessagesObj: function (chat) {
    return {username: chat.username, text: chat.text};
  },

  update: function (data) {
    for (var chat of data) {
      if (Messages._data[chat.message_id] === undefined) {
        Messages._data[chat.message_id] = {username: chat.username, text: chat.text, roomname: chat.roomname};
      }
    }
    // var messages = Messages.getMessagesObj(Messages._data);
    MessagesView.render(Messages._data);
  },
};
