$(document).ready(function() {
    console.log('jq');
    // $('.resume').hide();
    // $('.resume-section').hide();

    // $('.center-cover-element').hover(function() {
    //     console.log('hovering');

    //     $('.top-cover-element').animate(
    //         {
    //             bottom: '100%'
    //         },
    //         'slow'
    //     );
    //     $('.bottom-cover-element').animate(
    //         {
    //             top: '100%'
    //         },
    //         'slow'
    //     );
    //     $('.center-cover-element').fadeOut('slow');
    //     $('.resume').fadeIn('slow');
    //     $('.current-section').fadeIn('slow');
    // });

    $('.section-link').on('click', function() {
        var sectionId = $(this).attr('href');
        $('.selected').toggleClass('selected');
        $(this)
            .children()
            .first()
            .toggleClass('selected');
        // $('.current-section').fadeOut(100, function() {
        //     $(sectionId).fadeIn(100);
        // });
        $('.current-section').hide(function() {
            $(sectionId).show();
        });
        $('.current-section').animate(
            {
                right: '500px'
            },
            'slow'
        );
        $(sectionId).animate(
            {
                left: '0'
            },
            'slow'
        );
        $('.current-section').toggleClass('current-section');
        $(sectionId).toggleClass('current-section');
    });
});
