# golang-bazel-monorepo
This project is a tutorial on using Bazel for building and managing Go projects. It provides step-by-step instructions on installing the necessary dependencies, such as Golang, Bazel, Bazelisk, and Gazelle. The README also includes commands for building and running the binary for different applications within the project. Additionally, it recommends installing Go Version Manager for managing different versions of Go. The tutorial aims to help developers understand and utilize Bazel effectively in their Go projects.

**Youtube Video**: https://youtu.be/o98xguY3nIA

## Deps:

- [Golang](https://go.dev/)
- [Bazel](https://bazel.build/)
- [Bazelisk](https://github.com/bazelbuild/bazelisk)
- [Gazelle](https://github.com/bazelbuild/bazel-gazelle)

## Install Bazel
```bash
brew install bazel
```

## Install Bazelisk
```bash
go get github.com/bazelbuild/bazelisk
```

## Install Gazelle
```bash
go get github.com/bazelbuild/bazel-gazelle
```

## Build Binary
```bash
  bazel build //...
```

## Run Binary for app-one
```bash
  bazel run //apps/app-one
```
![run-app-one.png](screenshots%2Frun-app-one.png)

## Run Binary for app-two
```bash
  bazel run //apps/app-two
```
![run-app-two.png](screenshots%2Frun-app-two.png)

## Add Dependencies for app-one
```bash
cd apps/app-one
go get <dependency>
cd ../../
bazel run //:gazelle-update-repo-one
bazel build //...
```

## Issues
If you find any issue, and it is taking too much time to resolve, run following command to clean all bazel generated files and caches
```bash
bazel clean --expunge
```

## Recommendations
### Install [Go Version Manager](https://github.com/moovweb/gvm)
```bash
  bash < <(curl -s -S -L https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer)
```