export interface ArtworkType {
  id: string;
  title: string;
  artist: string;
  price: number;
  image: string;
  category: 'sculpture' | 'painting';
  description: string;
  dimensions?: string;
  material?: string;
  year: number;
  available: boolean;
}