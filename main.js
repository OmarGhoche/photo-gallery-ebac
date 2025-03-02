$(document).ready(function () {

    $('header button').click(() => {
        $('form').slideDown();
    });

    $('#btn-cancel').click(() => {
        $('form').slideUp();
    });

    $('form').on('submit', (e) => {
            e.preventDefault();

            const urlNewImg = $('#url-new-img').val();
            const newLi= $('<li style="display: none"></li>');
            
            $(`<img src="${urlNewImg}" />`).appendTo(newLi);
            $(`
                <div class="overlay-img-link">
                    <a href="${urlNewImg}" target="_blank" title="Ver imagem em tamanho real">
                        Ver imagem em tamanho real
                    </a>
                </div>            
            `).appendTo(newLi);
            $(newLi).appendTo('ul');
            $(newLi).fadeIn();
            
            $('#url-new-img').val('');

        });


});