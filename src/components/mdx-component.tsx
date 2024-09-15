import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";


export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Allows customizing built-in components, e.g. to add styling.
        h1: ({ children }) => (
            <SectionTitle
                title={children.toString()}
                paragraph=""
                width="100%"
                mb={"0"}
            />
        ),
        img: (props) => (
            <Image
                width={"1920"}
                height={"1080"}
                {...(props as ImageProps)}
            />
        ),
        p: ({ children }) => (
            <><p className="text-base font-medium leading-relaxed text-body-color sm:text-lg text-justify whitespace-pre-wrap">{children}</p><br/></>
        ),
        ...components,
    }
}