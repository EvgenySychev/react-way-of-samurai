import React, { useState } from 'react';

import style from './Paginator.module.css';

type PaginatorPropsType = {
  totalItemsCount: number;
  pageSize: number;
  onPageChanged: (pageNumber: number) => void;
  portionSize?: number;
};

export const Paginator = ({
  totalItemsCount,
  pageSize,
  onPageChanged,
  portionSize = 10,
}: PaginatorPropsType) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={style.paginator}>
      <div className={style.btnBlock}>
        {portionNumber > 1 && (
          <button
            type="button"
            className={style.prevBtn}
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            PREV
          </button>
        )}
      </div>

      <div>
        {pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map(p => {
            return (
              <span
                key={p}
                className={style.pageNumber} // currentPages приходит undefined
                // здесь надо пофиксить, спан жирным не рисует
                onClick={e => onPageChanged(p)}
              >
                {p}
              </span>
            );
          })}
      </div>
      <div className={style.btnBlock}>
        {portionCount > portionNumber && (
          <button
            type="button"
            className={style.nextBtn}
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            NEXT
          </button>
        )}
      </div>
    </div>
  );
};
