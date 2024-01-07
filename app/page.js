"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

import { motion } from "framer-motion";
import Icon from "@/components/Icon";

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair-display",
	display: "swap",
});

export default function Home() {
	const variants1 = {
		hidden: { filter: "blur(10px)", opacity: 0 },
		visible: { filter: "blur(0px)", opacity: 1 },
	};

	const FADE_UP_ANIMATION_VARIANTS = {
		hidden: { opacity: 0, y: 10 },
		show: { opacity: 1, y: 0, transition: { type: "spring" } },
	};

	const [inView, setInView] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => setInView(entry.isIntersecting),
			{ threshold: 0.1 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, []);

	return (
		<main className="flex min-h-screen flex-col items-center">
			<section className="hero h-screen w-full xs:p-4 md:p-20">
				<div className="w-full flex justify-between items-start">
					<Image
						src="/fl.png"
						width={185}
						height={185}
						alt="art deco corner flourish"
					/>
					<div className="bg-copper w-full h-[3px] mt-[1px]" />

					<Image
						src="/fr.png"
						width={185}
						height={185}
						alt="art deco corner flourish"
					/>
				</div>
				<motion.div
					initial="hidden"
					animate="visible"
					transition={{ duration: 1.5 }}
					variants={variants1}
					className="gap-4 border-solid border-copper flex flex-col items-center pt-24 px-8 w-full"
					ref={ref}
				>
					<Image
						src="/logo.png"
						width={500}
						height={192}
						alt="logotype for The Cowprint Vault"
					/>
					<p className="text-2xl font-sans max-w-xl text-center font-light italic text-white">
						Homemade holiday gifts from the home of Courtney & Peter Vogt
					</p>
				</motion.div>
			</section>
			<section class="pt-20 flex flex-col xs:px-8 items-center">
				<Icon name="icon1" />
				<h2
					class={`${playfair.variable} font-playfair-display mt-4 mb-8 text-4xl tracking-tightest font-medium text-hunter`}
				>
					What is “The Cowprint Vault”?
				</h2>
				<motion.div
					ref={ref}
					initial="hidden"
					animate="show"
					viewport={{ once: true }}
					variants={{
						hidden: {},
						show: {
							transition: {
								staggerChildren: 0.15,
							},
						},
					}}
					class="bg-marron shadow-chunky flex-col space-y-8 just md:flex-row rounded-lg flex place-items-start space-x-8 font-sans text-offwhite p-14 xs:max-w-none md:max-w-screen-lg"
				>
					<motion.div
						ref={ref}
						variants={FADE_UP_ANIMATION_VARIANTS}
						class="space-y-4 text-lg flex-shrink-1 leading-9 font-light"
					>
						<p>
							When Courtney was diagnosed with EDS, POTS and MCAS, we ended up
							converting many of our household products to homemade, natural
							mixes. Everything from shampoo, to hand soap, to laundry detergent
							was brought “in house”, in the hopes of cutting down exposure to
							harmful chemicals.
						</p>
						<p>
							While gift planning for the holidays in 2024, Courtney had the
							idea to bottle a tallow balm recipe she had developed, as a gift
							for all of our loved ones.
						</p>
						<p>
							Then, we thought - why not do this every year? And why not make it
							a tradition? Thus, the vault was born. Each year, friends and
							family can await a surprise gift from our “vault”.
						</p>
					</motion.div>
					<motion.div
						ref={ref}
						class="space-y-2"
						variants={FADE_UP_ANIMATION_VARIANTS}
					>
						<Image
							src="/us.jpg"
							class="rounded-md"
							width={360}
							height={264}
							alt="peter & courtney vogt stand in hotel Paisano lobby"
						/>
						<figcaption class="w-full text-sm">
							Fun fact: two of our dogs have “cow print” pattern fur, and the
							initials of “CowPrint Vault” mirror the initials of our names,
							Courtney & Peter Vogt.
						</figcaption>
					</motion.div>
				</motion.div>
			</section>
		</main>
	);
}
