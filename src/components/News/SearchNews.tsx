'use client'

import { Actuality } from "@/types/actuality";
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleNews from "@/components/News/SingleNews";


const SearchNews = ({ actuality }: { actuality: Actuality[] }) => {

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredData = actuality.filter(
        (actuality) =>
            actuality.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            actuality.paragraph.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Recherche..."
                    className="w-full p-2 mb-6 text-body-color border bg-white font-akira outline-none"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                    {filteredData.map((actuality) => (
                        <SingleNews key={actuality.id} actuality={actuality} />
                    ))}
                </div>
        </>
    );
};

export default SearchNews;
