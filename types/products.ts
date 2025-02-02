

export interface Product {
    _id: number;
    
    _type: "reference";
    image? : {
        asset: {
            _ref: string;
            _type: "image";

        }};
price: number;
description : string;
dimensions: string;
features: string;
tags: string;
name: string;
slug: {
    _type: "slug";
    current: string;
};
}