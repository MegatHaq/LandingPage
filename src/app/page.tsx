import Image from "next/image";
import { Badge } from "./components/badge";
import { Gallery } from "./components/gallery";

export default function HomePage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] px-[10vw] pt-[10vh] grid grid-cols-1 z-0 relative mb-[5vh]">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-12 top-[-100vh] z-0 opacity-50"
      >
        <path
          className="z-0"
          fill="#CCCCCC"
          d="M69.9,-19.5C77,-0.9,59.8,28.8,35.4,45.8C11.1,62.8,-20.4,67.1,-40.5,53.1C-60.6,39.1,-69.3,6.9,-60.7,-13.9C-52,-34.7,-26,-43.9,2.7,-44.8C31.4,-45.7,62.8,-38.2,69.9,-19.5Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className="flex h-[70vh] relative">
        <div className="w-1/2">
          <p className="text-gray-500 leading-relaxed tracking-widest">
            SAY HELLO TO X
          </p>
          <h1 className="text-7xl text-left font-bold">
            THE ULTIMATE LANDING THEME
          </h1>
          <div className="flex gap-4 mt-4 bg-gray-500 px-4 py-2 w-4/6 rounded-full justify-center">
            <Badge>UPDATE</Badge>
            <p className="py-1 text-gray-200">
              VERSION 4.7.2 HAS BEEN RELEASED!
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src={"blobs/logo.svg"}
            alt=""
            height={500}
            width={500}
            className="mt-[-50px] mx-auto"
          />
        </div>
      </div>
      <div className="relative">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[-200px] left-[-150] z-0 opacity-50 w-[700px] h-[700px]"
        >
          <path
            fill="#CCCCCC"
            d="M63.7,-21.4C69.7,-2.1,53,23.8,30.5,39.6C8,55.4,-20.2,61,-42,47.6C-63.8,34.2,-79.1,1.8,-71,-20.3C-62.9,-42.4,-31.5,-54.2,-1.3,-53.8C28.8,-53.4,57.7,-40.7,63.7,-21.4Z"
            transform="translate(100 100)"
          />
        </svg>
        <div className="flex relative z-10">
          <div className="w-3/5">
            <div className="h-[7px] w-1/5 bg-red-600 mb-4" />
            <h1 className="text-7xl font-bold">CORNERSTONE</h1>
            <p className="text-2xl">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Mi facilisis
              orci porttitor amet cras ornare. Fames felis netus venenatis,
              hendrerit mauris fermentum justo ante. Nostra ut porta neque
              aliquam massa sagittis luctus vitae in. Quisque fringilla curae
              aliquet maecenas in maecenas.
            </p>
          </div>
        </div>
        <div className="relative z-10 mt-[5vh]">
          <Gallery
            className={
              "w-[80vw] h-[80vh] rounded-md bg-gray-950 text-gray-200 p-4 tracking-widest"
            }
          />
        </div>
        <div className="relative z-10 mt-[10vh] flex">
          <div className="w-1/2">
            <h1 className="text-7xl font-bold">CLUTTER FREE WORKSPACE</h1>
            <h2 className="text-2xl">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi
              facilisis ornare tortor nullam at bibendum aliquet quisque.
              Pellentesque cursus lobortis bibendum bibendum egestas iaculis
              nostra? Ante felis accumsan accumsan luctus maximus mus congue
              rhoncus accumsan. Per quisque orci donec.
            </h2>
          </div>
          <div className="w-1/2">
            <Image
              src={"/blobs/computer.svg"}
              width={300}
              height={300}
              alt=""
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
