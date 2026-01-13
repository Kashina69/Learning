# Data fetching

https://www.youtube.com/watch?v=00lxm_doFYw&list=PLApy4UwQM3UqAkfITNFzlqoD__UI6X5pb

- Loading, error, and data state managed
- Aborting previous fetch requests to prevent race conditions
- Shows loading spinner while fetching
- Pagination support (simple "Increase Page" button)
- Catches and handles fetch errors, displays error UI
```tsx
import { useEffect, useRef, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com";

interface Post {
  id: number;
  title: string;
}

export default function Demo() {
  // State for fetch error
  const [error, setError] = useState();
  // State to show loading spinner
  const [isLoading, setIsLoading] = useState(false);
  // State to store fetched posts
  const [posts, setPosts] = useState<Post[]>([]);
  // Current page number state
  const [page, setPage] = useState(0);

  // Ref to hold the AbortController between renders
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    // Fetch posts when page changes
    const fetchPosts = async () => {
      // Abort previous request if still running
      abortControllerRef.current?.abort();
      // New controller for new fetch
      abortControllerRef.current = new AbortController();

      setIsLoading(true);

      try {
        // Fetch data and wire aborting signal
        const response = await fetch(`${BASE_URL}/posts?page=${page}`, {
          signal: abortControllerRef.current?.signal,
        });
        // Parse and set posts
        const posts = (await response.json()) as Post[];
        setPosts(posts);
      } catch (e: any) {
        // Handle cancellation specially
        if (e.name === "AbortError") {
          console.log("Aborted");
          return;
        }
        // Store fetch error in state
        setError(e);
      } finally {
        // Always stop loading on finish/error/abort
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [page]); // Listen for page changes

  // Show error UI if fetch failed
  if (error) {
    return <div>Something went wrong! Please try again.</div>;
  }

  return (
    <div className="tutorial">
      <h1 className="mb-4 text-2xl">Data Fething in React</h1>
      {/* Button to go to next page */}
      <button onClick={() => setPage(page + 1)}>
        Increase Page ({page})
      </button>
      {isLoading && <div>Loading...</div>}
      {/* Show posts, only when not loading */}
      {!isLoading && (
        <ul>
          {posts.map((post) => {
            // Render each post title
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
```
