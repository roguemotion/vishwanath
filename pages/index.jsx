import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Contact from "@/components/Contact";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Hi, I'm Vishwanath Reddy Koppula";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
        setInterval(() => setShowCursor(prev => !prev), 500);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Head>
        <title>Vishwanath Reddy Koppula ✦ developer</title>
        <link rel="icon" href="/Profile.jpeg" />
      </Head>
      <div className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 mx-auto max-w-[90rem] flex flex-col justify-center">
        <div className="max-w-[90rem] mx-auto">
          <div className="flex flex-col sm:flex-row items-center mb-6">
            <Image
              src="/Profile.jpeg"
              alt="Vishwa"
              width="80"
              height="80"
              className="rounded-full mb-4 sm:mb-0 sm:mr-6"
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center sm:text-left whitespace-pre-wrap bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text">
              {typedText}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
            </h1>
          </div>
          <div className="sm:ml-24">
            <Link
              href={"https://www.linkedin.com/in/vishwanath-reddy-koppula-0256ab226"}
              target="_blank"
              className="text-[#717171bb] flex items-center justify-center sm:justify-start text-base mb-4 hover:text-[#717171ff] transition-colors duration-300"
            >
              <p>Vishwanath reddy koppula</p>
              <BsArrowUpRight className="stroke-1 h-3 ml-1" />
            </Link>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl text-center sm:text-left">
              A dedicated engineer with a passion for system software, AI, and web development. 
              I specialize in creating user-centric, reactive web applications using advanced technologies. 
              With a solid foundation in Electronics and Communication Engineering, and hands-on experience 
              in SQL, C#, and AI, I continuously strive to enhance user experiences through innovative and cutting-edge solutions.
            </p>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 dark:from-gray-700 dark:via-gray-500 dark:to-gray-300 text-transparent bg-clip-text selection:bg-transparent">
            Explore More
          </h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/projects" className="px-6 py-3 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg text-white rounded-full hover:bg-opacity-70 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-700">
              Projects
            </Link>
            <Link href="/skills" className="px-6 py-3 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg text-white rounded-full hover:bg-opacity-70 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-700">
              Skills
            </Link>
            <Link href="/timeline" className="px-6 py-3 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg text-white rounded-full hover:bg-opacity-70 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-700">
              Timeline
            </Link>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16">
          <Contact />
        </div>
      </div>
      <style jsx global>{`
        ::selection {
          background-color: rgba(100, 100, 100, 0.3);
          color: inherit;
        }
      `}</style>
    </>
  );
}