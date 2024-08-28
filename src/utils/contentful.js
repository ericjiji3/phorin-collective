import { createClient } from 'contentful';

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

export const createContentClient = () => {
  return createClient({
    space: space,
    accessToken: accessToken,
  })
}
const client = createContentClient()

export const getBlogEntries = async () => {
    const entries = await client.getEntries({ content_type: "article" });
    return entries;
};

export const getPhotosPage = async () => {
    const entries = await client.getEntries({ content_type: "photosPage" });
    return entries;
};

export const getVideosPage = async () => {
    const entries = await client.getEntries({ content_type: "videosPage" });
    return entries;
};

export const getEntryBySlug = async (slug, type) => {
    const queryOptions = {
        content_type: type,
        'fields.slug[match]': slug,
    }
    const queryResult = await client.getEntries(queryOptions)
    return queryResult.items[0]
}