# JavierarocenaMindata

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

## Run project

> $ npm install

> $ npm serve -o

## Features

- `Routing with lazy loading`
- `Http interceptor`
- `Angular Material`
- `Angular Reactive Forms`
- `RXjs`
- `Pipes Date`
- `Frontend service mock CRUD`
- `CSS Animations`

## Out of scope

- `Mockserver http`.
  Las peticiones http se simulan emitiendo un observable con delay desde un provider. Igualmente se ha implementado un http interceptor que se comunica con un servicio global que gestiona los Loadings para mostrar/ocultar un spinner en la UI.
