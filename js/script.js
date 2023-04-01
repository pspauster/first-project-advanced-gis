const data = {
    lic: {
        name: "Julie Won",
        imageURL: "images/julie.jpeg"
    },
    les: {
        name: "Carlina Rivera",
        imageURL: "images/carlina.jpeg"
    },
    bedstuy: {
        name: "Chi Osse",
        imageURL: "images/chi.jpeg"
    }
}



function setTile(tileHtml) {
    $('#picture-tile').empty().prepend(tileHtml)
}

function writeHtml(name, img) {
    var tileHtml = '<img src = ' + '"' + img + '"' + 'id = "image"><h3>' + name + '<h3>';
    setTile(tileHtml)
}

$('.cd-tile').on('click', function () {
    $('.cd-tile').removeClass("selected")
    const splits = this.className.split(' ');
    const keyName = splits[1];
    writeHtml(data[keyName].name, data[keyName].imageURL);
    $(this).addClass("selected")
})


