$(document).ready(function()
{
    $('.number h1').click(function()
    {
        $('.card_content').hide();
        $('.number').show();
        $(this).parent().hide();
        $('#' + this.className).fadeIn(200);
    });
    $('.card_content').click(function()
    {
        $(this).hide();
        $('.' + this.id).parent().fadeIn(300);
    });

    $('.dice').click(function ()
    {
        let letter = stringGen();
        $('.random-letter').fadeOut(200);
        setTimeout(function ()
        {
            $('.random-letter').text(letter);
            $('.random-letter').fadeIn(200)
        }, 600);
    })
});

function stringGen()
{
    var text = " ";
    var charset = "ABCDEFGHIJKLMNOPSTUW";

    text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}
