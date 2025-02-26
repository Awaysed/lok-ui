import { defineLoader } from 'vitepress'
import type { MetaCheckerOptions } from 'vue-component-meta'
import { createComponentMetaChecker } from 'vue-component-meta'
import fs from 'fs'
import path from 'path'

const createChecker = (url: string) => {
    const checkerOptions: MetaCheckerOptions = {
        forceUseTs: true,
        schema: { ignore: ['MyIgnoredNestedProps'] },
        printer: { newLine: 1 },
        noDeclarations: true,
    }

    return createComponentMetaChecker(
        // Write your tsconfig path
        path.resolve(url),
        checkerOptions
    )
}

const getComponentMeta = (checker, rootDir) => {
    const componentData = {}

    fs.readdirSync(rootDir).forEach((dir) => {
        let compLs: string[] = []
        try {
            compLs = fs.readdirSync(path.join(rootDir, dir, 'src'))
        } catch (error) {
            compLs = []
        }

        let file: string = ''
        if (compLs.includes('index.vue')) file = 'index.vue'
        if (compLs.includes('index.tsx')) file = 'index.tsx'
        if (!file) return

        try {
            const meta = checker.getComponentMeta(
                path.resolve(rootDir, dir, 'src', file)
            )

            // todo 目前 vue-component-meta 库无法提取 props 上的事件
            const props = getProps(meta.props)
            const slots = getSlots(meta.slots)
            const events = getEvents(meta.events)

            componentData[dir] = {
                props,
                events,
                slots,
                // exposed: meta.exposed,
            }
        } catch (error) {
            console.log(error)
        }
    })

    return componentData
}

const getProps = (props) => {
    return props
        .filter(({ global }) => !global)
        .map(({ name, description, type, default: defaultV }) => ({
            name,
            description,
            type,
            default: defaultV,
        }))
}

const getSlots = (slots) => {
    try {
        return slots.map(({ name, description, type }) => ({
            name,
            description,
            type,
        }))
    } catch (error) {}
}

const getEvents = (events) => {
    try {
        return events.map(({ name, type }) => ({
            name,
            type: `(${type.slice(1, -1)}) => void`,
        }))
    } catch (error) {}
}

export default defineLoader({
    load() {
        console.log('生成 Api 数据中...')
        const baseChecker = createChecker('packages/base/tsconfig.json')
        const baseRootDir = 'packages/base/src/components'
        const baseComponentMeta = getComponentMeta(baseChecker, baseRootDir)
        const coreChecker = createChecker('packages/core/tsconfig.json')
        const coreRootDir = 'packages/core/src/components'
        const coreComponentMeta = getComponentMeta(coreChecker, coreRootDir)
        console.log('Api 数据生成完成')
        return { ...baseComponentMeta, ...coreComponentMeta }
    },
})

export interface Data {
    // data type
}

declare const data: Data
export { data }
