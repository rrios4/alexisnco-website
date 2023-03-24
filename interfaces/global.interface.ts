// Product Interface
export interface IProduct {
    title: string;
    drop_start_date: string;
    drop_close_date: string;
    price: number,
    img_cover_url: string;
    description: string;
    alt: string;
    released: boolean;
    purchase_window_open: boolean;
    sold_out: boolean
    product_images: IProductImages[];
}

export interface IProductImages {
    img: string;
}
