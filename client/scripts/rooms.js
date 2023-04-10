// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: new Set(),

  selected: 'lobby',

  items: function () {
    return [...Rooms._data];
  },

  isSelected: function (roomname = 'lobby') {
    return roomname === Rooms.selected;
  },

  update: function (data) {
    for (var chat of data) {
      Rooms._data.add(chat.roomname);
    }
    if (Rooms.selected === null) {
      Rooms.selected = Rooms._data.values().next().value;
    }
    RoomsView.render();
  },

  add: function (roomname) {
    Rooms._data.add(roomname);
    Rooms.selected = roomname;
  }

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

};