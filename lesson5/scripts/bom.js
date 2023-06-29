document.addEventListener('DOMContentLoaded', function(){
    const chapterInput = document.getElementById('chapterInput');
    const addChapterBtn = document.getElementById('addChapterBtn');
    const chapterList = document.getElementById('chapterList');


    addChapterBtn.addEventListener('click', function(){
        const chapterName = chapterInput.ariaValueMax.trim();

        if (chapterName !== '') {
            const li = document.createElement('li');
            const deleteBtn = document.createElement('button');

            li.textContent = chapterName;
            deleteBtn.textContent = 'x';
            deleteBtn.classList.add('deleteBtn');

            li.appendChild(deleteBtn);
            chapterList.appendChild(li)

            deleteBtn.addEventListener('click', function(){
                li.remove();
            });
            chapterInput.value = '';
            chapterInput.focus();
    }
    });
});