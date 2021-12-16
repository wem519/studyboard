import { Input, Textarea } from "@chakra-ui/react";
import styles from "../../styles/Write.module.css";

export default function Write() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <label>제목</label>
        <Input className={styles.input} placeholder="제목" />
      </div>
      <div className={styles.wrapper}>
        <label>작성자</label>
        <Input className={styles.input} placeholder="작성자" />
      </div>
      <div className={styles.wrapper}>
        <label>카테고리</label>
        <Input className={styles.input} placeholder="카테고리" />
      </div>
      <div className={styles.wrapper}>
        <label>인원</label>
        <Input className={styles.input} placeholder="인원" />
      </div>
      <div className={styles.wrapper}>
        <label>위치</label>
        <Input className={styles.input} placeholder="위치" />
      </div>
      <div className={styles.wrapper}>
        <label>기간</label>
        <Input className={styles.half} placeholder="2021.12.15~" />
        <Input className={styles.half} placeholder="2021.12.31" />

      </div>
      <div className={styles.wrapper}>
        <label>상세 내용</label>
        <Textarea className={styles.input} placeholder="내용을 입력해주세요" />
      </div>
    </div>
    
  );
}
