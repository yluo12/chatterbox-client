// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function(data) {
    // TODO: Render _all_ the messages.
    MessagesView.$chats.empty();
    for (var id in data) {
      if (data[id].roomname === Rooms.selected) {
        var currentChat = Messages.getMessagesObj(data[id]);
        MessagesView.renderMessage(currentChat);
      }

    }
  },

  renderMessage: function(message) {
    var $newMessage = $(MessageView.render(message));
    MessagesView.$chats.prepend($newMessage);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    var username = $(event.target).data('username');

    Friends.toggleStatus(username);
  }


};