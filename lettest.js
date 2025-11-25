var topic = "JavaScript";

if (topic) {
	var topic = "React";
	console.log("block", topic);	//block React
}

console.log("global", topic);	//global React

//-----

var lopic = "JavaScript";

if (topic) {
	let lopic = "React";
	console.log("block", lopic);	//block React
}

console.log("global", lopic);	//global JavaScript