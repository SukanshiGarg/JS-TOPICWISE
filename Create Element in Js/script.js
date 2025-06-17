console.log("testing");
// document.createElement('h1')
// document.createElement('h2')


let div = document.createElement('div');
let article= document.querySelector('article');
let div2=document.createElement('div');


div.innerText="Added Through JS inner text 1"
div2.innerText="Inner text 2"


/* append child - accepts only 1 element , end mai , html elements only */  
article.appendChild(div); 

/*append-to append two or more elements here ,end mai , html +text allowed*/
article.append(div ,div2);

/* prepend - Append to the starting  , it can take multiple elements , starting , html +text allowed */
article.prepend(div , div2);




