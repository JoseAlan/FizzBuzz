function fizzbuzz(number){
  if (number % 15 === 0){
  	return "FizzBuzz";
  } else if (number % 3 ===0){
  	return "Fizz";
  } else if (number % 5 ===0){
  	return "Buzz";
  } else {
  	return number;
  }

}

for (i = 1; i <= 100; i++){
	console.log (fizzbuzz (i));
}