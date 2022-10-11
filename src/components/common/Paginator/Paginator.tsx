import React, {useState} from 'react'
import style from "./Paginator.module.css"

type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPages: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

export const Paginator = ({
                              totalItemsCount,
                              pageSize,
                              currentPages,
                              onPageChanged,
                              portionSize = 10
                          }: PaginatorPropsType) => {


    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (

        <div className={style.paginator}>
            <div className={style.btnblock}>
                {portionNumber > 1 &&
                    <button className={style.prevbtn} onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}>PREV</button>}
            </div>

            <div>
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return <span
                            className={style.pageNumber} //currentPages приходит undefined
                            //здесь надо пофиксить, спан жирным не рисует
                            onClick={(e) => onPageChanged(p)}>{p}
                    </span>
                    })}
            </div>
            <div className={style.btnblock}>
                {portionCount > portionNumber &&
                    <button className={style.nextbtn}  onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}>NEXT</button>}
            </div>

        </div>
    )
}