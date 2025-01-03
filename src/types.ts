export type FetchResult = { [key: string]: any } | null;

export type FetchFunction = (
    limit: number,
    offset: number
) => Promise<FetchResult>;

export type DefaultFetchData = null | undefined | any;

export type FetchOptions = { limit: number; offset: number };

export type Error = {
    title: string;
    message: string;
};
