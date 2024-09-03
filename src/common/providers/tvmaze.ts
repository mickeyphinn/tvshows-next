const baseUrl = 'https://api.tvmaze.com';


export interface Entity {
    id: number;
    name: string;
    summary?: string;
    image?: Partial<{
        "medium": string;
        "original": string;
    }>;
}

interface SearchResultItem {
    show: Entity;
}

async function search(entity: 'shows' | 'people', query: string): Promise<Entity[]> {
    if (query.trim().length === 0) {
        return [];
    }

    return fetch(`${baseUrl}/search/${entity}?q=${encodeURIComponent(query)}`)
        .then((response) => response.json())
        .then((result) => result.map((item: {show: Entity} | {person: Entity}) => 'show' in item ? item.show : item.person))
}

async function entity(entity: 'shows' | 'people', id: number): Promise<Entity> {
    return fetch(`${baseUrl}/${entity}/${id}`)
        .then((response) => response.json())
}


export interface EntitiesRow {
    title: string;
    items: (Entity & {href: string})[];
}

async function seeAlso(entity: 'shows' | 'people', id: number): Promise<EntitiesRow> {
    return entity === 'shows' ? peopleByShow(id) : showsByPerson(id)
}

async function showsByPerson(personId: number): Promise<EntitiesRow> {
    const shows: {_embedded: {show: Entity}}[] = await fetch(`${baseUrl}/people/${personId}/castcredits?embed=show`).then((response) => response.json())
    return {
        title: 'Shows',
        items: shows.map((item) => item._embedded.show).filter(Boolean).map((item) => ({...item, href: `/shows/${item.id}`}))
    }
}

async function peopleByShow(showId: number): Promise<EntitiesRow> {
    const people = await fetch(`${baseUrl}/shows/${showId}/cast`).then((response) => response.json())
    return {
        title: 'Cast',
        items: (Array.isArray(people) ? people : []).map((item): EntitiesRow['items'][number] => ({
            id: item?.person?.id,
            name: item?.character?.name ?? item?.person?.name,
            href: `/people/${item?.person?.id}`,
            image: {...item?.person?.image, ...item?.character?.image}
        }))
    }
}

const tvmazeProvider = {search, entity, seeAlso};

export default tvmazeProvider;
