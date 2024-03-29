"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

import { motion, useAnimation } from "framer-motion";
import Icon from "@/components/Icon";

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair-display",
	display: "swap",
});

export default function Home() {
	const blurVariants = {
		hidden: { filter: "blur(10px)", opacity: 0 },
		visible: { filter: "blur(0px)", opacity: 1 },
	};

	return (
		<main className="flex bg-offwhite min-h-screen flex-col items-center">
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
					transition={{ duration: 1 }}
					variants={blurVariants}
					className="gap-4 border-solid border-copper flex flex-col items-center pt-24 px-8 w-full"
				>
					<Image
						src="/logo.png"
						width={500}
						height={192}
						alt="logotype for The Cowprint Vault"
					/>
					<h1 className="sr-only">The Cowprint Vault</h1>
					<h2 className="text-2xl font-sans max-w-xl text-center font-light italic text-offwhite">
						Homemade holiday gifts from the home of Courtney & Peter Vogt
					</h2>
				</motion.div>
			</section>
			<section className="pt-20 flex flex-col xs:px-8 items-center">
				<Icon name="icon1" />
				<h2
					className={`${playfair.variable} font-playfair-display mt-4 mb-8 text-4xl tracking-tightest font-medium text-hunter`}
				>
					What is “The Cowprint Vault”?
				</h2>
				<div className="about bg-marron shadow-chunky flex-col space-y-8 just md:flex-row rounded-lg flex  space-x-8 font-sans text-offwhite px-8 py-8 xs:max-w-none md:max-w-screen-lg">
					<div className="about space-y-4 text-lg  leading-7 font-light">
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
					</div>
					<div className="about space-y-2">
						<Image
							src="/us.jpg"
							className="rounded-md"
							width={240}
							height={240}
							alt="peter & courtney vogt stand in hotel Paisano lobby"
						/>
						<figcaption className="w-full text-sm italic">
							Fun fact: two of our dogs have “cow print” pattern fur, and the
							initials of “CowPrint Vault” mirror the initials of our names,
							Courtney & Peter Vogt.
						</figcaption>
					</div>
				</div>
			</section>
			<section className="flex flex-col items-center pt-20 w-full">
				<Icon name="icon2" />
				<h2
					className={`${playfair.variable} font-playfair-display mt-4 mb-8 text-4xl tracking-tightest font-medium text-hunter`}
				>
					This year&apos;s gift
				</h2>
				<div className="w-full flex flex-col items-center bg-hunter text-offwhite py-20">
					<div className="flex flex-col md:flex-row space-x-8 space-y-4">
						<div className="bg-shining-pattern bg-cover bg-center p-8">
							<Image
								className="xs:invisible md:visible"
								src="/cow.png"
								width={454}
								height={475}
								alt="jar of tallow balm"
							/>
						</div>
						<div className="flex flex-col">
							<span className="flex-shrink-0 space-y-2">
								<h4
									className={`${playfair.variable} text-copper capitalize tracking-[2px] text-xl font-playfair-display`}
								>
									NO. 01
								</h4>
								<h4
									className={`${playfair.variable} text-offwhite tracking-[-9.6px] text-[128px] font-playfair-display line-clamp leading-none`}
								>
									Tallow
									<br />
									balm
								</h4>
							</span>
							<span className="text-lg xs:mt-10 md:mt-20 leading-7 text-offwhite font-sans">
								<p>
									Great for using as a{" "}
									<span className="text-copper font-semibold">
										facial moisturizer, body butter, hand cream, lip balm, or
										hair mask.
									</span>
								</p>
								<p>
									Contains{" "}
									<span className="text-copper font-semibold">
										Vitamins A, D, E,
									</span>{" "}
									and{" "}
									<span className="text-copper font-semibold">
										antioxidants.
									</span>
								</p>
							</span>
							<div className="flex flex-col gap-4 md:flex-row pt-10 pr-2">
								<ul className="space-y-2 text-lg">
									<h5
										className={`${playfair.variable} text-copper tracking-tightest text-2xl font-playfair-display`}
									>
										Instructions for use
									</h5>
									<li>
										Always perform a patch test, especially when using on face
										area
									</li>
									<li>Always use clean hands, or an applicator. </li>
									<li>Use SPF - oils can cause photosensitivity!</li>
									<li>Store below 75 degrees to maintain texture </li>
									<li>Discard tallow after 6 months</li>
									<li>Feel free to keep and reuse the jar!</li>
								</ul>
								<ul className="space-y-2 text-lg">
									<h5
										className={`${playfair.variable} text-copper tracking-tightest text-2xl font-playfair-display`}
									>
										Ingredients
									</h5>
									<li>Grass fed beef tallow</li>
									<li>Natural refined coconut </li>
									<li>Clove bud</li>
									<li>Nutmeg + cinnamon leaf oil</li>
									<li>Arrowroot powder</li>
									<li>Vanilla extract </li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="flex flex-col items-center pt-20 pb-10 w-full px-4">
				<Icon name="icon3" />
				<h2
					className={`${playfair.variable} font-playfair-display mt-4 mb-8 text-4xl tracking-tightest font-medium text-hunter`}
				>
					Not on the list?
				</h2>
				<div className="flex flex-col items-center space-y-6 w-full">
					<p className="text-hunter text-lg font-sans">
						Hit the button to send us an email and let us know you want in. We
						will only send an initial email to confirm your shipping address,
						and an email when your gift is on the way.
					</p>
					<a
						href="mailto:peter@petervogt.co"
						className="px-4 w-full md:w-1/4 py-6 text-base font-medium text-offwhite bg-hunter hover:bg-copper focus:ring-4 focus:outline-none focus:ring-copper rounded-lg text-center"
					>
						Sign up for the gift list
					</a>
					<Image src="/brand.png" width={88} height={88} alt="brand logo" />
				</div>
			</section>
			<footer className="text text-xs font-sans py-4 w-full bg-hunter text-white text-center">
				Copyright 2024 Peter & Courtney Vogt. Attribution for the art deco icons
				goes to the phenomenal Olena Panasovska via the nounproject.
			</footer>
		</main>
	);
}
