import styles from "./page.module.css";
import SearchResults from "../common/views/search-results/search-results";
import Search from "../common/views/search/search";
import React from "react";

export default async function Home(props: {searchParams: Partial<Record<string, string>>}) {
  const query = decodeURIComponent(props.searchParams?.q || '');
  return <div className={styles.page}>
    <div className={styles.search}>
      <Search query={query} />
    </div>
    <div className={styles.searchResults}>
      <SearchResults query={query} />
    </div>
  </div>
}
