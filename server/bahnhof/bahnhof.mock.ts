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
        [new BahnhofField(Type.Type.other, 'Personenbhf', '')]
    )
];
