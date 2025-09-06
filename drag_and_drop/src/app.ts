/**
 * ! (Non-null assertion operator)
 * By default, TypeScript says: “Wait, what if the element is null?”
 * Without it, TS would force you to handle null.
 *
 * as HTMLTemplateElement
 * getElementById returns a generic HTMLElement.
 * But you know this element is specifically a <template> element.
 * TypeScript lets you type-cast it so you can safely use properties/methods of a HTMLTemplateElement*/

/// <reference path="models/drag-drop.ts" />
/// <reference path="models/project.ts" />
/// <reference path="state/project-state.ts" />
/// <reference path="util/validation.ts" />
/// <reference path="decorators/autobind.ts" />
/// <reference path="components/project-input.ts" />
/// <reference path="components/project-item.ts" />
/// <reference path="components/project-list.ts" />

namespace App {

    new ProjectInput();
    new ProjectList('active');
    new ProjectList('finished');
}
