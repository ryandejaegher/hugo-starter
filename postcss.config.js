const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./hugo_stats.json','./algolia_css_purge.json'],
    defaultExtractor: content => {
        let els = JSON.parse(content).htmlElements;
        return els.tags.concat(els.classes, els.ids);
    }
});

module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        require('postcss-nesting'),
        ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : [])
    ]
    // plugins: {
    //     '@tailwindcss/jit': {},
    //     autoprefixer: {}
    //     // 'postcss-import'
    // }
};
