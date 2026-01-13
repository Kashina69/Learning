package handler

import (
	"fmt"
	"net/http"
)

type Order struct{}

// This is a method definition in Go for the Order type.
// Let's break down each piece:
//
// func (o *Order) Create(w http.ResponseWriter, r *http.Request) { ... }
//
// - "func": This starts the definition of a function or method.
// - "(o *Order)": This part means Create is a method that has a receiver "o", which is a pointer to an Order struct.
//   - "o" can be any name; it's the variable name for the receiver inside the method.
//   - "*Order" means it's a pointer receiver (it allows the method to modify the Order instance or avoid copying).
// - "Create": This is the method name.
// - "(w http.ResponseWriter, r *http.Request)": These are the parameters the method accepts.
//   - "w http.ResponseWriter": This is an interface used to write an HTTP response to the client.
//   - "r *http.Request": This is a pointer to a struct with all details about the incoming HTTP request (method, URL, body, etc.).
//
// The method simply prints "Create an order" to the standard output, as a placeholder for actual logic.

func (o *Order) Create(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Create an order")
}

func (o *Order) List(w http.ResponseWriter, r *http.Request) {
	fmt.Println("List all order")
}

func (o *Order) GetByID(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Get an order by ID")
}

func (o *Order) UpdateByID(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Update an order by ID")
}

func (o *Order) DeleteByID(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Delete an order by ID")
}
