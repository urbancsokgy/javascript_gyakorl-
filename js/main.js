
    var elementsek=document.querySelectorAll('.click-me');
    for (let i=0;i<elementsek.length; i+=1){
        elementsek[i].addEventListener('click', function(){
            console.log('item' +i);
        })
    }
    console.log
    console.log

