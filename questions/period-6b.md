## Explain the concept of Hybrid Mobile App Development
Making hybrid mobile applications usually means to make applications that can run on both iOS and Android devices.

## Explain the Pros & Cons of using Hybrid Mobile App Development compared to Native App Development

#### Pros:
- Develop applications with Angular.js, ionic, HTML and SCSS ♥
- Runs on both iOS and Android devices
- It's MUCH faster to make a demo for a mobile app.
- Works great for simple data-driven applications.
- Styling with SCSS makes it a lot easier for me.
- Structuring elements with HTML makes it a lot easier for me.

#### Cons:
- Doesn't utilize native features (like the camera) as good as native applications.
- Angular.js has a steep learning curve.
- Does not support newly arrived features as quickly as native.
- Lack of animations compared to native applications.
- The final result doesn't have the same kind of smoothness as native applications.
- Does not support background tasks between power cycles.

## Explain how and why it is possible for a Hybrid Application to access native phone devices like location, calendar etc.
Accessing native phone features like location and the calendar is possible through the use of Cordova plugins.

## Explain using an example how your Hybrid Application communicates with a backend and how CORS problems were solved (if any)

The CORS problem:
![alt text](https://www.maxcdn.com/one/assets/post-images/cors.png "Logo Title Text 1")

#### Running in the browser
**What happens when you run `ionic serve`?**

- A local web server is started up.
- Your browser is opened to point at the local server address.

This starts you off looking at your app loaded in a browser on your computer with the address `http://localhost:8100` (if you chose localhost).

Your origin will be `localhost:8100`.

Any AJAX request sent out to a host other than `localhost:8100` will have `localhost:8100` as its origin and thus will require a CORS preflight request to see if it can access the resource.

#### Running on a device
What happens when you run `ionic run`?

- Your files for the app are copied to the device (or simulator).
- The app runs, thus firing a browser on the phone/simulator to run the files that were copied over, something like: `file://some/path/www/index.html`.

Your origin will not exist, since you are running off of a `file://` URI; therefore, any request outwards will not require a CORS request.

#### Dealing with CORS in Ionic
There are two ways to solve the issue:
- Allow all origins from your API endpoint
- Use a proxy server

##### Using a proxy server
Set up your `ionic.project` file to be something like:
```json
{
  "name": "proxy-example",
  "app_id": "",
  "proxies": [
    {
      "path": "/api",
      "proxyUrl": "http://cors.api.com/api"
    }
  ]
}
```

Run your server with `ionic serve`.

When you access the ionic server at the path `http://localhost:8100/api`, it will proxy requests out to `http://cors.api.com/api` on your behalf.
