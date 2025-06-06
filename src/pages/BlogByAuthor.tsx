import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/blogPosts";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


export default function BlogByCategory() {
    const { author } = useParams();
    const filteredPosts = blogPosts.filter((post) => post.author === author);
    

  return (
    <section className="relative pt-40 pb-14 md:pt-24 md:pb-24 px-6 md:px-12 overflow-hidden">
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-4 text-lg text-gray-600">
            Articles by "{author}" 
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300">
                <img src={post.image} alt={post.title} className="h-56 w-full object-cover rounded-t-xl" />
                
                <CardContent className="p-6">
                  <h3 className="mt-3 text-2xl font-semibold text-gray-900 leading-tight hover:text-teal-600 transition duration-200">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">{post.excerpt}</p>
                </CardContent>

                <CardFooter className="flex items-center justify-between px-6 pb-4">
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="outline" className="text-teal-600 hover:text-white hover:bg-teal-600">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500 mt-10 text-lg">
              No posts found under <span className="text-blue-600 font-semibold">{author}</span>.
            </p>
          )}
        </div>
      </div>
    </div>
    </section>
  );
}
