import React from 'react';
import Fade from 'react-reveal/Fade';
import Section from '../../components/Section';
import Button from '../../components/Button';
import Title from '../../components/Title';
import styles from './styles.module.scss';
import { contacts } from './constants';
import { detectMobile } from '../../utils';

const isMobile = detectMobile();
const emailStr = 'knight9z@vip.qq.com';

const Contact = () => (
  <Section id="contact" className={styles.contact} style={{ backgroundAttachment: isMobile ? 'initial' : 'fixed' }}>
    <Title tag="h2">找到我 🙋‍♂️</Title>

    <Fade bottom>
      <div className={styles.container}>
        <ul className={styles.contactList}>
          {contacts.map((contact) => (
            <li key={contact.image}>
              <a href={contact.url} target="_blank" rel="noreferrer">
                <img src={contact.image} alt="contactImage" />
              </a>
            </li>
          ))}
        </ul>

        <Button
          onClick={() => window.location.href = emailStr}
          className={styles.emailBtn}
          bg="#7d0000"
        >
          knight9z@vip.qq.com
        </Button>
      </div>
    </Fade>
  </Section>
);

export default Contact;
