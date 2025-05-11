 function calculateArea() {
 let radius = prompt("Enter the radius of the circle:");
	 radius = parseFloat(radius);
	 let area = Math.PI * radius * radius;
	 alert(`The area of circle with radius ${radius} is ${area.toFixed(2)}`)
           
}
calculateArea();
