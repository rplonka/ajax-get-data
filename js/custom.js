$(function() {
    function getData() {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data) {
            var newDiv = document.createElement('div');
            newDiv.id = 'dane-programisty';
            $(newDiv).html('Imię: ' + data.imie + '<br> Nazwisko: ' + data.nazwisko + '<br> Zawód: ' + data.zawod + '<br> Firma: ' + data.firma);
            $('body').append(newDiv);
        });
    }
    $('#get-data').click(getData);
});