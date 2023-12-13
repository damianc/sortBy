Array.prototype.sortBy = function (fields) {
	this.sort((a,b) => {
		for (let i=0; i<fields.length; i++) {
			let field = fields[i];
			let st = field[0];
			let asc = true;
			
			if (st === '+' || st === '-') {
				if (st === '-') asc = false;
				field = field.slice(1);
			}
			
			const res = comparer(
				a[field],
				b[field],
				asc
			);
			
			if (res !== 0) return res;
		}
		
		return 0;
	});
	
	function comparer(valueA,valueB,asc=true) {
		const c = valueA + valueB;
		let res;
		
		if (typeof c === 'string') {
			res = valueA.localeCompare(valueB);
		} else {
			res = valueA - valueB;
		}
		
		if (!asc) res *= -1;
		return res;
	}
};
