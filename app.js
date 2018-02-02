/*
* Demonstrates array declarions by storing single variables into an array.
*
* Return	Cars (array), Cars length	
*/
function cars(){
	var car1 = "Toyota";
	var car2 = "Jeep Wrangler";
	var car3 = "Mazda";

	//Create an array declaration named cars and set each car variable as the values.
<<<<<<< HEAD
	var cars = ["Toyota", "Jeep Wrangler", "Mazda"];
	//Print the created array
	console.log(cars);
	//Print the array length
	console.log(cars.length)
	//Return the created array and the array length
	return (cars + "" + cars.length);
};
=======
  var cars = [car1, car2, car3];
	//Print the created array
  console.log(cars);
	//Print the array length
  console.log(cars.length);
	//Return the created array and the array length
	return cars + " " + cars.length;
}
>>>>>>> d0de1e3a06002fe49d31c54fb1658f1f5daf7ac4

console.log(cars());

/*
* Demonstrates array declarions by storing parameters into a single array.
*
* Parameters 	food (string), drink (string), dessert (string)
* Return 	An order as a complete sentence represented as a string
*/
function order(food, drink, dessert){
	//Store the parameters in an array called "order"
<<<<<<< HEAD
	var order = [food, drink, dessert];
	//Print the array named "order"
	console.log(order);
	//Print the length of the array named "order"
	console.log(order.length);
	//Return the order as a complete sentence represented as a string
	return ("I have ordered a " + order + ".");
};
=======
  var order = [food, drink, dessert];
	//Print the array named "order"
	console.log(order);
	//Print the length of the array named "order"
  console.log(order.length);
	//Return the order as a complete sentence represented as a string
	return "I want a " + order + ".";
}
>>>>>>> d0de1e3a06002fe49d31c54fb1658f1f5daf7ac4

console.log(order("Burger", "root beer", "frosty"));

var currentClasses = [
	"Band", 
	"Biology", 
	"Chemistry", 
	"Orchestra",
	"Physical Education",
	"Physics",
	"Web Development"
];

/*
* Uses for loop to iterate through array passed as a parameter
* and replaces content at specified index within for loop
*
* Return 	classes (array, changed after iteration)
*/
function loopToChange(classes){
	//Print the parameter that is being passed through the function
<<<<<<< HEAD
	console.log(classes)
	//Use a For loop to iterate through each value in the passed array
	for (i = 0; i < currentClasses.length; i++){
		console.log(currentClasses[i]);
	}
	//Return classes
	return ;
=======
  console.log(classes);
	//Use a For loop to iterate through each value in the passed array
	for (var i = classes.length - 1; i >= 0; i--){
		console.log(classes[i]);
	}
	//Return classes
	return classes;
>>>>>>> d0de1e3a06002fe49d31c54fb1658f1f5daf7ac4
}

console.log(loopToChange(currentClasses));

/*
* Uses array method, forEach(), to add the integer 5 to each value in the 
* passed array and sort() to sort the values in increasing order
*
* Return 	numbers (array, incremented and sorted)
*/
function arrayMethodToLoop(numbers){
	//Print the parameter that is being passed through the function
<<<<<<< HEAD
	console.log(numbers);
	//Use the forEach() method to add 5 to each value in the passed array
	arrayMethodToLoop.forEach(numbers)
=======
  console.log(numbers);
	//Use the forEach() method to add 5 to each value in the passed array
	var changedArray = [];

	numbers.forEach(function(curr, index){
		changedArray.push(curr + 5);
		changedArray.sort();
	})
>>>>>>> d0de1e3a06002fe49d31c54fb1658f1f5daf7ac4
	//Return the changed array
	return changedArray;
}

console.log(arrayMethodToLoop([5, 7, 3, 4, 5]));
console.log(arrayMethodToLoop([5 + 1, 3]));

/*
* Demonstrates the array methods: sort(), indexOf(), pop(), and push()
*
* Return 	priorties (array)
*/
function moreArrayMethods(priorities){
	//Print the parameter that is being passed through the function
  console.log(priorities);
	//Use the method sort() to sort your priorities
  priorities.sort();
	//Use the method indexOf() to replace "Not Going to Class" to "Going to Class"
  var replace = priorities.indexOf("Not Going to Class");
  replace = "Going to Class";
	//Use the method pop() to remove the item at the end of the array
  priorities.pop();
	//Use the method push() to add a priority that is important to the success of this class and don't forget to sort() them afterwards!
  priorities.push("Studying");
  priorities.sort();
	//Return the changed array
	return priorities;
}

console.log(moreArrayMethods(["Zero Play", "Sleeping", "HW", "Work", "School", "Planning For Future", "Not Going to Class"]));