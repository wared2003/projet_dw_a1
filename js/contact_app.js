const name_regex = RegExp(/^[a-zA-Z'éèîïôiâä-]+$/u);
const email_regex = RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
const phone_regex = RegExp(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/gmi)

//verification validité input type name
const name_input_check = (id) => {
        if($('#' + id).val()){
            if(name_regex.test(($('#' + id).val()))){
                $('#' + id + '_error').html('');
            }else{
                $('#' + id + '_error').html('<p>caractère(s) intedit(s)</p>');
            }
        }else{
            $('#' + id + '_error').html('<p>veuillez remplir ce champ</p>');
        }
}
//vérification validité input type name
const email_input_check = (id) => {
    if($('#' + id).val()){
        if(email_regex.test(($('#' + id).val()))){
            $('#' + id + '_error').html('');
        }else{
            $('#' + id + '_error').html('<p>veuillez renseigner un email valide</p>');
        }
    }else{
        $('#' + id + '_error').html('<p>veuillez remplir ce champ</p>');
    }
}
const phone_input_check = (id) => {
    if($('#' + id).val()){
        if(phone_regex.test(($('#' + id).val()))){
            $('#' + id + '_error').html('');
        }else{
            $('#' + id + '_error').html('<p>veuillez renseigner un numéro valide</p>');
        }
    }else{
        $('#' + id + '_error').html('<p>veuillez remplir ce champ</p>');
    }
}
//vérification validité inpute type text-area
const textarea_input_check = (id) => {
    if($('#' + id).text()){
            $('#' + id + '_error').html('');
    }else{
        $('#' + id + '_error').html('<p>veuillez remplir ce champ</p>');
    }
}

$(document).ready( () => {

    //vérification en temps réél validité formulaire 

    //vérification validité input lastname 
    $('#lastname').change(() => {name_input_check('lastname')});
    $('#firstname').change(() => {name_input_check('firstname')});
    $('#email').change(() => {email_input_check('email')});
    $('#phone').change(() => {phone_input_check('phone')});
    $('#textarea').change(() => {textarea_input_check('textarea')});
});
