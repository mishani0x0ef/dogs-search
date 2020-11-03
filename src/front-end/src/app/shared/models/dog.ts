export interface Dog {
    id: string;
    name: string;
    age: number;
    gender: 'male' | 'female';
    imageUrl?: string;
    story: string;
}
