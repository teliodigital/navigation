# Navigation

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

# Installation

You can install the Custom Angular Navigation Library using npm:

```
npm i @telio/navigation
```

# Getting Started

Import the NavigationModule in your AppModule:

```
import { NavigationModule } from '@telio/navigation';

@NgModule({
  imports: [
    NavigationModule
  ]
})
export class AppModule { }
```

# Usage

Use the navigation component in your template:

```
<telio-navigation [navigation]="navigation"></telio-navigation>

NavigationItem {
  label: string;
  route: string;
  hidden?: boolean;
}
```

