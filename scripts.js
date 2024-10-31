document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('rating-form');
    const wsrBranchQuestions = document.querySelectorAll('.wsrb-branch');

    form.addEventListener('change', function (e) {
        if (e.target.value === 'WSRB') {
            wsrBranchQuestions.forEach(question => question.style.display = 'block');
        } else {
            wsrBranchQuestions.forEach(question => question.style.display = 'none');
        }
    });
});
