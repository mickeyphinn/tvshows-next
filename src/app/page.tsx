import SearchResultsWithNext from "../next/views/search-results/search-results";
import React from "react";
import SearchWithNext from "../next/views/search/search";

export default async function Home(props: {searchParams: Partial<Record<string, string>>}) {
  const query = decodeURIComponent(props.searchParams?.q || '');
  return <>
      <SearchWithNext query={query} />
      <SearchResultsWithNext entity="shows" query={query} />
      <SearchResultsWithNext entity="people" query={query} />
  </>
}
