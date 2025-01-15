'use client'

import { useEffect } from "react";

export function BarChart() {
    useEffect(() => {
        function initializeChart() {
            // Example dataset (simulate a database)
            const database = [
                { id: 1, name: "book1", category: "programming" },
                { id: 2, name: "book2", category: "design" },
                { id: 3, name: "book3", category: "educational" },
                { id: 4, name: "book4", category: "programming" },
                { id: 5, name: "book5", category: "programming" },
                { id: 6, name: "book6", category: "design" },
                { id: 7, name: "book7", category: "educational" },
                { id: 8, name: "book8", category: "educational" },
                { id: 9, name: "book9", category: "design" },
                { id: 10, name: "book10", category: "design" },
                { id: 11, name: "book11", category: "design" },
                { id: 12, name: "book12", category: "design" },
                { id: 13, name: "book13", category: "educational" },
                { id: 14, name: "book14", category: "design" },
                { id: 15, name: "book15", category: "programming" },
                { id: 16, name: "book16", category: "design" },
                { id: 17, name: "book17", category: "educational" },
                { id: 18, name: "book18", category: "educational" },
                { id: 19, name: "book19", category: "design" },
                { id: 20, name: "book20", category: "programming" },
            ];

            function calculatePercentages(data: any[]) {
                const total = data.length;

                // Count occurrences of each category
                const counts = data.reduce((acc: Record<string, number>, item) => {
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

            function renderChart(data: any[]) {
                const chartBar = document.getElementById("chart-bar");

                if (!chartBar) {
                    console.error('Element with ID "chart-bar" not found in the DOM.');
                    return;
                }

                chartBar.innerHTML = ""; // Clear existing content

                data.forEach((item) => {
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

            const percentages = calculatePercentages(database);
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