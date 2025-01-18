import fs from "fs";
import { resolve } from "path";
import shiki from "shiki";

const highlighter = await shiki.getHighlighter({
    theme: "material-theme-palenight",
});

const projRoot = resolve(__dirname, "..", "..", "..");
const docsDirName = "docs";
const docRoot = resolve(projRoot, docsDirName);

export default {
    render(tokens, idx) {
        if (tokens[idx].nesting === 1) {
            const sourceFileToken = tokens[idx + 2];
            let htmlStr = "";
            let codeStr = "";
            let codePath = "";
            if (sourceFileToken.type === "inline") {
                codePath = sourceFileToken.content ?? "";
                codeStr = fs.readFileSync(
                    resolve(docRoot, "./.vitepress/examples", `${codePath}.vue`),
                    "utf-8"
                );
                let codeThemeTokens = highlighter.codeToThemedTokens(codeStr, "vue");
                htmlStr = shiki.renderToHtml(codeThemeTokens);
            }

            // opening tag
            return `
        <VPDemo 
        codeStr="${encodeURIComponent(codeStr)}" 
        htmlStr="${encodeURIComponent(htmlStr)}" 
        codePath="${codePath}"
        >`;
        } else {
            // closing tag
            return "</VPDemo>\n";
        }
    }
}