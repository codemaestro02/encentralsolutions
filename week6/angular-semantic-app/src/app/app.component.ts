import { Component, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'app-root',
    template:
`<select class="ui dropdown" [(ngModel)]='selectValue' allowReselection="true">
    <option value="">{{title}}</option>
    <option value="1">Male</option>
    <option value="0">Female</option>
</select>`
})
export class AppComponent {
    title = 'Placeholder Text';
}
