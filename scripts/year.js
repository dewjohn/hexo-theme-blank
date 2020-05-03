hexo.extend.helper.register('getAnimalIcon', function (year) {
    var index = parseInt(year) % 12;
    var icon = {
        0: 'icon-hou',
        1: 'icon-ji',
        2: 'icon-gou',
        3: 'icon-zhu',
        4: 'icon-shu',
        5: 'icon-niu',
        6: 'icon-hu',
        7: 'icon-tu',
        8: 'icon-long',
        9: 'icon-she',
        10: 'icon-ma',
        11: 'icon-yang',
    }
    return icon[index]
});