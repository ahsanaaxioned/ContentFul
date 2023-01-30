require('dotenv').config();
const MarkdownItContainer = require("markdown-it-container"),
markdownIt = require('markdown-it'),
markdownItAttrs = require('markdown-it-attrs');
module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy("assets/style.css");
 const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
  }

const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs).use(MarkdownItContainer,'wrapper');
eleventyConfig.setLibrary('md', markdownLib);
  return {
    dir: {
      input:"src",
      output: "_site",
      data: "_data"
    }
  };
};