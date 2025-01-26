```javascript
// pages/aboutSolution.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    // This will prevent the page reload and will cause a client-side navigation, without the page being refreshed
    router.replace('/');
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go Back Home</button>
    </div>
  );
}
```