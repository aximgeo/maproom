Chats = new Meteor.Collection("chats");
Rooms = new Meteor.Collection("rooms");

var theRouter = Backbone.Router.extend({
    routes: {
        ':id': 'handleRoomId',
        '': 'root'
    },

    root: function () {
        var newRoomId = Rooms.insert({userIds: [Meteor.userId()]});
        console.log('new room id = ' + newRoomId);
        this.navigate('/' + newRoomId);
    },
    handleRoomId: function (id) {
        if (Meteor.userId()) {
            var rooms = Rooms.find({_id: id, userIds: Meteor.userId()}).fetch();
            if (rooms.length == 0) {
                Rooms.update(
                    {_id: id},
                    {$push: {userIds: Meteor.userId()}}
                );
            }
        }

        Session.set('roomId', id);
    },

    '*': 'not_found'
});

Router = new theRouter();

if (Meteor.isClient) {
    Backbone.history.start({ pushState: true, root: "" });
    Meteor.subscribe("Users");

    Template.toggleMapChat.events({
        'click .toggleMapChat': function () {
            //alert('click! showMap = ' + Session.get('showMap'));
            if (Session.get("showMap") == undefined) {
                //* The first click will already have the map showing and so the user will be trying to reach the chat screen
                Session.set('showMap', false);
                $('.toggleMapChat').text('Map');
            }
            else {
                if (Session.get('showMap')) {
                    Session.set('showMap', false);
                    $('.toggleMapChat').text('Map');
                }
                else {
                    Session.set('showMap', true);
                    $('.toggleMapChat').text('Chat');
                }
            }

        }
    });

    // Template.phoneBody({showMap: Session.get('showMap'), showChat: Session.get('')})
	
	Template.phoneBody.showMap = function () {
	    console.log('reevaluating showmap');
		if(Session.get('showMap')){
            $('#mapRoomDiv').addClass('visible-phone');
            $('#chatRoomDiv').addClass('hidden-phone');
			$('#mapRoomDiv').removeClass('hidden-phone');
            $('#chatRoomDiv').removeClass('visible-phone');
            return true;
		}
		else
		{
            $('#chatRoomDiv').removeClass('hidden-phone');
            $('#chatRoomDiv').addClass('visible-phone');
            $('#mapRoomDiv').removeClass('visible-phone');
            $('#mapRoomDiv').addClass('hidden-phone');
            return false;
		}
	};


    //Geolocation
    navigator.geolocation.watchPosition(function(position){
        var location = { lng : position.coords.longitude, lat: position.coords.latitude};
        Meteor.users.update({_id: Meteor.userId()}, { $set: { location: location}});
        Session.set("location", location);
    });


}

if(Meteor.isServer){
    Meteor.users.allow({update: function(userId, updt){ return true;}})
    Meteor.publish("Users", function() {return Meteor.users.find({}); })
}

