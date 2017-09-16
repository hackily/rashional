function parseImageData (imageJSON) {

    parsed = JSON.parse(imageJSON)
    diseases = parsed.disease

    graphList = []

    for (disease in diseases) { 

        barObject = {}
        barObject.x = disease.name
        barObject.y = disease.value
        graphList.push(barObject)

    }

    return graphList

}