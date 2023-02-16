const bg = document.querySelector('.mouse');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('hamburger_active');
});
close.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('hamburger_active');
});

const counters = document.querySelectorAll('.scales__interest'),
    lines = document.querySelectorAll('.scales__scale span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML
});

$(document).ready(function () {

    // формы

    $('.contacts__form').validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Будь ласка, вкажіть своє ім'я",
            email: {
                required: "Нам потрібна ваша електронна адреса, щоб зв'язатися з вами",
                email: "Ваша електронна адреса повинна бути у форматі name@domain.com"
            }
        }
    });

    // отправка формы

    $('.contacts__form').submit(function(e) {
        e.preventDefault();
        if (!$(this).valid()) {
            return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            // $('#consultation, #order').fadeOut();
            // $('.overlay, #thanks').fadeIn();
            $('.contacts__form').trigger('reset');
        });
        return false;
    });
});