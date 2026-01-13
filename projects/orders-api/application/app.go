package application // telling that its in the application package

// These are import statements. They bring in packages (other libraries of code) that we'll use in this file.
// - context: for passing around request-scoped values, deadlines, etc.
// - fmt: for formatting strings, including errors
// - net/http: for building web servers and HTTP clients
import (
	"context"  // Standard library package for context propagation
	"fmt"      // Standard library formatting/printing utilities
	"net/http" // HTTP server and client implementation
)

// This defines a new type called "App". A struct is a structure - a collection of fields (variables).
// Here, App has one field called "router" of type http.Handler. The router will route incoming HTTP requests.
type App struct {
	router http.Handler // http.Handler is an interface - something that can handle HTTP requests
}

// This function New creates and returns a pointer to a new App instance.
// (A function that starts with a capital letter is 'exported' - available outside this package.)
// The return type "*App" is a pointer to App, meaning New returns the memory address of the created struct.
func New() *App {
	// Here we create a new App struct. For the 'router' field, we call loadRoutes(),
	// which creates and sets up all the HTTP routes for our app.
	app := &App{
		router: loadRoutes(), // assigns the router we built from loading the routes
	}

	return app // returns a pointer to the newly created App
}

// This is a method named Start defined "on" type *App (a pointer to App).
// 'ctx context.Context' is a parameter for providing context (cancellation, deadlines, etc).
// This function returns an error if something went wrong, or nil if not.
func (a *App) Start(ctx context.Context) error {
	// &http.Server{} creates a new HTTP server.
	// - Addr: sets address and port to listen on (here, ":3000" means all network interfaces, port 3000)
	// - Handler: the routing logic to use (here we set it to our router)
	server := &http.Server{
		Addr:    ":3000",
		Handler: a.router,
	}

	// server.ListenAndServe() starts the server and listens for HTTP requests.
	// It blocks (won't return) until the server shuts down or there's an error.
	err := server.ListenAndServe()

	// If ListenAndServe ended with an error (err is NOT nil), return a formatted error explaining what happened.
	if err != nil {
		return fmt.Errorf("failed to start server: %w", err) // %w wraps the original error
	}
	// Otherwise, return nil (no error).
	return nil
}
