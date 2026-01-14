
import { Card, Deck } from "./Deck.mjs";
import { Player } from "./Player.mjs";

type Direction = "UP" | "DOWN";

class Fifty
	{
	deck:Deck;
	players:Array<Player>;

	constructor()
		{
		this.deck = new Deck(true);
		this.players = new Array<Player>();
		}

	start()
		{
		this.players.forEach((player:Player) =>
			{
			player.setHand(this.deck.deal(8));
			});
		}
	}

export
	{
	Direction,
	Fifty
	};
