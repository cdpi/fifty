
/**
 * Compteur de cartes jouées
 */
interface Counter
	{
	add(value:number):void;

	reset():void;
	}

/**
 * Compteur précis, compte chaque valeur
 */
class Exact implements Counter
	{
	values:Array<number> = Array.from({length: 99}, () => 0);

	add(value:number):void
		{
		this.values[value - 1]++;
		}

	reset():void
		{
		this.values = Array.from({length: 99}, () => 0);
		}
	}

/**
 * Compteur moyen, compte par dizaines
 */
class Tens implements Counter
	{
	tens:Array<number> = Array.from({length: 10}, () => 0);

	add(value:number):void
		{
		this.tens[Math.floor(value / 10)]++;
		}

	reset():void
		{
		this.tens = Array.from({length: 10}, () => 0);
		}
	}

/**
 * Compteur grossier, compte juste les cartes hautes / basses
 */
class UpDown implements Counter
	{
	up:number = 0;
	down:number = 0;

	add(value:number):void
		{
		if (value > 50)
			{
			this.up++;
			}
		else if (value < 50)
			{
			this.down++;
			}
		}

	reset():void
		{
		this.up = 0;
		this.down = 0;
		}
	}

export
	{
	Counter,
	Exact,
	Tens,
	UpDown
	};
