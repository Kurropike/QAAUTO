module.exports = {
    url:'https://devmountain-qa.github.io/weatherman/build/index.html',
    elements: {
        searchBar: 'input[name="q"]',
        results:'#res',
        searchBarXpath: {
            selector: '//input{name="q"}',
            locateStrategy:'xpath'
        }
    }
}