import Link from 'next/link';
import styles from './index.module.scss';

export function Index() {
  return (
    <div className={styles['container']}>
      <h1>
        <span> Hello there, </span>
        Welcome auth 👋
      </h1>
      <ul>
        <li>
          <Link href="/sign-in">Sign In</Link>
        </li>
        <li>
          <Link href="/create-account">Create Account</Link>
        </li>
      </ul>
    </div>
  );
}

export default Index;
