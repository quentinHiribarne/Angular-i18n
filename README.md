# AngularI18n

Authors : Louise BERTIN & Quentin HIRIBARNE-PIONNIER

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Subject

### Exigences :

Utilisez le module Angular i18n pour fournir des fichiers de traduction pour différentes langues. Incluez des traductions pour au moins deux langues.

Utilisez le pipe Angular translate pour afficher les messages traduits dans l'interface utilisateur de l'application. Utilisez le pipe dans plusieurs composants différents.

Mettez en place une logique pour détecter automatiquement la langue préférée de l'utilisateur à partir de son navigateur. Si la langue préférée de l'utilisateur ne correspond à aucune langue prise en charge par l'application, utilisez la langue par défaut.

Permettez à l'utilisateur de changer la langue de l'interface utilisateur à l'aide d'un menu déroulant ou d'un autre élément d'interface utilisateur approprié. Lorsque l'utilisateur change de langue, l'application doit afficher tous les messages dans la nouvelle langue sélectionnée.

Ajoutez des fichiers de traduction pour les erreurs courantes, telles que les erreurs de validation de formulaire, et affichez les messages d'erreur traduits dans l'interface utilisateur.

Utilisez des directives de texte pour gérer le texte qui doit être traduit à partir du HTML, des balises d'attributs ou d'autres balises personnalisées.

### Bonus:

Implémentez des tests unitaires pour les différents composants et services impliqués dans l'internationalisation.

## Using Docker

### Build and run the container

Run `docker compose up`

### Access to the application

`http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Without Docker

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Generate translation files

### Generate english translation file

Run `ng extract-i18n --output-path src/assets/i18n --format json --out-file en.json`.

#### Edit file layout

File look like this:

```json
{
  "locale": "en-US",
  "translations": {
    "app.angularLogo": "Angular Logo",
    "app.welcomeTitle": "Welcome",
    ...
  }
}
```

Keep only the translations part:

```json
{
  "app.angularLogo": "Angular Logo",
  "app.welcomeTitle": "Welcome",
  ...
}
```

### Create french translation file

Copy the english translation file and rename it to `fr.json`. Then translate the content.
