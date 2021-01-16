import React from 'react';
import FilmItem from "../film-item/FilmItem";
import styles from "./FilmList.module.css"
export function FilmList({items}) {
    console.log(items, "from FilmList")
    let [column1, column2, column3] = [null, null, null]
    if (items.length % 3 === 0) {
        column1 = items.slice(0, items.length / 3);
        column2 = items.slice(items.length / 3, (items.length / 3) * 2)
        column3 = items.slice((items.length / 3) * 2, items.length)
    } else {
        column1 = items.slice(0, items.length / 3 + 1)
        column2 = items.slice(items.length / 3 + 1, (items.length * (2 / 3) + 1))
        column3  = items.slice((items.length * (2 / 3)) + 1, items.length)
    }
    return (
        <div className={styles.listWrapper}>
            <div className={styles.column1}>
                {
                    column1.map(item => <FilmItem key={item.id} item={item} />)
                }
            </div>
            <div className={styles.column2}>
                {
                    column2.map(item => <FilmItem key={item.id} item={item} />)
                }
            </div>
            <div className={styles.column3}>
                {
                    column3.map(item => <FilmItem key={item.id} item={item} />)
                }
            </div>
        </div>
    );
}