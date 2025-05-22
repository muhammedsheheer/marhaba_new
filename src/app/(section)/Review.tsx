"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-transparent">
      <div className="flex h-full w-full max-w-[1300px] flex-col items-start justify-center gap-4 py-12 md:py-44 md:pt-24">
        <div className="flex h-full w-full flex-col items-start justify-center gap-2 lg:gap-4">
          <h3 className="font-bai w-full text-center uppercase text-primary">
            Reviews
          </h3>
          <h1 className="font-forum w-full text-center text-5xl font-[400] text-primary md:text-8xl">
            Hear Our Guests
          </h1>
        </div>
        <div className="flex w-full p-4">
          {reviews && (
            <div className="w-full px-4">
              <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                  {reviews
                    .filter((review) => review.rating >= 4)
                    .map((review, index) => (
                      <CarouselItem
                        key={index}
                        className="pl-1 md:basis-1/2 lg:basis-1/3"
                      >
                        <div className="p-1">
                          <Card className="h-[300px] border border-primary bg-transparent">
                            <CardContent className="flex flex-col items-center justify-between gap-4 p-6">
                              {/* ⭐ Star Rating */}
                              <div className="flex justify-center">
                                {Array.from({ length: review.rating }).map(
                                  (_, i) => (
                                    <Icons.star
                                      key={i}
                                      className="text-primary"
                                    />
                                  ),
                                )}
                              </div>

                              {/* Review Text */}
                              <p className="font-cormorant line-clamp-6 text-center text-sm text-primary">
                                {review.text.text}
                              </p>

                              {/* Author Name */}
                              <p className="text-center font-playfair text-xs tracking-wide text-primary">
                                — {review.authorAttribution.displayName}
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navigation Arrows */}
                <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 pb-8 transition-transform duration-300 ease-in-out">
                  <CarouselPrevious className="border-primary text-primary transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                  <CarouselNext className="border-primary text-primary transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                </div>
              </Carousel>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
