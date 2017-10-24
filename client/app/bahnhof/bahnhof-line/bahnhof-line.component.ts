import { Component, Input } from '@angular/core';
import { BahnhofField } from '../bahnhof-field/bahnhof-field';
import { Type } from '../bahnhof-field/bahnhof-field';

@Component({
    selector: 'bahnhof-line',
    templateUrl: 'bahnhof-line.component.html'
})
export class BahnhofLineComponent {
    @Input() data: BahnhofField[];
    
    getTypeIcon(type: Type) {
        switch (type) {
            case Type.address : return 'fa fa-home';
            case Type.email : return 'fa fa-envelope-o';
            case Type.phone : return 'fa fa-phone';
            case Type.profile : return 'fa fa-address-card-o';
            default: return '';
        }
    }
}