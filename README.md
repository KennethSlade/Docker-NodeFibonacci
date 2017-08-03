# Docker-NodeFibonacci
A simple implementation of a Node.js service that serves up Fibonacci numbers to the included front-end

To run this example, do the following:

```
docker build -t "YourTagName" .
docker run -d -p 4000:4000 YourTagName
```

You should now be able to point your browser to http://localhost:4000.  Set an index to calculate the Fibonacci sequence up to, click on Send, and the sequence will appear below the input box.  Note that this is a naive implementation, and so large input values may cause issues or even result in incorrect return values.
