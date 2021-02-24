
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
.then(res => res.json())
.then(data => console.log(1,data))


fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
.then(res => res.json())
.then(data => console.log(2,data))



fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast,garlic,salt')
.then(res => res.json())
.then(data => console.log(3,data))


fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
.then(res => res.json())
.then(data => console.log(4,data))


fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
.then(res => res.json())
.then(data => console.log(5,data))


fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=list')
.then(res => res.json())
.then(data => console.log(6,data))


fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
.then(res => res.json())
.then(data => console.log(7,data))


fetch('https://www.themealdb.com/api/json/v1/1/random.php?')
.then(res => res.json())
.then(data => console.log(8,data))


fetch('https://www.themealdb.com/api/json/v1/1/categories.php?')
.then(res => res.json())
.then(data => console.log(9,data))



fetch('https://www.themealdb.com/api/json/v1/1/latest.php?')
.then(res => res.json())
.then(data => console.log(10,data))



fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
.then(res => res.json())
.then(data => console.log(11,data))



fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
.then(res => res.json())
.then(data => console.log(12,data))


fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
.then(res => res.json())
.then(data => console.log(13,data))


fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
.then(res => res.json())
.then(data => console.log(14,data))







