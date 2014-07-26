for(var count = 1; count <= 100; count++) {
	if (count % 3 !== 0 && count % 5 !== 0) {
		document.write(count);
	} 

	else if (count % 3 === 0 && count % 5 === 0){
		document.write('fizz buzz');
	}

	else if (count % 3 === 0) {
		document.write('fizz');
	}	
	else if ( count % 5 === 0 ) {
		document.write('BUZZ');
	}
}














