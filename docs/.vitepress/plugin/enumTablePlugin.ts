import fs from "fs";
import { resolve } from "path";
const projRoot = resolve(__dirname, "..", "..", "..");

export default {
    render(tokens, idx) {
        if (tokens[idx].nesting === 1) {
            const sourceFileToken = tokens[idx + 2];
            let codeStr = ''
            let codePath = ''
            let enumName = ''
            if (sourceFileToken.type === "inline") {
                codePath = sourceFileToken.content.split('#')[0]
                enumName = sourceFileToken.content.split('#')[1]
                codeStr = fs.readFileSync(
                    resolve(projRoot, "./", `${codePath}.ts`),
                    "utf-8"
                );
            }

            // opening tag
            return `<VPEnum codeStr="${codeStr}" enumName="${enumName}" >`;
        } else {
            // closing tag
            return "</VPEnum>\n";
        }
    }
}