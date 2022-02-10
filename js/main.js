const buttons_slide = document.querySelectorAll('.events-slideIndicator')
const images_slide = document.querySelectorAll('.events-slideImage')
const content_slide = document.querySelectorAll('.events-slideContentItem')

function click_slide(event) {
    image_slide_remove()
    content_slide_remove()
    indicator_remove()

    this.classList.add('is-active');
    const content_slide = document.querySelector(`#${this.id}-content`);
    const image_slide = document.querySelector(`#${this.id}-image`);
    content_slide.classList.add('is-active')
    image_slide.classList.add('is-active')
}

function image_slide_remove(){
    content_slide.forEach(element => {
        element.classList.remove('is-active')
    });
}

function content_slide_remove(){
    images_slide.forEach(image => {
        image.classList.remove('is-active')
    })
}


function indicator_remove(){
    buttons_slide.forEach(button => {
        button.classList.remove('is-active')
    })
}

buttons_slide.forEach(button => {
    button.addEventListener('click', click_slide)
});