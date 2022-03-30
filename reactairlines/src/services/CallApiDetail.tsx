import { useState } from 'react';
import { Details } from '../model/detail';
import Axios from 'axios';

export const useDetail = () => {

  const [result, setResult] = useState<Array<Details>>([]);

  const clickHandler = (text: string) => {
    Axios.get<Array<Details>>(`https://api.tvmaze.com/shows/1/episodebynumber?season=1&number=1`).then(
      res => {
        setResult(res.data);
        console.log(res.data);
      }
    );
  }
  return {
    detail: result,
    search: clickHandler,
  }
}