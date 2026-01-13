package application

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/kashina69/learning/golang/projects/orders-api/handler"
)

func loadRoutes() *chi.Mux {
	router := chi.NewRouter()

	router.Use(middleware.Logger)

	router.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
	})
	router.Route("/orders", loadOrderRoutes)
	return router
}

// it is like getting a 'router' of type chi.Router.
func loadOrderRoutes(router chi.Router) {
	// Here we're creating a new variable called orderHandler, which is a pointer to a new Order struct that comes from the handler package (imported from handler/order.go).
	// In Go, &handler.Order{} means "make a new Order struct, and give me its memory address (pointer)", so orderHandler can use all the functions (aka methods) defined for Order in handler/order.go.
	// This allows us to write things like orderHandler.Create, which is defined as a method on Order.
	orderHandler := &handler.Order{}

	// This line sets up the POST route for /orders/. When someone makes a POST request to /orders/, the orderHandler.Create function will be called.
	router.Post("/", orderHandler.Create)
	router.Get("/", orderHandler.List)
	router.Get("/{id}", orderHandler.GetByID)
	router.Put("/{id}", orderHandler.UpdateByID)
	router.Delete("/{id}", orderHandler.DeleteByID)
}
