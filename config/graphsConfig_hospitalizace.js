export const graphsConfig = [
    {
        common: {
            dateField: 'datum',
            isAllDownloaded: true,
            loadDataFunction: null,
            url: 'https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/ockovani-hospitalizace.min.json'
        },
        specific: [
            {
                sourceField: 'hospitalizovani_celkem',
                color: 'red',
                style: 'line',
                width: 2,
                header: 'hospitalizovani_celkem',
                group: 1,
                lineStyle: []
            },
            {
                sourceField: 'hospitalizovani_dokoncene_ockovani_relativni_pocet',
                color: 'lime',
                style: 'dot',
                width: 2,
                header: 'hospitalizovani_dokoncene_ockovani_relativni_pocet',
                group: 2,
                lineStyle: []
            },
            {
                sourceField: 'hospitalizovani_dokoncene_ockovani',
                color: 'yellow',
                style: 'area',
                width: 1,
                header: 'hospitalizovani_dokoncene_ockovani',
                group: 1,
                lineStyle: []
            }
        ]
    }
]