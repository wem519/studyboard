import { Input, Textarea } from '@chakra-ui/react'
import styles from "../../styles/Write.module.css";

import {useState} from "react"

export default function Write(){



    return(
        <div className={styles.container}>
            <Input className={styles.input} placeholder='제목' />
            <Input className={styles.input} placeholder='카테고리'/>
            <Input className={styles.input} placeholder='인원'/>
            <Input className={styles.input} placeholder='위치'/>
            <Input className={styles.input} placeholder='기간 2021.12.15-2021.12.31'/>
            <Textarea className={styles.input} placeholder="내용을 입력해주세요"/>
        </div>
    )
}