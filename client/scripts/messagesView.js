// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(data) {
    // TODO: Render _all_ the messages.
    for (var id in data) {
      MessagesView.renderMessage(data[id]);
    }
  },

  renderMessage: function(message) {
    // console.log(message);
    // var template = MessageView.render;
    // var newMessage = template({message});
    // prepend to chats container
    var $newMessage = $(MessageView.render(message));
    MessagesView.$chats.prepend($newMessage);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }


};