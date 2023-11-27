import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const headingFont = localFont({
  src: "../public/fonts/DMSerifDisplay-Regular.ttf",
});

const Hero = () => {
  return (
    <div
      id="home"
      className="flex items-center h-screen mb-[12] bg-fixed bg-cover bg-left custom-img"
    >
      <div className="text-white w-full max-w-[1240px] m-auto p-4">
        <h2 className={cn(headingFont.className, "text-5xl mb-4")}>
          Gulli Skatun
        </h2>
        <p className="text-xl mb-12 w-[80%] lg:w-[40%]">
          Psychosynthesis Counsellor specializing in self-esteem, relationship
          issues, and eating disorders.
        </p>
        <Button
          asChild
          className="p-4 text-xl transition-colors duration-300 bg-[#e8beaf] hover:bg-[#c99783]"
        >
          <Link href="/#contact">Get in touch</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
