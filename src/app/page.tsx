import CarCard from "@/components/CarCard";
import ShowMore from "@/components/ShowMore";
import { fuels, yearsOfProduction } from "@/Constants/index";
import { HomeProps } from "@/types/index";
import { Fragment } from "react";
import { fetchCars } from "../../utils/index";
import CustomFilter from "../components/CustomFilter";
import Hero from "../components/Hero";
import SeacrchBar from "../components/SeacrchBar";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div
        className="mt-12 padding-x padding-y max-width"
        id="discover"
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>

          <div className="mt-12 w-full flex-between !items-start flex-wrap gap-5">
            <SeacrchBar />
            <div className="home__filter-container">
              <CustomFilter
                title="fuel"
                options={fuels}
              />
              <CustomFilter
                title="year"
                options={yearsOfProduction}
              />
            </div>
          </div>

          {!isDataEmpty ? (
            <section className="min-w-full">
              <div className="home__cars-wrapper">
                {allCars?.map((car, i) => (
                  <Fragment key={car.city_mpg + i}>
                    <CarCard car={car} />
                  </Fragment>
                ))}
              </div>
              <ShowMore
                pageNumber={(searchParams.limit || 10) / 10}
                isNext={(searchParams.limit || 10) > allCars.length}
              />
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
              <p>{allCars?.message}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
