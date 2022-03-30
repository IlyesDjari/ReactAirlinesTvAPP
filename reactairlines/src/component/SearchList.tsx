import React from 'react';
import scss from '../layout/search.module.scss';
import { Series } from '../model/series';

interface ResultProps {
  result: Series[];
  itemClick: (series: Series) => void;
}


const NoImage = () => {
  return <div className={scss.noImage}>No image available</div>;
};

export const Result: React.FC<ResultProps> = ({ result, itemClick }) => {
  return (
    <>
      <div className={ scss.results }></div>
      <div className={ scss.grid }>
        {
          result.map(series => {
            const { show: { id, image, name } } = series;
            return (
              <div className={ scss.gridItem } key={ id } onClick={ () => itemClick(series) }>
                {
                  image ?
                    <img src={ image?.medium } className={ scss.movie }/> : <NoImage/>
                }
                <div className={ scss.movieText }>{ name }</div>
              </div>
            );
          })
        }
      </div>
    </>
  );
};