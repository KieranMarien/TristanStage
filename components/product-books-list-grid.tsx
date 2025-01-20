'use client'

import { useEffect } from "react";
import {ProductRating} from "@/components/product-rating";


import { productsBooks } from '@/app/lib/product-data-tables';
const productsBooks2 = await productsBooks;

export function BarChart() {
    useEffect(() => {
        function initializeChart() {
            // Example dataset (simulate a database)

            function calculatePercentages(products: any[]) {
                const total = products.length;

                // Count occurrences of each category
                const counts = products.reduce((acc: Record<string, number>, item) => {
                    acc[item.category] = (acc[item.category] || 0) + 1;
                    return acc;
                }, {});

                // Convert counts to percentages
                return Object.entries(counts).map(([category, count]) => ({
                    category,
                    count, // Total count of this category
                    percentage: ((count / total) * 100).toFixed(2), // Calculate percentage
                }));
            }

            function renderChart(products: any[]) {
                const chartBar = document.getElementById("chart-bar");

                if (!chartBar) {
                    console.error('Element with ID "chart-bar" not found in the DOM.');
                    return;
                }

                chartBar.innerHTML = ""; // Clear existing content

                products.forEach((item) => {
                    // Create a section for each category
                    const section = document.createElement("div");
                    section.className = `h-full text-white text-sm font-semibold flex items-center justify-center`;
                    section.style.width = `${item.percentage}%`;

                    // Add category-specific colors
                    if (item.category === "programming") {
                        section.classList.add("bg-pink");
                    } else if (item.category === "design") {
                        section.classList.add("bg-light-purple");
                    } else if (item.category === "educational") {
                        section.classList.add("bg-dark-yellow");
                    }

                    // Add text to the section
                    section.textContent = `${item.percentage}% ${item.category}`;
                    chartBar.appendChild(section);
                });
            }

            const percentages = calculatePercentages(productsBooks2);
            renderChart(percentages);
        }

        initializeChart();
    }, []); // The empty dependency array ensures this runs only once when the component mounts.

    return (
        <div id="chart-container" className="max-w-2xl mx-auto p-6">
            <div className="bg-gray-200 rounded-lg h-6 relative flex overflow-hidden" id="chart-bar"></div>
        </div>
    );
}

export async function ProductsBooksList() {
    return (
        <div className="bg-transparent font-tommy">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Books</h2>
                <div
                    className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {productsBooks2.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <img
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                            />
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            {product.rating ? <ProductRating rating={product.rating}/> : null}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}