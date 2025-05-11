import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const ProjectSection=()=>{
    type Project = {
      id: number;
      title: string;
      category: string;
      logo: string;
      url: string | undefined;
      };
      
      const [projects, setProjects] = useState<Project[]>([]);
    
      useEffect(() => {
        fetch("/portfolioprojects.json")
          .then((res) => res.json())
          .then((data) => setProjects(data))
          .catch((err) => console.error("Error fetching project data:", err));
      }, []);
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
      };
    return(
    <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="py-16 px-8 bg-zinc-900"
          id="portfolio"
        >
          <motion.h2 {...fadeInUp} className="text-3xl font-bold text-center mb-12">Portfolio</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                key={project.id}
              >
                <Card className="bg-zinc-800 border-zinc-700 overflow-hidden hover:border-orange-500 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-zinc-700 relative">
                      <img
                        src={project.logo}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                        <a href={project.url} target="none">
                          <Button
                          variant="outline"
                          className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                        >
                          View Project
                        </Button></a>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold">{project.title}</h3>
                      <p className="text-sm text-zinc-400">{project.category}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>)
}