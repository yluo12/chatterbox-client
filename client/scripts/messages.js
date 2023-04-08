// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  // id: {username:username, message:text}
  _data: {},
  // {id: text, }
  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  // retrieve: retrieve data from App.data
  // add (username, message)

  update: function (data) { // big array with 100 elements
    // console.log('this is data inside message.update', data);
    for (var chat of data) {
      // not only put everything in data, but need to screen through data()
      // Messages._data[chat.message_id] = chat.text;
      Messages._data[chat.message_id] = {username: chat.username, text: chat.text};
    }
    // invoke add method(add the message to the dom)
    // console.log('this is data inside message.update', Messages._data);
    MessagesView.render(Messages._data);


  },
};



// var regexNewLine = new RegExp('\n', 'g');
//       var regexGreater = new RegExp('>', 'g');
//       var regexLess = new RegExp('<', 'g');
//       var regexBraceL = new RegExp('{', 'g');
//       var regexBraceR = new RegExp('}', 'g');
//       chat.username = chat.username.replaceAll(regexNewLine, '%2Fn');
//       chat.username = chat.username.replaceAll(regexLess, '&lt');
//       chat.username = chat.username.replaceAll(regexGreater, '&gt');
//       chat.username = chat.username.replaceAll(regexBraceL, '&#123');
//       chat.username = chat.username.replaceAll(regexBraceR, '&#125');
//       chat.text = chat.text.replaceAll(regexNewLine, '%2Fn');
//       chat.text = chat.text.replaceAll(regexLess, '&lt');
//       chat.text = chat.text.replaceAll(regexGreater, '&gt');
//       chat.text = chat.text.replaceAll(regexBraceL, '&#123');
//       chat.text = chat.text.replaceAll(regexBraceR, '&#125');
