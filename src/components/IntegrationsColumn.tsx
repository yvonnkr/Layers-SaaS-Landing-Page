"use client";
import React from "react";
import Image from "next/image";
import { type IntegrationsType } from "@/sections/Integrations";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export default function IntegrationsColumn(props: {
    integrations: IntegrationsType;
    className?: string;
    reverse?: boolean;
}) {
    const { integrations, className, reverse } = props;

    return (
        <motion.div
            initial={{
                y: reverse ? "-50%" : 0,
            }}
            animate={{
                y: reverse ? 0 : "-50%",
            }}
            transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
            }}
            className={twMerge("flex flex-col gap-4 pb-4", className)}
        >
            {Array.from({ length: 2 }).map((_, i) => (
                <React.Fragment key={i}>
                    {integrations.map((integration) => (
                        <div
                            key={integration.name}
                            className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
                        >
                            <div className="flex justify-center">
                                <Image
                                    src={integration.icon}
                                    alt={`${integration.name} icon`}
                                    className="size-24"
                                />
                            </div>
                            <h3 className="text-3xl text-center mt-6">
                                {integration.name}
                            </h3>
                            <p className="text-center text-white/50 mt-2">
                                {integration.description}
                            </p>
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </motion.div>
    );
}
