import { useState, useEffect, useCallback } from "react";
import { Button } from "../ui/Button/Button.tsx";
import { getNewsletters, deleteNewsletter } from "../../api/newsletter.ts";
import "./Home.scss";

interface NewsletterSource {
  id: string;
  user: string;
  sources: string[];
  time?: string;
  location: string;
  createdAt: string;
}

export const Home = () => {
  const [newsletters, setNewsletters] = useState<NewsletterSource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getNewsletters()
      .then((fetchedNewsletters) => {
        if (fetchedNewsletters) {
          setNewsletters(fetchedNewsletters);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.error("Error getting newsletters", err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const removeNewsletter = async (_id: string) => {
    const success = await deleteNewsletter(_id);
    if (success) {
      setNewsletters(newsletters.filter((newsletter) => newsletter.id !== _id));
    }
  };

  const renderNewsletters = useCallback(() => {
    return newsletters.map((newsletter) => (
      <div className="home-newsletter" key={newsletter.id}>
        <h2 className="home-newsletter-title">{newsletter.sources}</h2>
        <p className="home-newsletter-time">{newsletter.time}</p>
        <Button
          onClick={() => removeNewsletter(newsletter.id)}
          label="Remove"
        />
      </div>
    ));
  }, [newsletters]);

  return (
    <div className="home">
      <div className="home-newsletters">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error loading newsletters.</p>
        ) : newsletters.length > 0 ? (
          renderNewsletters()
        ) : (
          <p>No newsletters found.</p>
        )}
      </div>

      <a
        className="home-link"
        href="mailto:hello@happymvp.com?subject=Want%20to%20have%20more?%20Let%20us%20know!"
      >
        Want to have more? Let us know: hello@happymvp.com!
      </a>
    </div>
  );
};
