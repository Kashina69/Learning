package main

import (
	"context"
	"fmt"

	"github.com/kashina69/learning/golang/projects/orders-api/application"
)

// This is the main entry point for a Go program.
// Every Go program starts by running the main() function.
func main() {
	// Here we are creating a new instance of the App struct (our application) using a function called New from the application package.
	// The ":=" symbol is used for variable declaration and assignment (short for 'var app = ...').
	app := application.New()

	// We're starting the app by calling its Start method.
	// Start requires a context, so we give it one using context.TODO() which is a placeholder context you can use until you decide what to use.
	// The result (if any error occurred when trying to start the app) is stored in 'err'.
	err := app.Start(context.TODO())

	// This is an if-statement: if 'err' is not nil (which means some error happened when starting the app),
	// then it prints an error message using fmt.Println.
	if err != nil {
		fmt.Println("Failed to start app:", err)
	}
}
