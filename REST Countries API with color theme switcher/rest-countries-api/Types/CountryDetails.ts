import Country from './Country';
// id, capital, flag, name, region, population

export interface Border {
    id: string;
    name: string;
}

export default interface CountryDetails extends Country {
    borders: Border[];
    subRegion: string;
    languages: string[];
    nativeName: string;
    currencies: string[];
    topLevelDomain: string[];
}
