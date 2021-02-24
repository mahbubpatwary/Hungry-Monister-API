
/**fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))*/

const get = id => document.getElementById(id);


const fetchFunc = () => {
  fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then(res => res.json())
  .then(data => dataFunc(data))
  .catch(err => console.log(err));
};

function dataFunc(myData){
  const mainDiv = get("itemMenu");
  let categories = myData.categories;
  
  categories.map(categori =>{
    
    let {strCategory, strCategoryThumb, strCategoryDescription } = categori;
   
    let newCategori = `
            <div class="categori" onclick='categoriClick("${strCategory}", "${strCategoryThumb}", "${strCategoryDescription}")' >
              <img src="${strCategoryThumb}">
              <h6> ${strCategory} </h6>     
            </div>`
    
   
    mainDiv.innerHTML += newCategori ;
    
 
  })
  
  

//  console.log(categories);
 
};




function categoriClick(heading, images, paragraph){  
  console.log(heading,images,paragraph);
          
   const itemTemp = `<img src="${images}"/> 
                      <h2> ${heading} </h2> 
                      <p>${paragraph}</p> `;     
   
    get("category").innerHTML = itemTemp;
    
    
    
}



