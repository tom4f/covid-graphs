export const graphsConfig = [
    {
        common: {
            dateField: 'datum',
            isAllDownloaded: true,
            loadDataFunction: null,
            url: 'https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/ockovani-pozitivni65.min.json'
        },
        specific: [
            {
                sourceField: 'pozitivni_celkem',
                color: 'lime',
                style: 'area',
                width: 2,
                header: 'pozitivni_celkem > 65let',
                group: 1,
                lineStyle: []
            },
            {
                sourceField: 'pozitivni_dokoncene_ockovani_relativni_pocet',
                color: 'orange',
                style: 'line',
                width: 1,
                header: 'pozitivni_dokoncene_ockovani_relativni_pocet > 65 let',
                group: 2,
                lineStyle: [1]
            },
            {
                sourceField: 'pozitivni_dokoncene_ockovani',
                color: 'red',
                style: 'area',
                width: 2,
                header: 'pozitivni_dokoncene_ockovani > 65 let',
                group: 1,
                lineStyle: []
            }
        ]
    },

    {
        common: {
            dateField: 'datum',
            isAllDownloaded: true,
            loadDataFunction: null,
            url: 'https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/ockovani-pozitivni.min.json'
        },
        specific: [
            {
                sourceField: 'pozitivni_celkem',
                color: 'white',
                style: 'area',
                width: 2,
                header: 'pozitivni_celkem',
                group: 1,
                lineStyle: []
            },
            {
                sourceField: 'pozitivni_dokoncene_ockovani_relativni_pocet',
                color: 'yellow',
                style: 'line',
                width: 1,
                header: 'pozitivni_dokoncene_ockovani_relativni_pocet',
                group: 2,
                lineStyle: [1]
            },
            {
                sourceField: 'pozitivni_dokoncene_ockovani',
                color: 'lime',
                style: 'area',
                width: 2,
                header: 'pozitivni_dokoncene_ockovani',
                group: 1,
                lineStyle: []
            }
        ]
    },
    {
        common: {
            dateField: 'datum',
            isAllDownloaded: true,
            loadDataFunction: null,
            url: 'https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/testy-pcr-antigenni.json'
        },
        specific: [
            {
                sourceField: 'pocet_PCR_testy',
                color: 'lime',
                style: 'area',
                width: 2,
                header: 'pocet_PCR_testy',
                group: 1,
                lineStyle: []
            },
            {
                sourceField: 'pocet_AG_testy',
                color: 'rgba(255, 0, 0, 0.7)',
                style: 'area',
                width: 1,
                header: 'pocet_AG_testy',
                group: 1,
                lineStyle: []
            }
        ]
    }
]