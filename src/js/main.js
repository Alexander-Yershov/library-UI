import './lib/lib';

$('button').on('click', function () {
    $('div').eq(2).toggleClass('active');
    
});

$('div').click(function () {
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closest('.findme').addClass('dfhsjfk'));
$('button').fadeIn(2800);
// console.log($('button').html('hello'));


