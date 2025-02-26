import mdContainer from "markdown-it-container";
import enumTablePlugin from './enumTablePlugin'
import vueDemoPlugin from './vueDemoPlugin'

export const mdPlugin = (md) => {
    // console.log(3333,md);
    
    usePlugin(md, 'demo', vueDemoPlugin)
    usePlugin(md, 'enum', enumTablePlugin)
}

function usePlugin(md, name, plugin) {
    md.use(mdContainer, name, {
        validate(params) {
            const regex = new RegExp(`^${name}\\s*(.*)$`);
            return params.trim().match(regex)
        },
        render: plugin.render
    })
}
