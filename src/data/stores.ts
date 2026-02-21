export interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  mapEmbedUrl: string;
  mapLink: string;
  phone?: string;
  hours?: string;
}

export const stores: Store[] = [
  {
    id: "banjara-hills",
    name: "Banjara Hills",
    address: "Road No. 12, Banjara Hills",
    city: "Hyderabad",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.614376958!2d78.4744!3d17.4239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzI2LjAiTiA3OMKwMjgnMjcuOCJF!5e0!3m2!1sen!2sin!4v1",
    mapLink: "https://maps.google.com/?q=Banjara+Hills+Hyderabad",
  },
  {
    id: "kondapur",
    name: "Kondapur",
    address: "Survey No. 64, Kondapur",
    city: "Hyderabad",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.39!3d17.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI4JzQ4LjAiTiA3OMKwMjMnMjQuMCJF!5e0!3m2!1sen!2sin!4v1",
    mapLink: "https://maps.google.com/?q=Kondapur+Hyderabad",
  },
  {
    id: "suncity",
    name: "Suncity",
    address: "Suncity Mall, Secunderabad",
    city: "Hyderabad",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5!2d78.52!3d17.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzI0LjAiTiA3OMKwMzEnMTIuMCJF!5e0!3m2!1sen!2sin!4v1",
    mapLink: "https://maps.google.com/?q=Suncity+Secunderabad",
  },
  {
    id: "ramachandrapuram",
    name: "Ramachandrapuram",
    address: "NH 65, Ramachandrapuram",
    city: "Hyderabad",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0!2d78.35!3d17.40!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1",
    mapLink: "https://maps.google.com/?q=Ramachandrapuram+Hyderabad",
  },
  {
    id: "kompally",
    name: "Kompally",
    address: "Mall Road, Kompally",
    city: "Hyderabad",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.0!2d78.55!3d17.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDMxJzEyLjAiTiA3OMKwMzMnMDAuMCJF!5e0!3m2!1sen!2sin!4v1",
    mapLink: "https://maps.google.com/?q=Kompally+Hyderabad",
  },
];

export function getStoreById(id: string): Store | undefined {
  return stores.find((s) => s.id === id);
}
