//this app adds a photo and name of a councilmemnber to the site when you click on their district name

//create oject with all the name and image data
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


//function adds html to the DOM
function setTile(tileHtml) {
    $('#picture-tile').empty().prepend(tileHtml)
}

//function writes HTML when given the name and image, then calls setTile to add the image to the DOM
function writeHtml(name, img) {
    var tileHtml = '<img src = ' + '"' + img + '"' + 'id = "image"><h3>' + name + '<h3>';
    setTile(tileHtml)
}

//grabs the class of the clicked button and passes the matched data to writeHTML
$('.cd-tile').on('click', function () {
    $('.cd-tile').removeClass("selected")
    const splits = this.className.split(' ');
    const keyName = splits[1];
    writeHtml(data[keyName].name, data[keyName].imageURL);
    $(this).addClass("selected")
})


