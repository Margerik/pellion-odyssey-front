import Link from 'next/link';
import {Container} from "@/components/container"
import s from "./style.module.scss"

const Thank = () => {
  return (
    <>
      <section className={s.section}>
        <Container className={s.container}>
          <h1 className={s.title}>Спасибо за оставленную заявку</h1>
          <p className={s.text}>Мы свяжемся с вами в ближайшее время!</p>
          <Link className={s.formButton} href={'/'}>На главную страницу</Link>
        </Container>
      </section>
    </>
    
  )
}

export default Thank;