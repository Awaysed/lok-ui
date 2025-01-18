import type { App, Component } from 'vue'
const withInstall = <T extends Component>(comp: T) => {
    return {
        ...comp,
        install: (app: App): void => {
            if (comp.name) {
                app.component(comp.name, comp)
            } else {
                throw new Error('Component must have a name')
            }
        },
    }
}
export default withInstall
