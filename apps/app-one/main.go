package main

import (
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/swaggo/http-swagger"
	_ "github.com/wissensalt/golang-bazel-monorepo/apps/app-one/docs" // docs is generated by Swag CLI, you have to import it.
)

//	@title			Swagger APP ONE
//	@version		1.0
//	@description	This is a sample server APP ONE server.
//	@termsOfService	http://swagger.io/terms/

//	@contact.name	API Support
//	@contact.url	http://www.swagger.io/support
//	@contact.email	support@swagger.io

//	@license.name	Apache 2.0
//	@license.url	http://www.apache.org/licenses/LICENSE-2.0.html

// @host		localhost:8080
// @BasePath	/
func main() {
	r := chi.NewRouter()

	r.Get("/", hello)

	r.Get(
		"/swagger/*",
		httpSwagger.Handler(
			httpSwagger.URL("http://localhost:8080/swagger/doc.json"), //The url pointing to API definition
		),
	)

	http.ListenAndServe(":8080", r)
}

// @Summary		Hello endpoint
// @Description	This endpoint returns a hello world message from APP ONE
// @Accept			json
// @Produce		json
// @Success		200	{string}	string	"Hello, World FROM APP ONE"
// @Router			/ [get]
func hello(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Hello, World FROM APP ONE")
	w.Write([]byte("Hello, World FROM APP ONE"))
}
