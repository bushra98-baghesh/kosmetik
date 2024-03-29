//Home Page is here
import FirstContainer from "@/components/Home/FirstContainer"
import SecondContainer from "@/components/Home/SecondContainer"
import ThirdContainer from "@/components/Home/ThirdContainer"
import FourthContainer from "@/components/Home/FourthContainer"
import { BASEURL } from "@/components/data/BaseUrl"

const getCategories = async () => {

  const res = await fetch(`${BASEURL}/category`);


  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getDiscountCourses() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Home() {
  const DiscountCourses = await getDiscountCourses();
  const Categories = await getCategories()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <FirstContainer />
      <SecondContainer discountCourses={DiscountCourses} />
      <ThirdContainer categories={Categories.categories} />
      <FourthContainer />
    </main>
  );
}
