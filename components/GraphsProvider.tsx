import fs from 'fs'
import path from 'path'
import { graphConfigType, urlQueryType } from './TypeDefinition'


export const getStaticPropsLogic = async (props: urlQueryType) => {

    const { page } = props

    const graphsConfigJson = fs.readFileSync(path.join(process.cwd(), 'config', page + '.json'), 'utf-8')
    const graphsConfig: graphConfigType[] = JSON.parse(graphsConfigJson)

    const commonDataList = graphsConfig.map(graphConfig => graphConfig.common)


    const fetchList = commonDataList.map(commonData => fetch(commonData.url, {
        headers: {
            'Content-type': 'application/json'
        },
        method: commonData.method,
        ...(commonData.method === 'POST' && { body: JSON.stringify(commonData.methodData) })
    }).then(resp => resp.json()))

    const graphsDataSettled = await Promise.allSettled(fetchList)

    const graphsDataFulfilled = graphsDataSettled.map(onePromise =>
        onePromise.status === 'fulfilled' ? (onePromise.value['hydra:member'] || onePromise.value) : ''
    )

    const graphsData = graphsDataFulfilled.map((data, index) =>
        ({ ...graphsConfig[index], data })
    )

    const files = fs.readdirSync(path.join(process.cwd(), 'config'))
    const allPaths = files.map(filename => {
        const graphsConfigJson = fs.readFileSync(path.join(process.cwd(), 'config', filename), 'utf-8')
        const graphsConfig = JSON.parse(graphsConfigJson)

        const onePath = filename.replace('.json', '')
        const navName = graphsConfig[0].common.navName
        const isActivePath = onePath === page ? true : false

        return ({
            onePath,
            navName,
            isActivePath
        })
    })

    return {
        props: {
            graphsData,
            allPaths
        },
        revalidate: 30
    }
}

export const getStaticPathsLogic = async () => {
    const graphConfigFiles = fs.readdirSync(path.join(process.cwd(), 'config'))
    const paths = graphConfigFiles.map(filename => ({
        params: {
            page: filename.replace('.json', '')
        }
    }))
    return {
        paths,
        fallback: false,
    }
}