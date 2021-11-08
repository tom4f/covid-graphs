export const graphsConfig = [
    {
        common: {
            dateField: 'datum',
            isAllDownloaded: true,
            loadDataFunction: null,
            url: 'https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/ockovani-umrti.json'
        },
        specific: [
            {
                sourceField: 'zemreli_celkem',
                color: 'lime',
                style: 'area',
                width: 2,
                header: 'zemreli_celkem',
                group: 1,
                lineStyle: []
            },
            {
                sourceField: 'zemreli_dokoncene_ockovani_relativni_pocet',
                color: 'white',
                style: 'dot',
                width: 2,
                header: 'zemreli_dokoncene_ockovani_relativni_pocet',
                group: 2,
                lineStyle: []
            },
            {
                sourceField: 'zemreli_dokoncene_ockovani',
                color: 'red',
                style: 'area',
                width: 2,
                header: 'zemreli_dokoncene_ockovani',
                group: 1,
                lineStyle: []
            }
        ]
    }
]