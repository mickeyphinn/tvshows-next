const baseUrl = 'https://api.tvmaze.com';


export interface Show {
    id: number;
    name: string;
    image?: Partial<{
        "medium": string;
        "original": string;
    }>;
}

interface SearchResultItem {
    show: Show;
}

async function search(query: string): Promise<SearchResultItem[]> {
    if (query.trim().length === 0) {
        return [];
    }

    return fetch(`${baseUrl}/search/shows?q=${encodeURIComponent(query)}`)
        .then((response) => response.json())
}

const tvmazeProvider = {search};

export default tvmazeProvider;
