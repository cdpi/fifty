
type Card = number;

class Deck
	{
	private cards:Array<Card>;

	constructor(shuffled:boolean = false)
		{
		const deck:Array<Card> = new Array<Card>();

		for (let i = 1; i <= 49; i++)
			{
			deck.push(i);
			//deck.push(i);
			}

		for (let i = 51; i <= 99; i++)
			{
			deck.push(i);
			//deck.push(i);
			}

		if (shuffled)
			{
			Deck.shuffle(deck);
			}

		this.cards = deck;
		}

	get size():number
		{
		return this.cards.length;
		}

	isEmpty():boolean
		{
		return this.cards.length === 0;
		}

	/*
	shuffle():void
		{
		for (let i = this.cards.length - 1; i > 0; i--)
			{
			const j = Math.floor(Math.random() * (i + 1));

			[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
			}
		}
	*/

	deal(count:number):Array<Card>
		{
		// TODO: handle empty deck
		return this.cards.splice(0, count);
		}

	static shuffle(cards:Array<any>):Array<any>
		{
		for (let i = cards.length - 1; i > 0; i--)
			{
			const j = Math.floor(Math.random() * (i + 1));

			[cards[i], cards[j]] = [cards[j], cards[i]];
			}

		return cards;
		}
	}

export
	{
	Card,
	Deck
	};
