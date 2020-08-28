  let action
  let done = false
 let screen = document.querySelector('.screen').value
 function getNumber(btn){
	let res = btn.value
	document.querySelector('.screen').value += res
	if(res == "+"){
		action = 'plus'
	}else if(res == "-"){
		action = 'minus'
	}
	return document.querySelector('.screen').value
}

let res

function equel() {
let arr =  document.querySelector('.screen').value.split('')
	if(action == 'plus'|| arr.indexOf('+') != -1){
		res = document.querySelector('.screen').value.split('+')
		res = res.map(i => i = +i)
		.reduce((a,b) => a + b,0)
		document.querySelector('.screen').value = `${document.querySelector('.screen').value}=${res}`
		done = true
	}
	if(action == 'minus'|| arr.indexOf('-') != -1){
		res = document.querySelector('.screen').value.split('-')
		res = res.map(i => i = +i)
		.reduce((a,b) => a - b)
		document.querySelector('.screen').value = `${document.querySelector('.screen').value}=${res}`
		done = true
	}	

}

function c(){
	document.querySelector('.screen').value = ''
	done = false
}

function deleteOne(){
	let arr = document.querySelector('.screen').value.split('')
	document.querySelector('.screen').value = arr.slice(0, -1).join('')
	done = false
}

function refresh(){
	if(done && action == 'plus'){
	document.querySelector('.screen').value = res+'+'
	done = false
}
	if(done && action == 'minus'){
	document.querySelector('.screen').value = res+'-'
	done = false
}

}