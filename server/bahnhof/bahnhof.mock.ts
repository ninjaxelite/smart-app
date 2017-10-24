import Bahnhof from './bahnhof';
import BahnhofField from './bahnhof-field';
import * as Type from './bahnhof-field';

export const stations: Bahnhof[] = [
    new Bahnhof(
        [
            new BahnhofField(Type.Type.other, 'IMMO: RLO', ''),
            new BahnhofField(Type.Type.other, 'Betrieb: Ost', ''),
            new BahnhofField(Type.Type.address, '1120, Eichenstraße', 'https://maps.google.at/?q=48.17445,16.333076')
        ],
        [new BahnhofField(Type.Type.other, 'Personenbhf', '')],
        [
            new BahnhofField(Type.Type.other, 'Wien Hauptbahnhof', 'http://www.oebb.at/de/leistungen-und-services/am-bahnhof/bahnhofsinformation'),
            new BahnhofField(Type.Type.other, ' Abfahrtsmonitor', 'http://vm00208.pv.oebb.at/vsti/ab.aspx?bfnr=1003'),
            new BahnhofField(Type.Type.address, 'Ankunftsmonitor', 'http://vm00208.pv.oebb.at/vsti/an.aspx?bfnr=1003')
        ],
        [
            new BahnhofField(Type.Type.profile, 'Pöcksteiner Johannes', 'http://telefonbuch.oebb.at/Tb/UserDetail.aspx?ID=125077&Phone=517158'),
            new BahnhofField(Type.Type.phone, ' 0664 / 6170136', ''),
            new BahnhofField(Type.Type.email, 'johannes.poecksteiner@oebb.at', 'johannes.poecksteiner@oebb.at')
        ],
        [
            new BahnhofField(Type.Type.profile, 'Barna Andreas', 'http://telefonbuch.oebb.at/Tb/UserDetail.aspx?ID=125077&Phone=517158'),
            new BahnhofField(Type.Type.phone, '0664 / 6170192', ''),
            new BahnhofField(Type.Type.email, 'andreas.barna@oebb.at', 'johannes.poecksteiner@oebb.at')
        ],
        [
            new BahnhofField(Type.Type.profile, 'Cicek Erich', 'http://telefonbuch.oebb.at/Tb/UserDetail.aspx?ID=125077&Phone=517158'),
            new BahnhofField(Type.Type.phone, '0664 / 6170138', ''),
            new BahnhofField(Type.Type.email, 'andreas.barna@oebb.at', 'erich.cicek@mungos.at')
        ],
        [
            new BahnhofField(Type.Type.profile, 'Lueger Harald', 'http://telefonbuch.oebb.at/Tb/UserDetail.aspx?ID=125077&Phone=517158'),
            new BahnhofField(Type.Type.phone, '0664 / 6170139', ''),
            new BahnhofField(Type.Type.email, 'andreas.barna@oebb.at', 'harald.lueger@mungos.at')
        ],
        [
            new BahnhofField(Type.Type.profile, 'Winkler Christian', 'http://telefonbuch.oebb.at/Tb/UserDetail.aspx?ID=125077&Phone=517158'),
            new BahnhofField(Type.Type.phone, '0664 / 6173140', ''),
            new BahnhofField(Type.Type.email, 'christian.winkler@mungos.at', 'christian.winkler@mungos.at')
        ],
        [
            new BahnhofField(Type.Type.profile, 'Rustemi Feriz ', 'http://telefonbuch.oebb.at/Tb/UserDetail.aspx?ID=125077&Phone=517158'),
            new BahnhofField(Type.Type.phone, '0664 / 6173140', ''),
            new BahnhofField(Type.Type.email, ' feriz.rustemi@mungos.at', ' feriz.rustemi@mungos.at')
        ]
    )
];
