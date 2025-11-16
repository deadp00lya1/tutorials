# ng-tutorials

An Angular library for reusable tutorial components and services.

## Features
- TutorialChipComponent: Easily display tutorial chips in your Angular app.
- TutorialService: Manage and provide tutorial data.

## Installation
```bash
npm install ng-tutorials
```

## Usage
Import the module and use the component/service in your Angular project:

```typescript
import { TutorialChipComponent, TutorialService } from 'ng-tutorials';
```

### Example
Add `<app-tutorial-chip></app-tutorial-chip>` to your template.

Inject `TutorialService` in your component:
```typescript
constructor(private tutorialService: TutorialService) {}
```

## Development
- Build: `npm run build`
- Test: `npm run test`
- Publish: `npm publish --access public`

## Repository
[GitHub](https://github.com/deadp00lya1/tutorials)

## Author
Ganesh Mane

## License
MIT
