const data = {
    lic: {
        name: "Julie Won",
        imageURL: "https://pbs.twimg.com/profile_images/1489071521079468033/UiG1DC-z_400x400.jpg"
    },
    les: {
        name: "Carlina Rivera",
        imageURL: "https://images.squarespace-cdn.com/content/v1/5e7e150d023c3d0568f2042c/8d1c786f-a1a0-4a2a-a14b-e1fd272d42a6/Carlina+Head+shot.jpeg?format=1000w"
    },
    bedstuy: {
        name: "Chi Osse",
        imageURL: "https://www.politico.com/dims4/default/d2db57a/2147483647/strip/true/crop/2000x2558+0+0/resize/630x806!/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Fc5%2Fee%2Fbb4cc3794eada341211d95cdf70f%2Fmag.McHugh.Osse.portrait.jpg"
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


