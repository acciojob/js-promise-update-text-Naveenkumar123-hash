//your JS code here. If required.
function generatePromise(){
	return new Promise((resolve,reject) => {
		setTimeOut( () => {
			resolve("Hello, world!")
		}, 1000)
	})
}

generatePromise().then((data)=> {
	const element =document.getElementById("output");
	element.innerText=data;
})
	