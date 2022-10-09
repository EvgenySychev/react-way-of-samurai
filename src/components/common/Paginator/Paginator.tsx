import React from 'react'
import style from "./Paginator.module.css"

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPages: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = ({totalUsersCount, pageSize, currentPages, onPageChanged }: PaginatorPropsType) => {


    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
            <div>
                {pages.map(p => {
                    return <span
                        className={currentPages === p ? style.selectedPage : ''} //currentPages приходит undefined
                        //здесь надо пофиксить, спан жирным не рисует
                        onClick={(e) => onPageChanged(p)}>-{p}
                    </span>
                })}
            </div>
    )
}