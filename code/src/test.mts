
let all = Array.from({length: 99}, (value:number, index:number) => index + 1);

all.forEach((value:number) =>
	{
	console.log(`${value} : ${value / 10} : ${Math.floor(value / 10)}`);
	});
