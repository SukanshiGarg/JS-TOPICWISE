let article=document.querySelector("article");
article.classList.add('sam');

// 1.add()

//to add mutliple classes we write them by seperating them with commas
article.classList.add('sam','samarth','neha','maniket')

//more classes can be added without older changes diasppering 
//purani wali classes bhi rhengi aur nayi classes bhi 
article.classList.add('changu-mangu');



//2.remove():
article.classList.remove('changu-mangu');
//isse jo hamne font-family daali thi styling mai woh hatt gyi cuz this class attribute no longer exists

article.classList.remove('sam','maniket');




//3.toggle():
article.classList.toggle('toggle'); //true //cyan color will appear in the background-color

//4.contains():
let contain=article.classList.contains('samarth');
console.log(contain);