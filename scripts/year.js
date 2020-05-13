hexo.extend.helper.register('getAnimalIcon', function (year) {
    var index = parseInt(year) % 12;
    var icon = {
        0: 'symbolic-animals icon-monkey',
        1: 'symbolic-animals icon-rooster',
        2: 'symbolic-animals icon-dog',
        3: 'symbolic-animals icon-pig',
        4: 'symbolic-animals icon-rat',
        5: 'symbolic-animals icon-ox',
        6: 'symbolic-animals icon-tiger',
        7: 'symbolic-animals icon-rabbit',
        8: 'symbolic-animals icon-dragon',
        9: 'symbolic-animals icon-snake',
        10: 'symbolic-animals icon-horse',
        11: 'symbolic-animals icon-goat',
    }
    return icon[index]
});