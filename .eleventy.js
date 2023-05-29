module.exports = function (eleventyConfig) {
    // Modify later so the CSS is actually an .njk file with the permalink "style.css". Update link in <head> accordingly.
    eleventyConfig.addPassthroughCopy("./src/css/style.css");
    eleventyConfig.addPassthroughCopy("./src/fonts/");
    eleventyConfig.addPassthroughCopy("./src/images/");
    eleventyConfig.addPassthroughCopy('./src/admin');

    
    // Short Codes
    eleventyConfig.addShortcode("button", function (link, text, className, external = false) {
        let target = "";

        if (external) {
            target = `target="_blank"`;
        }

        return `<a href="${link}" class="${className}" ${target}><span>${text}</span></a>`;
    });

    eleventyConfig.addPairedShortcode("module", function (content, tag, className, hasId = false) {
        let fullClassName = `${className}-${tag}`;
        let idName = "";
        if (hasId) {
            idName = `id="${className}"`;
        }
        return `<${tag} class="${fullClassName}" ${idName}><div class="${fullClassName}__content inner-column">${content}</div></${tag}>`;
    });

    // Watch Target
    eleventyConfig.addWatchTarget("./src/css/");

    return {
        dir: {
            input: "src",
            layouts: "_layouts",
            output: "public",
        },
    };
};

