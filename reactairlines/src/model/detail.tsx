  export interface detail {
    detail: Details;
  }
  
  export interface Details {
    id: number;
    name: string;
    airtime: string;
    summary: string;
    rating: number;
    season: number;
    number: number;
    image: {
      medium: string;
    };
  }
  