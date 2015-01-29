To Do List
===========

This code has not been worked on in a while, so libraries are out of date.  Among the first things to be done:

1. Upgrade to the latest version of Meteor
1. The UI was written with Bootstrap 2 and will need to be updated

Bugs to be fixed:

1. When first browsing to the site the session creation isn't quite right and the user does not appear on the map until the map is refreshed

New features to be added:

1. Ability for user who created the room to kick other people off
1. Ability to change user name
1. Users of computers that do not have built-in GPS (such as laptops or desktops) will appear wherever the ISP is located.  The application should provide the users with some way to enter their address into the web application to correct the placement of the pin.
1. The application currently uses Google Maps without an API key.  It should be switched to another basemap provider.