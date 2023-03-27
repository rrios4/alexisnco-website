// Product Interfaces
export interface IProductContenful {
    fields: IProduct
}

export interface IProduct {
    title: string;
    drop_start_date: string;
    drop_close_date: string;
    price: number,
    image_cover_url: IProductCoverImage;
    description: string;
    alt: string;
    released: boolean;
    purchase_window_open: boolean;
    sold_out: boolean
    product_images: IProductImagesContenful[];
}

export interface IProductImagesContenful {
    metadata: Object;
    sys: Object;
    fields: {
        title: string;
        description: string;
        file: {
            url: string;
            contentType: string;
            details: {
                image: {
                    width: number;
                    height: number;
                };
                size: number;
            };
            fileName: string
        }
    }
}

export interface IProductCoverImage {
    fields: {
        title: string;
        description: string;
        file: {
            url: string;
            fileName: string;
            contentType: string
        }
    },
    metadata: {
        tags: [];
    },
    sys: {
        createdAt: Date;
        environment: Object;
        id: string;
        locale: string
        revision: number;
        space: Object;
        type: string;
        updatedAt: Date;
    }
}
