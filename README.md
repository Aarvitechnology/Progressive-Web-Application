# Progressive Web Application
Provide modern Web capabilities to offer users a very similar kind of experience to a native application

## [See It In a Live Application](https://aarvitech.com/Research/PWA/pwa-examples-master/a2hs/)

###### Progressive Web Application Use
1. Users can install a progressive web app to their home screen and launch it just like a native app. 
2. we can make a website accessible when you have <b>no internet connection</b>, to make it <b>look</b> like a <b>native app</b> and even fill out forms on a website when you have no connection and <b>after connection</b> is made your changes will be synced with the back-end <b>in the background</b>.
3.  However, the app is launched into a <b>pseudo-app frame that has some restrictions and only allows access to pages that are sub-paths of the initial path of the progressive web app</b>. They also must be served over HTTPS.
4. The core of a progressive web app is the <b>service worker</b>
    - service worker : a client-side JavaScript daemon. 
    - </b>Follow some  rules and restrictions of progressive web apps</b>.
    - </b>progressive web app updates are fetched by a service worker following standard HTTP caching rules</b>
5. to convert your existing website into a progressive web app , consider following steps : 
  1. Create an app manifest .
  2. Add it to your base HTML template (index.html)
      ```html
      <link rel="manifest" href="manifest.json">
      <meta name="theme-color" content="#488aff">
      ```
  3. My PWA's index.html includes the following iOS specific meta tags:
      Note : Add viewport-fit=cover to your "viewport" meta tag (to fix the iPhone X "notch" issue) :
      ```html
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-title" content="Brew">

      <meta name="apple-mobile-web-app-status-bar-style" content="black">

      <link rel="apple-touch-icon" sizes="152x152" href="apple-touch-icon-ipad.png" type="image/png">
      <link rel="apple-touch-icon" sizes="167x167" href="apple-touch-icon-ipad-retina.png" type="image/png">
      <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon-iphone-retina.png" type="image/png">

      <link rel="mask-icon" href="assets/images/icons/safari-pinned-tab.svg" color="#5bbad5">
      ```
  4. Create the service worker in your project root directory
  5. Create a custom javascript for application for eg, in js folder i create app.js file ,
  this file is used for register a service worker
  6. Serve the service worker on the root of the scope you used in the manifest
  7. Add a <script> block to your base HTML template to load the service worker, 
  add your application javascript file in all html pages. I include app.js in all html files.
  8. Deploy your progressive web app
  9. Use your progressive web app in Android

    Note : To Show ICON and SPALSH SCREEN in IOS Mobile ApplicationUser have to doconfigure icon and splash screen in index.html (base File) in a  head section  , Follow the below Link to congigure icon in IOS :
    
https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html 

https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/adaptivity-and-layout/#device-screen-sizes-and-orientations 

