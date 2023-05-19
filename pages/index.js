import Head from "next/head";

import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import headsot from "../public/headshot.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Samay Pusarla Portfolio</title>
      </Head>
      <main className=" dark:bg-gray-800 bg-neutral-200 px-10 md:px-20 lg:px-40">
        <section className=" min-h-screen">
          {/* nav bar */}
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">PORTOFSAM</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  href="/Samay_SWE.pdf"
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* nav end */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              SAMAY PUSARLA
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-300">
              Masters Student at Oregon State
            </h3>
            <p className="text-medium py-5 leading-8 text-gray-800 md:text-xl md:max-w-lg md:mx-auto lg:text-2xl lg:max-w-5xl lg:mx-auto dark:text-gray-400">
              An enthusiastic and curious Master of Computer Science student at
              Oregon State University, always eager to explore new areas and
              learn cutting-edge technologies. With a passion for continuous
              learning and a keen interest in discovering the latest
              advancements in the field, I strive to make a positive impact in
              the world of computer science.
            </p>
          </div>
          <div className="flex justify-center gap-16 text-5xl py-6 text-gray-700 dark:text-gray-400">
            {/* <AiFillTwitterCircle /> */}
            <a href="https://www.linkedin.com/in/samaypusarla/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/samaypusarla">
              <AiFillGithub href="https://github.com/samaypusarla" />
            </a>
          </div>
          <div className="relative mt-20 mx-auto rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96 overflow-hidden">
            <Image src={headsot} fill style={{ objectFit: "cover" }} />
          </div>
        </section>

        {/* second page */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-300">
              Services I Offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-700 dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              voluptates modi quibusdam deleniti tempore, error non magnam,
              distinctio mollitia a veniam temporibus totam, rerum quo illum
              nesciunt optio? Tempora, reiciendis!
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">
                Beautiful Designs
              </h3>
              <p className=" py-2 dark:text-gray-400">blah blah blah</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">PS</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">
                Illustrator
              </p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">
                Beautiful Designs
              </h3>
              <p className=" py-2 dark:text-gray-400">blah blah blah</p>
              <h4 className="py-4 text-teal-600 dark:text-gray-300">
                Design tools I use
              </h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">PS</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">
                Illustrator
              </p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">
                Beautiful Designs
              </h3>
              <p className=" py-2 dark:text-gray-400 ">blah blah blah</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">PS</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">
                Illustrator
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className=" text-3xl pt-1">Portfolio</h3>
            <p>some random stuff if u need</p>
          </div>
        </section>
      </main>
    </div>
  );
}
