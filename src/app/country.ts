export type Country = {
    id: string;
    flagUrl: string;
    name: string;
    population: number;
    
    continent?: string;
    capital?: string;
    currencies?: Currency[];
    timeZones?: string[];

    latitude?: number;
    longitude?: number;

  }

  export type Currency = {
    name: string;
    symbol: string;

  }