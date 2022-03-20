import { OnePage } from '../../components/OnePage'
import { getStaticPropsLogic, getStaticPathsLogic } from '../../components/GraphsProvider'

import { graphsDataType, urlQueryType } from '../../components/TypeDefinition'
import { GetStaticPaths, GetStaticProps } from 'next'
import { GraphsProvider } from '../../components/GraphsContext'


export default function Home( props: graphsDataType ) {
    const { graphsData } = props

    return (
        <GraphsProvider graphsData={graphsData}>
            <OnePage />
        </GraphsProvider>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return getStaticPathsLogic()
}

export const getStaticProps: GetStaticProps = async ( context ) => {
    return getStaticPropsLogic( context.params as urlQueryType  )
}