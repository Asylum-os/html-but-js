
    const XMLStructure = require("../XMLStructure.js");

    class noscript extends XMLStructure {

        constructor(object) {

            let config = {
                id: "noscript",
                description: "Fallback content for script",
                openTag: "<noscript>",
                closeTag: "</noscript>",
                allowedParents: [
                    { "id": "head" },
					{ "id": "template" },
					{ "id": "a" },
					{ "id": "abbr" },
					{ "id": "area" },
					{ "id": "audio" },
					{ "id": "b" },
					{ "id": "bdi" },
					{ "id": "bdo" },
					{ "id": "br" },
					{ "id": "button" },
					{ "id": "canvas" },
					{ "id": "cite" },
					{ "id": "code" },
					{ "id": "data" },
					{ "id": "datalist" },
					{ "id": "del" },
					{ "id": "dfn" },
					{ "id": "em" },
					{ "id": "embed" },
					{ "id": "i" },
					{ "id": "iframe" },
					{ "id": "img" },
					{ "id": "input" },
					{ "id": "ins" },
					{ "id": "kbd" },
					{ "id": "keygen" },
					{ "id": "label" },
					{ "id": "map" },
					{ "id": "mark" },
					{ "id": "math" },
					{ "id": "meter" },
					{ "id": "object" },
					{ "id": "output" },
					{ "id": "progress" },
					{ "id": "q" },
					{ "id": "ruby" },
					{ "id": "s" },
					{ "id": "samp" },
					{ "id": "script" },
					{ "id": "select" },
					{ "id": "small" },
					{ "id": "span" },
					{ "id": "strong" },
					{ "id": "sub" },
					{ "id": "sup" },
					{ "id": "svg" },
					{ "id": "template" },
					{ "id": "textarea" },
					{ "id": "time" },
					{ "id": "u" },
					{ "id": "var" },
					{ "id": "video" },
					{ "id": "wbr" }
                ],
                allowedChildren: [
                    { "id": "a" },
					{ "id": "abbr" },
					{ "id": "address" },
					{ "id": "area" },
					{ "id": "article" },
					{ "id": "aside" },
					{ "id": "audio" },
					{ "id": "b" },
					{ "id": "base" },
					{ "id": "bdi" },
					{ "id": "bdo" },
					{ "id": "blockquote" },
					{ "id": "body" },
					{ "id": "br" },
					{ "id": "button" },
					{ "id": "canvas" },
					{ "id": "caption" },
					{ "id": "cite" },
					{ "id": "code" },
					{ "id": "col" },
					{ "id": "colgroup" },
					{ "id": "data" },
					{ "id": "datalist" },
					{ "id": "dd" },
					{ "id": "del" },
					{ "id": "dfn" },
					{ "id": "div" },
					{ "id": "dl" },
					{ "id": "dt" },
					{ "id": "em" },
					{ "id": "embed" },
					{ "id": "fieldset" },
					{ "id": "figcaption" },
					{ "id": "figure" },
					{ "id": "footer" },
					{ "id": "form" },
					{ "id": "h1" },
					{ "id": "h2" },
					{ "id": "h3" },
					{ "id": "h4" },
					{ "id": "h5" },
					{ "id": "h6" },
					{ "id": "head" },
					{ "id": "header" },
					{ "id": "hr" },
					{ "id": "html" },
					{ "id": "i" },
					{ "id": "iframe" },
					{ "id": "img" },
					{ "id": "input" },
					{ "id": "ins" },
					{ "id": "kbd" },
					{ "id": "keygen" },
					{ "id": "label" },
					{ "id": "legend" },
					{ "id": "li" },
					{ "id": "link" },
					{ "id": "main" },
					{ "id": "map" },
					{ "id": "mark" },
					{ "id": "meta" },
					{ "id": "meter" },
					{ "id": "nav" },
					{ "id": "object" },
					{ "id": "ol" },
					{ "id": "optgroup" },
					{ "id": "option" },
					{ "id": "output" },
					{ "id": "p" },
					{ "id": "param" },
					{ "id": "pre" },
					{ "id": "progress" },
					{ "id": "q" },
					{ "id": "rb" },
					{ "id": "rp" },
					{ "id": "rt" },
					{ "id": "rtc" },
					{ "id": "ruby" },
					{ "id": "s" },
					{ "id": "samp" },
					{ "id": "script" },
					{ "id": "section" },
					{ "id": "select" },
					{ "id": "small" },
					{ "id": "source" },
					{ "id": "span" },
					{ "id": "strong" },
					{ "id": "style" },
					{ "id": "sub" },
					{ "id": "sup" },
					{ "id": "table" },
					{ "id": "tbody" },
					{ "id": "td" },
					{ "id": "template" },
					{ "id": "textarea" },
					{ "id": "tfoot" },
					{ "id": "th" },
					{ "id": "thead" },
					{ "id": "time" },
					{ "id": "title" },
					{ "id": "tr" },
					{ "id": "track" },
					{ "id": "u" },
					{ "id": "ul" },
					{ "id": "var" },
					{ "id": "video" },
					{ "id": "wbr" }
                ],
                allowedAttributes: [
                    { "name": "accesskey", "value": false },
					{ "name": "class", "value": false },
					{ "name": "contenteditable", "value": false },
					{ "name": "dir", "value": false },
					{ "name": "hidden", "value": false },
					{ "name": "id", "value": false },
					{ "name": "lang", "value": false },
					{ "name": "spellcheck", "value": false },
					{ "name": "style", "value": false },
					{ "name": "tabindex", "value": false },
					{ "name": "title", "value": false },
					{ "name": "translate", "value": false }
                ],
            };

            super(object, config);
        }
    }

    module.exports = noscript;
    