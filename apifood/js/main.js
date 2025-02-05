// let foodname;
// let input = document.querySelector("#searchInput");

// input.addEventListener("input", function (e) {
// foodname = e.target.value;
// console.log(foodname);
// console.log(e);
// menu();
// });

// const menu = () => {
// const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${foodname}`;

// fetch(URL)
// .then((response) => response.json())
// .then((data) => {
// console.log(data);
// console.log(data.meals);
// for (i=0; i < data.meals.length; i++) {
//     // document.querySelector("#results").innerHTML = ``;
//     document.querySelector("#results").innerHTML = `<img src="${data.meals[i].strMealThumb}" alt="test"></img>, ${data.meals[i].strMeal}`;
// }
// })
// .catch((err) => {
// console.log(`Échec de récupération: ${err}`);
// });
// };


const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");

let searchRecipe = "";

searchInput.addEventListener("input", (e) => {
	searchRecipe = e.target.value;
	// console.log(searchRecipe);
	searchFood();
});

function searchFood() {
	fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchRecipe}`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data.meals);
			if (data.meals == null) {
				results.innerHTML = `<span class="noResult">Aucun résultat</span>`;
			}

			results.innerHTML = "";

			for (let i = 0; i < data.meals.length; ++i) {
				results.innerHTML += `
										<div class="searchContainer">
											<h2>${data.meals[i].strMeal}</h2>
											<img src='${data.meals[i].strMealThumb}' /></br>
										</div>
										`;
			}
		})
		.catch((err) => {
			console.log(`Erreur lors de la récupération des données: ${err}`);
		});
}

/* MAP() method */
// 	results.innerHTML = data.meals
// 		.map(
// 			(meal) =>
// 				`
// 							<div class="searchContainer">
// 								<h2>${meal.strMeal}</h2>
// 								<img src='${meal.strMealThumb}' /></br>
// 							</div>
// 							`,
// 		)
// 		.join("");
// }
// }