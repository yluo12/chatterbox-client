// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // create message object
    // define successCB
    // Parse.create(message, arguments)
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    // username, message, roomnumber
    var message = {
      username: App.username,
      text: FormView.$form.find('#message').val()
    };

    Parse.create(message, function (data) {
      Messages.update(data);
    });

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};