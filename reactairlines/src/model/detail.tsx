  export interface detail {
    detail: Details;
  }
  
  
  export interface Details {
    id: number;
    name: string;
    airtime: string;
    image: {
      medium: string;
    };
    summary: string;
    rating: number;
    season: number;
    number: number;
  }
  