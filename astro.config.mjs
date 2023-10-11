import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    compressHTML: false,
    build: {
        format: 'file'
    },
    integrations: [tailwind({
        applyBaseStyles: false,
    })]
});