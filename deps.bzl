load("@bazel_gazelle//:deps.bzl", "go_repository")

def go_dependencies():
    go_repository(
        name = "com_github_go_chi_chi_v5",
        importpath = "github.com/go-chi/chi/v5",
        sum = "h1:acVI1TYaD+hhedDJ3r54HyA6sExp3HfXq7QWEEY/xMw=",
        version = "v5.1.0",
    )
