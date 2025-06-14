import { GoogleTopicsMap } from "./gTopics";
export interface Product {
    id: string;
    price: number;
    brand?: string;
    category?: string;
    quantity: number;
    currency?: string;
}

export interface Event {
    client: number;
    instance: number;
    event: string;
    href: string;
    pageTitle: string;
    pageDescription?: string;
    pageImage?: string;
    pageType?: string;
    referrer?: string;
    timestamp: string;
    did: string;
    session: string;
    gdpr?: string;
    order?: string;
    products?: Product[];
    target?: string;
    oldId?: string;
    newId?: string;
    ExternalIdtype?: string;
    ExternalId?: string;
    userAgent?: string;
    ip?: string;
    topics?: (keyof typeof GoogleTopicsMap)[];
  }

export interface Log {
    client: number;
    date: string;
    device: {
        browser?: string;
        id: string;
        ip?: string;
        os?: string;
        type?: string;
        userAgent?: string;
    };
    event: string;
    geo?: {
        city?: string;
        country?: string;
        point?: {
            type: string;
            coordinates: number[];
        };
        region?: string;
    };
    googleTopics?: GoogleTopic[];
    instance: number;
    page: {
        description?: string;
        href?: string;
        image?: string;
        title: string;
        type?: string;
    };
    product?: Product[];
    referrer?: string;
    session: string;
    target?: string;
    order?: string;
}

export interface GoogleTopic {
    id: keyof typeof GoogleTopicsMap;
    name: (typeof GoogleTopicsMap)[keyof typeof GoogleTopicsMap];
}