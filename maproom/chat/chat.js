if (Meteor.isClient) {
	Template.chatRoom.helpers({
         messages : function () {
            var results = [];
            var roomId = Session.get('roomId');
            if(roomId != null){
                var chats = Chats.find({roomId: roomId}).fetch();

                for (var i = 0; i < chats.length; i++) {
                    var userDisplayName= "";
                    // Get the email address of the person who posted the current message:
                    var users = Meteor.users.find({_id: chats[i].userId}).fetch();
                    if(users.length > 0){
                        if(users[0].emails && users[0].emails.length > 0) {
                            userDisplayName = users[0].emails[0].address;
                        }
                        else {
                            userDisplayName= users._id;
                        }
                    }
                    results.push({name: userDisplayName, message: chats[i].message});
                }
            }
            return results;
        }
    });
	
	Template.chatRoom.events = {	
		'click #sendButton' : function() {
			var roomId = Session.get('roomId');
			Chats.insert({roomId: roomId, userId: Meteor.userId(), message:$('#newMessageText').val()});
			
			// clear the box after we send:
			$('#newMessageText').val('');
		},
		
		'keydown #newMessageText' : function(e) {
			if(e.keyCode==13)
			{
				$('#sendButton').click();
			}
		}
	}
	
	Template.chatRoom.rendered = function() {
		try{
			var objDiv = $('#chatWindow');
			objDiv.scrollTop = objDiv.scrollHeight;	
			
			$("#newMessageText").focus();
		}
		catch(err)
		{
			alert (err);
		}
	}	
}


