# MapRoom - A real-time location sharing proof-of-concept 

![Maproom Screenshot](https://raw.githubusercontent.com/gisinc/maproom/master/Maproom.png)

## Description

The easiest and most user-friendly web-based location sharing application conceivable.  Upon entering the site users are given their location on a map and unique URL that can be shared.  Anyone else who browses to the URL will appear on the map.  MapRoom uses the HTML5 Geolocation API so there are *absolutely no apps, addons or plugins to install.*  All you need is a reasonably modern browser.  This application as well as the HTML5 Geolocation API in general work best on mobile.
## Requirements

MapRoom is built on top of the Meteor web application framework. **Meteor is currently only available on Linux and OS X**. Install it by running:

     > curl https://install.meteor.com/ | sh

## Usage

Run the MapRoom server by executing: 

     > cd <checkout-directory/maproom/>
     > meteor run app/maproom.js

*Note: you need to be in the directory that contains the `/.meteor/` directory when starting the app.*

The application will be hosted at `http://localhost:3000`. To use the application:

1. Sign-in or Create a new account
2. Share the newly created URL with your friends

*Note: This proof of concept has no built in security. Anyone with access to the URL will be able to see the shared locations.*

## License

The MIT License (MIT)

Copyright (c) 2014 Geographic Information Services, Inc. (GISi)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.