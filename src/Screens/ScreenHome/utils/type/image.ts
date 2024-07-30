
  export interface CardProps {
    imageUrl: string;
    title: string;
    likes: number;
    downloads: number;
    views: number;
    tags: string[];
    onPress: () => void;
  }