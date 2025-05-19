import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react"; // ✅ Lucide icon for LinkedIn

export function People() {
  const people = [
    {
      name: "Rahul Goswami",
      title: "Chief Executive Officer",
      bio: "Visionary leader with deep expertise in AI and strategic innovation.",
      image: "/assets/peoples/rahul_goswami.png",
      linkedin: "https://linkedin.com/in/rahulgoswami"
    },
    {
      name: "Neeraj Pandey",
      title: "Research Scientist",
      bio: "Data scientist specializing in stochastic modeling and deep learning.",
      image: "/assets/peoples/neeraj.jpg",
      linkedin: "https://linkedin.com/in/neerajpandey"
    },
    // {
    //   name: "Mahes Kumar Nehra",
    //   title: "Lead Statistician",
    //   bio: "Expert in statistical analysis, econometrics, and predictive modeling.",
    //   image: "/assets/peoples/sanya_mehta.png",
    //   linkedin: "https://linkedin.com/in/sanyamehta"
    // },
    // {
    //   name: "Arjun Verma",
    //   title: "Machine Learning Engineer",
    //   bio: "Engineer passionate about scalable AI systems and reinforcement learning.",
    //   image: "/assets/peoples/arjun_verma.png",
    //   linkedin: "https://linkedin.com/in/arjunverma"
    // },
    // {
    //   name: "Priya Nair",
    //   title: "Data Scientist",
    //   bio: "Big Data expert with a focus on unsupervised learning and business intelligence.",
    //   image: "/assets/peoples/priya_nair.png",
    //   linkedin: "https://linkedin.com/in/priyanair"
    // }
  ];

  return (
    <section className="relative pt-40 pb-14 md:pt-24 md:pb-24 px-6 md:px-12 overflow-hidden">
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Meet Our People
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate experts dedicated to driving innovation in AI, mathematics, and data science.
          </p>
        </div>

        {/* People Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {people.map((person, index) => (
            <Card key={index} className="group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300">
              <CardContent className="flex flex-col items-center p-8 relative">
                {/* Image */}
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-32 h-32 object-cover rounded-full shadow-md border-2 border-teal-500"
                />

                {/* Name */}
                <h3 className="mt-6 text-2xl font-semibold text-gray-900 text-center">
                  {person.name}
                </h3>

                {/* Title */}
                <p className="mt-2 text-sm text-gray-500 text-center">
                  {person.title}
                </p>

                {/* Bio */}
                <p className="mt-4 text-center text-gray-600 text-sm leading-relaxed">
                  {person.bio}
                </p>

                {/* LinkedIn */}
                <div className="mt-6">
                  <Link
                    to={person.linkedin}
                    target="_blank"
                    className="flex items-center gap-2 text-teal-600 hover:text-teal-800 transition"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm font-medium">View Profile</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}

