import Image from "next/image";
export default function Home() {
  return (
    <div className="w-[100%] px-[20px] h-[100dvh] flex justify-center items-center flex-col">
      <h5 className="text-[1.1rem] text-center"> Taking a short break to improve your experience.</h5>
      <a className="block text-center mt-[30px] dowmnlaod-resume" href="/AHMED-SALMAN.pdf" download>Download Resume</a>
    </div>

  );
}
