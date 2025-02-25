import Link from 'next/link';

const Custom404 = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h1>Oops! Page Not Found</h1>
    <p>
      The page you are looking for does not exist. It might have been moved or
      deleted.
    </p>
    <Link href='/'>
      <a style={{ textDecoration: 'underline', color: 'blue' }}>
        Go back to the homepage
      </a>
    </Link>
  </div>
);

export default Custom404;
