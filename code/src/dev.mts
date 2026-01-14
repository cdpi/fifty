
import { Card, Deck } from "./Deck.mjs";
import { Counter, Exact, Tens, UpDown } from "./Counter.mjs";

function devCounter()
	{
	const all = Array.from({length: 99}, (value:number, index:number) => index + 1);

	Deck.shuffle(all);

	const random = all.splice(0, 10);

	console.log(random.sort((left:number, right:number) => left - right).join(", "));

	const exact:Exact = new Exact();
	const tens:Counter = new Tens();
	const upDown:Counter = new UpDown();

	random.forEach((value:number) =>
		{
		exact.add(value);
		tens.add(value);
		upDown.add(value);
		});

	console.log(exact);
	console.log(tens);
	console.log(upDown);
	}

devCounter();
