
import { error } from '@sveltejs/kit'

async function get_page(pages, slug) {
    try {
        return await pages[`../../pages/${slug}.md`]()
    } catch(err) {
        // Do we need index file
        if(err instanceof TypeError) {
            const path = [slug, 'index'].join('/').replace(/^\//, '');
            return await pages[`../../pages/${path}.md`]()
        }
        throw err
    }
}

export async function load({ params }) {
    try {
        const pages = import.meta.glob(`../../pages/**/*.md`)

        let page = await get_page(pages, params.slug)

        return {
            metadata: page.metadata,
            content: page.default,
        }
    } catch(err) {
        console.error(err)
        return error(404)
    }
}
