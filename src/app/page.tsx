import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const perks = [
    {
      name: "Instants Delivery",
      Icon: ArrowDownToLine,
      description:
        "Get Your assets delivered to your email in seconds and download them right away.",
    },
    {
      name: "Guaranteed Quality",
      Icon: CheckCircle,
      description:
        "Every assets on our platform is verified by our team to ensure our highest quality standards",
    },
    {
      name: "For the Plnet",
      Icon: Leaf,
      description:
        "We've pledge 1% of sales to the preservation and restoration f the nature",
    },
  ];
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Your marketplace for high-quality{" "}
            <span className="text-blue-600">digital assets</span>
          </h1>
          <p className="mt-6 text-base max-w-prose text-muted-foreground font-medium">
            Welcome to Asset Market. Every asset on your platform is verified by
            our team to ensure our highest quality standards.{" "}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 tex-sm tracking-tight font-medium">
            <Link href="/product" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant={"ghost"}>Our Quality Promise &rarr;</Button>
          </div>
        </div>

        {/* TODO: List Products */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:ga-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="my-auto md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}