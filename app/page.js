"use client";
import Image from "next/image";

import { motion } from "framer-motion";

export default function Home() {
	const variants1 = {
		hidden: { filter: "blur(10px)", opacity: 0 },
		visible: { filter: "blur(0px)", opacity: 1 },
	};
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
					className="border-x-2 gap-4 border-solid border-copper flex flex-col items-center pt-24 w-full h-full"
				>
					<Image
						src="/logo.png"
						width={500}
						height={192}
						alt="logotype for The Cowprint Vault"
					/>
					<p className="text-2xl max-w-xl text-center font-light italic text-white">
						Homemade holiday gifts from the home of Courtney & Peter Vogt
					</p>
				</motion.div>
			</section>
			<section>test</section>
		</main>
	);
}
