## Name attributes of the HTTP protocol which makes it difficult to use for real time systems.
HTTP is stateless. Refer to questions below

## Explain polling and long-polling strategies, their pros and cons.
Current attempts to provide real-time web applications largely revolve around polling and other server-side push technologies, the most notable of which is Comet, which delays the completion of an HTTP response to deliver messages to the client. Comet-based push is generally implemented in JavaScript and uses connection strategies such as long-polling or streaming

### Polling
With polling, the browser sends HTTP requests at regular intervals and immediately receives a response. This technique was the first attempt for the browser to deliver real-time information. Obviously, this is a good solution if the exact interval of message delivery is known, because you can synchronize the client request to occur only when information is available on the server. However, real-time data is often not that predictable, making unnecessary requests inevitable and as a result, many connections are opened and closed needlessly in low-message-rate situations.

### Long-polling
With long-polling, the browser sends a request to the server and the server keeps the request open for a set period. If a notification is received within that period, a response containing the message is sent to the client. If a notification is not received within the set time period, the server sends a response to terminate the open request. It is important to understand, however, that when you have a high message volume, long-polling does not provide any substantial performance improvements over traditional polling. In fact, it could be worse, because the long-polling might spin out of control into an unthrottled, continuous loop of immediate polls.

## What is HTTP streaming, SSE (Server sent events)?
With streaming, the browser sends a complete request, but the server sends and maintains an open response that is continuously updated and kept open indefinitely (or for a set period of time). The response is then updated whenever a message is ready to be sent, but the server never signals to complete the response, thus keeping the connection open to deliver future messages. Streaming includes HTTP headers which increases the file size, increasing delay. This can be considered as a major drawback.

## What is the WebSocket protocol, and how is it different from HTTP communication, what advantages has it over HTTP?
Ultimately, all of these methods (polling, long-polling and http streaming) involve HTTP request and response headers, which contain lots of additional, unnecessary header data and introduce latency. Full-duplex connectivity requires more than just the downstream connection from server to client. In an effort to simulate full-duplex communication over half-duplex HTTP, many of today's solutions use two connections: one for the downstream and one for the upstream. The maintenance and coordination of these two connections introduces significant overhead in terms of resource consumption and adds lots of complexity.
Simply put, HTTP wasn't designed for real-time, full-duplex communication.

HTML5 Web Sockets represents the next evolution of web communications—a full-duplex, bidirectional communications channel that operates through a single socket over the Web. HTML5 Web Sockets provides a true standard that you can use to build scalable, real-time web applications. In addition, since it provides a socket that is native to the browser, it eliminates many of the problems Comet solutions are prone to. Web Sockets removes the overhead and dramatically reduces complexity.

## Explain what the WebSocket Protocol brings to the Web-world.
Normally when a browser visits a web page, an HTTP request is sent to the web server that hosts that page. The web server acknowledges this request and sends back the response. In many cases—for example, for stock prices, news reports, ticket sales, traffic patterns, medical device readings, and so on—the response could be stale by the time the browser renders the page. If you want to get the most up-to-date "real-time" information, you can constantly refresh that page manually, but that's obviously not a great solution.

## What's the advantage of using libraries like Socket.IO, Sock.JS, WS, over pure WebSocket libraries in the backend and standard APIs on frontend? Which problems do they solve?
- Abstraction layer with API's for both server and client
- It allows developers to send and receive data without worrying about cross-browser compatibility.
- Fallbacks to polling with incompatible browsers.

## Explain and demonstrate the process of WebSocket communication - From connecting client to server, through sending messages, to closing connection.
![alt text](https://camo.githubusercontent.com/6dd1a8c53d58a7a12308041a10f347fc65015aad/68747470733a2f2f7777772e7075626e75622e636f6d2f7374617469632f696d616765732f6765742d737461727465642f776562736f636b6574735f6775696465732e706e67 "Logo Title Text 1")
