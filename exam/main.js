function tra(a){
	var b=[[],[]]
	for (var i = 0; i < 2; i++) {
		
		for (var j = 0; j < 2; j++) {
				b[j][i]=a[i][j]
			}
		}
		console.log(b)
	}

var t=[[2,5],[9,8]]

tra(t)