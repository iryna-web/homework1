var article=document.querySelectorAll('.hide-article');
    var arrows=document.querySelectorAll('.arrows');

    function show(index,el){
        article[index].className='show-article'
        arrows[index].className='d6'
        el.classList.add('punks-hover')
    }
    function hide(index,el){
        article[index].className='hide-article'
        arrows[index].className='arrows'
        el.classList.remove('punks-hover')
    }