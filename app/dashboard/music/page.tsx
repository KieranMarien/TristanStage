import { MusicCard } from "@/components/music-card";
import { FilterButtons } from "@/components/FilterButtons";
import {BarChart} from "@/components/Chart";

export default function Page() {
    return (
        <div className="bg-transparent font-tommy my-8">
            <div className="flex items-center justify-center justify-self-center my-8">
                <h2 className="text-3xl font-butler mb-8">Music</h2>
            </div>
            <h2 className="text-3xl font-bold mb-8 ml-28">Recommendations</h2>
            <div className="p-6 mb-12">
                <div className="h-72 max-w-5xl mx-auto">
                    <div className="h-full bg-light-brown grid grid-cols-4 gap-6 rounded-3xl">

                        <MusicCard/><MusicCard/><MusicCard/><MusicCard/>

                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-8 ml-28">Discover</h2>
                <div>
                    <BarChart/>
                </div>
            </div>
            <div className="min-h-screen p-6">
            <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-4 gap-6">

                        <MusicCard/><MusicCard/><MusicCard/><MusicCard/>
                        <MusicCard/><MusicCard/><MusicCard/><MusicCard/>
                        <MusicCard/><MusicCard/><MusicCard/><MusicCard/>
                        <MusicCard/><MusicCard/><MusicCard/><MusicCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}