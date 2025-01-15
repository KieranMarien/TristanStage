const RecommendedProducts = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        rating: 4,
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        rating: 4,
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Blue',
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        rating: 4,
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        rating: 4,
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Purple',
    },
    // More products...
]

import { ProductRating } from 'components/product-rating';

export async function RecommendedProductsList() {
    return (
        <div className="bg-transparent font-tommy my-8">
            <h2 className="text-3xl font-bold mb-8 ml-28">Recommendations</h2>
            <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {RecommendedProducts.map((product) => (
                        <div key={product.id} className="group relative">
                            <img
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                            />
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0"/>
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                    {product.rating ? <ProductRating rating={product.rating}/> : null}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}