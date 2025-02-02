import { groq } from "next-sanity";


export const allpoducts=groq`*[_type =="product"]`;
export const newCeramics = groq`*[_type =="product"][0..3]`;
export const Ourpopularproducts = groq`*[_type =="product"][0..3]`;
