import { ShowYearGraphCanvas } from '../components/ShowYearGraphCanvas'

export default function Home( props ) {
    
    return (
        <ShowYearGraphCanvas props={props} />
    )
}

export const getStaticProps = async () => { 

    const serverPath = 'https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19'

    const urlList = [
        'ockovani-pozitivni65.min.json',
        'ockovani-pozitivni.min.json',
        'ockovani-hospitalizace.min.json'
    ]

    const fetchList = urlList.map( url =>
        fetch( `${serverPath}/${url}` )
            .then( resp => resp.json() )
    )

    const respAll = await Promise.allSettled( fetchList )

    const respAllFulfilled = respAll.map( one => {
        return one.status === 'fulfilled' ? one.value.data : false
    })

    return {
        props: { respAllFulfilled },
        revalidate: 10,
    }
}