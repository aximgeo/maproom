if (Meteor.isClient) {
    var map;
    Meteor.startup(function () {
        map = new GMaps({
            div: '#mapDiv',
            lat: 35.96,
            lng: -83.92,
            zoom: 2
        });

        //map.setCenter(35.96, -83.92);

    })

    Template.map.rendered = function () {
        var that = this;
        var usersInRoomCursor;
        var users;
        var room;
        if (!that.handle) {
            that.handle = Deps.autorun(function () {
                try {
                    var roomId = Session.get('roomId');
                    room = Rooms.findOne({_id: roomId});
                    var markers = [];
                    if (room && Meteor.users) {
                        usersInRoomCursor = Meteor.users.find({_id: { $in: room.userIds }});

                       /* //Listen for new users in the room and zoom to fit
                        usersInRoomCursor.observeChanges({
                            added: map.fitZoom(),
                            removed: map.fitZoom()
                        }); */


                        $.each(usersInRoomCursor.fetch(), function (index, roomUser) {
                            console.log(roomUser.emails[0].address + ' ' + roomUser.location.lat + ' ' + roomUser.location.lng);
                            markers.push({
                                lat: roomUser.location.lat,
                                lng: roomUser.location.lng,
                                title: roomUser.emails[0].address,
                                infoWindow: {
                                    content: roomUser.emails[0].address + ' said:  Insert chat message here!!!!!!!'
                                }
                            });
                        });
                    }
                    else
                        console.log('query for rooomId ' + roomId + ' did not return any records. Rooms contains ' + Rooms.find({}).fetch().length);


                    console.log('replacing markers');
                    map.removeMarkers();
                    map.addMarkers(markers);
                    

                    //var location = Session.get('location');
                    if(Meteor.user() && location)
                        //map.setCenter(location.lat, location.lng);
                        map.fitZoom();
                    else
                        map.setCenter(0,0);
                        
                }
                catch (e) {
                    console.log('oh noes! ' + e);
                    throw e;
                }
            });
        }
    }

    Template.map.destroyed = function () {
        this.handle && this.handle.stop();
    };
}

