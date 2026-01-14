
import { Card } from "./Deck.mjs";

class Player
	{
	id:number;
	name:string;
	hand:Array<Card>;
	score:number;

	constructor(id:number, name:string)
		{
		this.id = id;
		this.name = name;
		this.hand = new Array<Card>();
		this.score = 0;
		}

	setHand(cards:Array<Card>):void
		{
		this.hand = cards.sort((left:number, right:number) => left - right);
		}

	getCards(predicate:(value:number) => boolean):Array<Card>
		{
		return this.hand.filter(predicate);
		}

	getUpCards():Array<Card>
		{
		return this.getCards((value:number) => value > 50);
		}

	getDownCards():Array<Card>
		{
		return this.getCards((value:number) => value < 50);
		}
	}

export
	{
	Player
	};
