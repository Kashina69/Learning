package main

import (
	"fmt"
	"net/http" // import http to make a basic server for listening request

	"github.com/go-chi/chi/v5"            // import chi which is a router
	"github.com/go-chi/chi/v5/middleware" // import chi middleware for logging in this case
)

func main() {

	router := chi.NewRouter()     // setting up router
	router.Use(middleware.Logger) // setting up logger with the middleware

	router.Get("/hello", basicHandler) // making a get "hello" route and giving it a function to handel the request

	server := &http.Server{
		Addr:    ":3000",
		Handler: router,
		// Handler: http.HandlerFunc(basicHandler), // Basic handeler for every incoming request with the http module
	}

	err := server.ListenAndServe() // function will start listening for request and then if have some error then give it to err

	if err != nil {
		fmt.Println("Failed to listen to server", err)
	}

}

func basicHandler(w http.ResponseWriter, r *http.Request) {
	// w is a http reponse writer which is an interface to write in http response
	// r is a http request pointer which will give you the request object
	w.Write([]byte("Hello, World!"))
	// the write method expects a byte array so we are type casting the hello world into a byte type array
}
