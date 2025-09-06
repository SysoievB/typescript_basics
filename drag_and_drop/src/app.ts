/**
 * ! (Non-null assertion operator)
 * By default, TypeScript says: “Wait, what if the element is null?”
 * Without it, TS would force you to handle null.
 *
 * as HTMLTemplateElement
 * getElementById returns a generic HTMLElement.
 * But you know this element is specifically a <template> element.
 * TypeScript lets you type-cast it so you can safely use properties/methods of a HTMLTemplateElement*/


import {ProjectList} from './components/project-list';
import {ProjectInput} from './components/project-input';

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
