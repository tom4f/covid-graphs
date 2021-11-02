import { ShowYearGraphCanvas } from '../components/ShowYearGraphCanvas'

export default function Home( { allArticles, allArticles1, allArticles2 } ) {
    return  <ShowYearGraphCanvas covidData={allArticles.data} covidData1={allArticles1.data} covidData2={allArticles2.data} />
}

export const getStaticProps = async () => { 

    const serverPath = 'https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19'

    const urlList = [
        'ockovani-pozitivni65.json',
        'ockovani-pozitivni.json',
        'ockovani-hospitalizace.json'
    ]

    const fetchList = urlList.map( url =>
        fetch( `${serverPath}/${url}` )
            .then( resp => resp.json() )
    )

    const [ allArticles, allArticles1, allArticles2 ] = await Promise.all( fetchList )

    return {
        props: { allArticles, allArticles1, allArticles2 },
        revalidate: 10,
    }
}