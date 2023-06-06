//input width fit content
var inputs = document.querySelectorAll('.money-input');
inputs.forEach(function(input) {
    input.addEventListener('input', function() {
        let newVal = this.value.replace('.','')
        console.log(newVal + ' and ' + this.value)
        this.style.width = ((newVal.length)) + "ch";
    });
})

// faq collaspable
var faqCollaspe = document.querySelectorAll('.faq-collaspe')
faqCollaspe.forEach(function (item) {
    const question = item.querySelector('.question')
    const answer = item.querySelector('.answer')
    const plusIcon = item.querySelector('.plus-icon')
    const minusIcon = item.querySelector('.minus-icon')

    question.addEventListener('click', function () {
        const answerClassList = answer.classList
        if (answerClassList.contains('h-0')) {
            answer.classList.remove('h-0')
            answer.classList.add('h-44')
            answer.classList.add('my-3')

            plusIcon.classList.add('hidden')
            minusIcon.classList.remove('hidden')
        } else {
            answer.classList.add('h-0')
            answer.classList.remove('h-44')
            answer.classList.remove('my-3')

            plusIcon.classList.remove('hidden')
            minusIcon.classList.add('hidden')
        }
    })
})


// customer pagination
const pagination = document.querySelectorAll('.pagination')
var paginationButton = document.querySelector('#paginationChange')

let currentActive = 0

paginationButton.addEventListener('click', function() {
    pagination[currentActive].classList.remove('--active')
    currentActive = currentActive + 1
    if(currentActive >= pagination.length) {
        currentActive = 0
    }
    pagination[currentActive].classList.add('--active')
})
