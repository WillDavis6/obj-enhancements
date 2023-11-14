$('.button-input').on('click', function () {
    let title = $('.form-input').eq(0).val();
    let rating = $('.form-input').eq(1).val();
    $('h2').html('<ul class="PEW"> <li>' + title + '</li> <li>' + rating + '</li> </ul>').append(
        '<button type="button" class="will_blow_up">dEsTRoy aLL</button>'
    )
})
$('.will_blow_up').on('click', function () {
    $('.PEW').remove()
})