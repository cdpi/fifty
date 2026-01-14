
import { Card } from "./Deck.mjs";
import { Player } from "./Player.mjs";
import { Fifty } from "./Fifty.mjs";



class AI extends Player
	{
	constructor(id:number, name:string)
		{
		super(id, name);
		}

	gap():void
		{
		const down = this.getDownCards().map((card:Card) => card as number);
		const up = this.getUpCards().map((card:Card) => card as number);

		console.log(Math.max(...down) - Math.min(...down));
		console.log(Math.max(...up) - Math.min(...up));
		}

	display():void
		{
		console.log(this.name);
		console.log(this.getDownCards().join(", "));
		console.log(this.getUpCards().join(", "));
		this.gap();
		console.log("------------------------------------------");
		}
	}

class Simulator extends Fifty
	{
	constructor()
		{
		super();

		this.players.push(new AI(1, "Alice"));
		this.players.push(new AI(2, "Julie"));
		this.players.push(new AI(3, "Bob"));
		this.players.push(new AI(4, "John"));
		}

	play():void
		{
		
		}

	display():void
		{
		this.players.forEach((player:AI) =>
			{
			player.display();
			});
		}
	}

export
	{
	Simulator
	};
