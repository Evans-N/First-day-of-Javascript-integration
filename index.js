console.log('Hello is thing on?');

const tabHeaders = document.querySelectorAll('.item');
const tabContents = document.querySelectorAll('.tab-content');
console.log(tabContents);
tabContents[0].classList.add('selected');
tabHeaders[0].classList.add('selected');

const handleClick= (e) => {
    tabHeaders.forEach(function(header){
        header.classList.remove('selected');
    });

    const tab=e.target;
    e.target.classList.add('selected');
    const tabname= e.target.dataset.tabname;
    tabContents.forEach(function(stuff){ 
        stuff.classList.remove('selected');
        console.log(tab.dataset.tabname===tabname);
        console.log(tabname);
        if (stuff.dataset.tabname===tabname){
            stuff.classList.add('selected');
            stuff.classList.remove('hidden');
            tab.classList.add('selected');
        } else {
            stuff.classList.add('hidden');
            stuff.classList.remove('selected');
        }
    });
};
tabHeaders.forEach(function(tab){
    tab.addEventListener('click',handleClick);
});
