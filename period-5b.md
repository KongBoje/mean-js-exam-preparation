## Name attributes of the HTTP protocol which makes it difficult to use for real time systems.
HTTP is stateless, thus keeping no information about the user. This means that this information needs to be sent back and forth on every request, creating a large overhead.

Every solution to making HTTP work "like WebSockets" can be considered a bad hack.

## What is the WebSocket protocol, and how is it different from HTTP communication, what advantages has it over HTTP?
Ultimately, all of these methods (polling, long-polling and http streaming) involve HTTP request and response headers, which contain lots of additional, unnecessary header data and introduce latency. Full-duplex connectivity requires more than just the downstream connection from server to client. In an effort to simulate full-duplex communication over half-duplex HTTP, many of today's solutions use two connections: one for the downstream and one for the upstream. The maintenance and coordination of these two connections introduces significant overhead in terms of resource consumption and adds lots of complexity.
Simply put, HTTP wasn't designed for real-time, full-duplex communication.

HTML5 Web Sockets represents the next evolution of web communications—a full-duplex, bidirectional communications channel that operates through a single socket over the Web. HTML5 Web Sockets provides a true standard that you can use to build scalable, real-time web applications. In addition, since it provides a socket that is native to the browser, it eliminates many of the problems Comet solutions are prone to. Web Sockets removes the overhead and dramatically reduces complexity.

## What's the advantage of using libraries like Socket.IO, Sock.JS, WS, over pure WebSocket libraries in the backend and standard APIs on frontend? Which problems do they solve?
- Abstraction layer with API's for both server and client
- It allows developers to send and receive data without worrying about cross-browser compatibility.
- Fallbacks to polling with incompatible browsers.

## What is Backend as a Service, Database as a Service, why would you consider using Firebase in your projects?
BaaS and DaaS is the term of outsourcing your backend or database to another provider, for example Firebase. BaaS/DaaS offers you a complete box of tools, and you do not have to bother with creating your own backend.

- It's extremely easy to set up (A lot of functionality comes out of the box)
- It's free up until 50 consecutive connections
- Has built-in support for authentication services like Facebook, Google, and Twitter
- Has build-in security model for data validation (Define your own rules)
- You are free from configuring and maintaining your own server on e.g. AWS
- You can focus on developing your app

## Explain and demonstrate a "real time" system using either; your own server and a library like Socker.IO or Firebase.
- [Firebase Chat (Source Code)](https://github.com/ERPedersen/firebase-chat)
- [Firebase Chat (Demo)](https://github.com/ERPedersen/firebase-chat)
