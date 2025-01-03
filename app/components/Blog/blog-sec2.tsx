import React from "react";
import { BlogPageProps1, BlogPageProps2 } from "../props";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

function BlogSection2() {
  const blogs = [
    {
      image: "/assets/Blog-img1.png",
      user: "Admin",
      date: "14 Oct 2022",
      category: "Wood",
      title: "Going all-in with millennial design",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt molestias odit laborum et iusto nihil itaque reiciendis officiis necessitatibus, quos voluptatibus, dignissimos corrupti recusandae amet doloremque sequi porro numquam ratione!",
      button: "Read More",
    },
    {
      image: "/assets/Blog-img2.png",
      user: "Admin",
      date: "14 Oct 2022",
      category: "Handmade",
      title: "Exploring new ways of decorating",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt molestias odit laborum et iusto nihil itaque reiciendis officiis necessitatibus, quos voluptatibus, dignissimos corrupti recusandae amet doloremque sequi porro numquam ratione!",
      button: "Read More",
    },
    {
      image: "/assets/Blog-img3.png",
      user: "Admin",
      date: "14 Oct 2022",
      category: "Wood",
      title: "Handmade pieces that took time to make",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt molestias odit laborum et iusto nihil itaque reiciendis officiis necessitatibus, quos voluptatibus, dignissimos corrupti recusandae amet doloremque sequi porro numquam ratione!",
      button: "Read More",
    },
  ];

  const blogs2 = [
    {
      image: "/assets/Blog-img4.png",
      title: "Going all-in with millennial design",
      date: "3 Aug 2022",
    },
    {
      image: "/assets/Blog-img5.png",
      title: "Exploring new ways of decorating",
      date: "3 Aug 2022",
    },
    {
      image: "/assets/Blog-img6.png",
      title: "Handmade pieces that took time to make",
      date: "3 Aug 2022",
    },
    {
      image: "/assets/Blog-img7.png",
      title: "Modern home in Milan",
      date: "3 Aug 2022",
    },
    {
      image: "/assets/Blog-img8.png",
      title: "Colorful office redesign",
      date: "3 Aug 2022",
    },
  ];

  return (
    <div className="pt-10 px-3 lg:px-0">
      {/* Body */}
      <div className="flex flex-col sm:flex-row justify-center gap-14">
        {/* Blogs left section */}
        <div className="max-w-lg space-y-10 b-5">
          {blogs.map((blog, index) => (
            <BlogPageProps1
              key={index}
              image={blog.image}
              user={blog.user}
              date={blog.date}
              category={blog.category}
              title={blog.title}
              description={blog.description}
              button={blog.button}
            />
          ))}
        </div>

        {/* Categories right section */}
        <div className="space-y-14">
          <div className="space-y-6">
            {/* Input Field For Search */}
            <div className="relative">
              <Input
                type="search"
                className="rounded-[9px] border-[#9F9F9F] max-w-56 md:max-w-48 lg:max-w-56"
              />
              <Search
                size={18}
                className="absolute left-48 sm:left-40 lg:left-48 top-2 text-slate-800"
              />
            </div>

            {/* Caregories Of Blogs starts */}
            <div className="space-y-5 ml-2">
              <h2 className="font-semibold text-xl">Categories</h2>

              <div className="space-y-5">
                <span className="flex gap-32 font-normal text-sm text-[#9F9F9F]">
                  <p>Crafts</p>
                  <p>2</p>
                </span>

                <span className="flex gap-[122px] font-normal text-sm text-[#9F9F9F]">
                  <p>Design</p>
                  <p>8</p>
                </span>

                <span className="flex gap-[92px] font-normal text-sm text-[#9F9F9F]">
                  <p>Handmade</p>
                  <p>7</p>
                </span>

                <span className="flex gap-[123px] font-normal text-sm text-[#9F9F9F]">
                  <p>Interior</p>
                  <p>1</p>
                </span>

                <span className="flex gap-32 font-normal text-sm text-[#9F9F9F]">
                  <p>Wood</p>
                  <p>6</p>
                </span>
              </div>
            </div>
            {/* Caregories Of Blogs ends*/}

          </div>

          <div className="ml-2">
            <h2 className="font-semibold text-xl mb-4">Recent Posts</h2>
            <div className="max-w-56 space-y-4">
              {blogs2.map((blog2, index) => (
                <BlogPageProps2
                  key={index}
                  image={blog2.image}
                  title={blog2.title}
                  date={blog2.date}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Categories right section ends */}
      </div>

      {/* Footer */}
      <div className="flex justify-center items-center gap-3 my-10">
        <span className="bg-[#FBEBB5] rounded-[6px] w-8 h-8 flex justify-center items-center font-thin">
          1
        </span>
        <span className="bg-[#FFF9E5] rounded-[6px] w-8 h-8 flex justify-center items-center font-thin">
          2
        </span>
        <span className="bg-[#FFF9E5] rounded-[6px] w-8 h-8 flex justify-center items-center font-thin">
          3
        </span>
        <span className="bg-[#FFF9E5] rounded-[6px] w-16 h-8 flex justify-center items-center font-thin">
          Next
        </span>
      </div>
      
    </div>
  );
}

export default BlogSection2;
