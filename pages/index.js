import { ShowYearGraphCanvas } from '../components/ShowYearGraphCanvas'

export default function Home( { allArticles, allArticles1 } ) {

    //console.log( allArticles.data.length )

    return  <ShowYearGraphCanvas pdoRespNew={allArticles.data} pdoRespNew1={allArticles1.data} />

}


export const getStaticProps = async () => { 
    const resp = await fetch( 'https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/testy-pcr-antigenni.min.json' )
    const respText = await resp.text()
    const allArticles = JSON.parse( respText )

    const resp1 = await fetch( 'https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/hospitalizace.json' )
    const respText1 = await resp1.text()
    const allArticles1 = JSON.parse( respText1 )
    return {
        props: { allArticles, allArticles1 }  ,
        revalidate: 10,
    }
}