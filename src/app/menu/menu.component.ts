import { Component } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  //selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    items: MenuItem[];

    ngOnInit() {
            this.items = [
                {
                    label: '=',
                    items: [
                      {label: 'Technische Angrage', icon: 'fa-plus'},
                      {label: 'Kennwort ändern', icon: 'fa-download'},
                      {label: 'Fenster schliessen', icon: 'fa-download'},
                      {label: 'Abmelden', icon: 'fa-download'},
                    ]
                },
                {
                    label: 'Bahnhöfe', routerLink: ['/pagename']
                },
                {
                    label: 'DB'
                },
                {
                    label: 'Mobservice'
                },
                {
                    label: 'Anlagen'
                },
                {
                    label: 'Datenträger'
                },
                {
                    label: 'LISQ'
                },
                {
                    label: 'Meldungen'
                },
                {
                    label: 'Desucher'
                },
                {
                    label: 'Prozesse'
                },
                {
                    label: 'English'
                },
                {
                    label: 'CarPool'
                },
                {
                    label: 'Bewerbung'
                },
                {
                    label: 'Reporte'
                },
                {
                    label: 'Videos'
                }
            ];
        }
}
