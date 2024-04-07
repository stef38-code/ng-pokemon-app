# NgPokemonApp
## commande
- [X] Creation de l'application avec Angular 18 : `ng new ng-pokemon-app --ssr=false --style=css --no-standalone`
- [X] Declaration: methode et tableau: reprise à https://youtu.be/DTIYVffhJuU?si=xCiZhdD6ovSBhrR4&t=4599
- [X] Gestion event depuis le DOM
- [X] Ajout d'un input number avec une décoration
- [X] selection du pokemon depuis son id via fin
- reprise à https://youtu.be/DTIYVffhJuU?si=alTosah7DhWJpdAv&t=7568
- [X] ajout css dans index.html `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">`
- [X] mise en forme de la page sous forme de carte
- [X] Creation d'un directive `ng generate directive border-card`
- reprise : https://youtu.be/DTIYVffhJuU?si=UG3nqp8i_5-dkgCf&t=9406
- [X] Ajout, taille et couleur de la carte au passage de la souris
- reprise: https://youtu.be/DTIYVffhJuU?si=j5EQtfwS3AxcIgMq&t=10126
- [X] utilisation d'un pipe date
- [X] creation d'un pipe `ng generate pipe pokemon-type-color`
- [X] affichage des types des pokémons  
- [X] mise en place du routing
- [X] Création des composants
  - `ng generate component list-pokemon --inline-template=false`
  - `ng generate component detail-pokemon --inline-template=false`
- [X] `<router-outlet></router-outlet>` dans app.component.html
- [X] page detail et recupération de l'id du pokémon
# Ressources
[Tutorial](https://youtu.be/DTIYVffhJuU?si=-WpyvAcmFAx3_RMe)
[Bout de code](https://gist.github.com/codeursenior/2f52b496bf8be2f5e70a31ab69229174)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
