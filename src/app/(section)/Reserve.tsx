import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Reserve = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".zoomin-scroll", {
      scrollTrigger: {
        trigger: ".zoomin-scroll",
        toggleActions: "restart none none none",
      },
      scale: 1, // Adjust the zoom scale as per your need
      duration: 2.5,
    });
  }, []);
  return (
    <section
      className="relative flex h-full w-full items-center justify-center bg-primary pt-8 md:pt-24"
      id="reserve"
    >
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div
        className="absolute left-0 top-0 h-full w-full overflow-hidden"
        style={{
          backgroundImage: "url('/images/home/frame.png')",
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
        }}
      ></div>
      <div className="z-40 flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-8 md:flex-row">
        <div className="flex w-full items-center justify-center p-6 pb-0 md:w-1/2">
          <Image
            src="/images/home/menu/bg1.png"
            width={570}
            height={667}
            alt="menu"
            className="zoomin-scroll h-[350px] w-full rounded-t-full md:h-[500px] md:w-2/3"
            style={{
              transform: "scale(0.8)",
            }}
          />
        </div>
        <div className="flex w-full items-center justify-start md:w-1/2 md:justify-center">
          <div className="flex flex-col gap-4 px-3 pb-12 md:px-0 md:pb-0">
            <p className="font-playfair uppercase text-[#F7F4ED]">Booking</p>
            <p className="font-italiana text-5xl font-[400] text-[#F7F4ED] md:text-7xl md:leading-[70px]">
              Reserve Your
              <br />
              Table at Marhaba
            </p>
            <p className="font-roboto w-full text-[#F7F4ED] md:w-[500px]">
              Pair your meal with our creamy milkshakes, signature sundaes, or a
              variety of classic desserts that bring joy in every bite. Whether
              you`re grabbing a quick takeaway, enjoying a family dinner, or
              treating yourself to something sweet late at night, Marhaba is
              your go-to destination for food that feels as good as it tastes.
            </p>
            <Link href="/table-booking">
              <Button className="z-30 flex items-center justify-center gap-3 rounded-full bg-white px-6 py-7 font-playfair font-semibold text-black hover:bg-secondary">
                Book Now
                <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
