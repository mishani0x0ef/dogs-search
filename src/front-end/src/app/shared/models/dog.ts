export interface Dog {
    id: string;
    birthday: string;
    name: string;
    age: number;
    gender: string;
    imageUrl?: string;
    story: string;
    location: {
        lat: number,
        long: number,
    };
    additionalImages: [string];
    isAdopted: boolean;
    like: number;
}
