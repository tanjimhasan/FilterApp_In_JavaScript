

//Get Input Element

let filterInput = document.getElementById('filterInput');

//Add event Listner

filterInput.addEventListener('keyup', filterNames);

function filterNames(){
	//Get Value of Input
	let filterValue = document.getElementById('filterInput').value.toUpperCase();

	// Get Names From ul

	let ul = document.getElementById('names');
	// Get lis from ul
	let li = ul.querySelectorAll('li.collection-item');
	// Loop through the collection-items lis
	for (let i = 0; i < li.length; i++) {
		let a = li[i].getElementsByTagName('a')[0];

		//if matched

		if (a.innerHTML.toUpperCase().indexOf(filterValue)>-1) {
			li[i].style.display = '';
		}else{
			li[i].style.display = 'None';
		}
	}
	
}
// jQuery(document).ready(function($){
	

	
// });