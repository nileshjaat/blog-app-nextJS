import classes from './hero.module.css';
import Image from 'next/image';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Profile.png"
          alt="An image showing Nilesh"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Nilesh</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Anular or React.
      </p>
    </section>
  );
}

export default Hero;
