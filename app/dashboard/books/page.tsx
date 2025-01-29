import { ProductsBooksList } from 'components/product-books-list-grid';
import { RecommendedProductsList } from '@/components/recommended-books-product-list-grid';
import { BarChart } from 'components/product-books-list-grid';
import { productsBooks } from '@/app/lib/product-data-tables';

export default async function BooksPage() {
    const products = await productsBooks; // Fetch data on the server

    return (
        <div className="bg-transparent">
            <div className="flex items-center justify-center justify-self-center my-8">
                <h2 className="text-3xl font-butler mb-8">Books</h2>
            </div>
            <div>
                <RecommendedProductsList />
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-8 ml-28">Discover</h2>
                <div>
                    <BarChart products={products} />
                </div>
            </div>
            <div>
                <ProductsBooksList products={products} />
            </div>
        </div>
    );
}