import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const countries = [
        {id: "de", name: "Germany", population: 80000000, flagUrl: ".de"} ,
        {id: "en", name: "England", population: 2000000, flagUrl: ".en"},
        {id: "fr", name: "France", population: 4000000, flagUrl: ".fr"},
        {id: 'gr', name: "Greece", population: 2, flagUrl: ".gr"},
        {id: "de2", name: "Germany2", population: 80000000, flagUrl: ".de2"} ,
        {id: "en2", name: "England2", population: 2000000, flagUrl: ".en2"},
        {id: "fr2", name: "France2", population: 4000000, flagUrl: ".fr2"},
        {id: 'gr2', name: "Greece2", population: 2, flagUrl: ".gr2"}
    ];
    return {countries};
  }
}