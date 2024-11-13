export enum DestinationEnum {
	Moon = "Moon",
	Mars = "Mars",
	Europa = "Europa",
	Titan = "Titan",
}

export type DestinationType = keyof typeof DestinationEnum;

export interface Data {
	destinations: IDestination[];
	crew: ICrew[];
	technology: ITechnology[];
}

export interface IDestination {
	name: DestinationType;
	description: string;
	distance: string;
	travel: string;
	images: {
		png: string;
		webp: string;
	};
}

export interface ICrew {
	name: string;
	role: string;
	bio: string;
	images: {
		png: string;
		webp: string;
	};
}
export interface ITechnology {
	name: string;
	description: string;
	images: {
		portrait: string;
		landscape: string;
	};
}
