$('body').ready(console.log("Let's get ready to party with jQuery!"))

$('img').addClass('image-center')

$("p:last").remove()

$('h1').css("font-size", Math.random()*100
)
$('ol li').append('<li>"banana hammock"</li>')

$('li').remove()
$('ol').append('<p>"Sorry this list should never have existed</p>')

$('.form-control').on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
})
$('img').on("click", function () {
    $('img').remove()
})
