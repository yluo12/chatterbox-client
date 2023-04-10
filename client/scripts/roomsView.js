// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.$select.empty();
    for (var roomname of Rooms.items()) {
      RoomsView.renderRoom(roomname);
    }
    RoomsView.$select.val(Rooms.selected);
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    var $room = $('<option>');
    $room.text(roomname);
    RoomsView.$select.append($room);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    Rooms.selected = RoomsView.$select.val();
    MessagesView.render(Messages._data);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var newRoom = prompt('Enter a roomname');
    if (newRoom) {
      Rooms.add(newRoom);
      RoomsView.render();
      MessagesView.render(Messages._data);
    }

  }

};
