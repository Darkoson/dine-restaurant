const form = document.querySelector('.reservations-form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const day = document.querySelector('#day')
const month = document.querySelector('#month')
const year = document.querySelector('#year')
const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const meridiem = document.querySelector('#meridiem')

const numOfPeople = document.querySelector('#num-of-people')
const plural = document.querySelector('.numpicker-text')
const minusButton = document.querySelector('#minus')
const plusButton = document.querySelector('#plus')

function checkPlural() {
    if (numOfPeople.textContent === '1') {
        plural.textContent = 'person'
    } else {
        plural.textContent = 'people'
    }
}
