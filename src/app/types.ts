  export type Country = {
    id: string;
    flagUrl: string;
    name: string;
    population: number;

    continent?: string;
    capital?: string;
    currencies?: Currency[];
    timeZones?: string[];
  };

  export type Currency = {
    name: string;
    symbol: string;
  };
