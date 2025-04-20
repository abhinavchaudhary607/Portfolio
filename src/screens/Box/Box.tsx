import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

export const Box = (): JSX.Element => {

  type Project = {
    id: number;
    title: string;
    category: string;
    logo: string;
  };
  
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("public/portfolioprojects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching project data:", err));
  }, []);
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Navigation links
  const navLinks = ["Home", "About", "Certificates", "Portfolio", "Contact"];

  // Education data
  const education = [
    {
      degree: "Bachelor's of Computer Science Engineering",
      school: "Chandigarh University",
      year: "2022-2026",
      description: "Learned core computer science fundamentals, programming, data structures, algorithms, and explored technologies like AI, ML, and cloud computing"
    },
    {
      degree: "Intermediate",
      school: "Holy Mission High School",
      year: "2019-2021",
      description: "Focused on general Sciences like Physics, Chemistry, and Mathematics"
    },{
      degree: "Matriculation",
      school: "St. Paul Sr. Sec. School",
      year: "2018-2019",
      description: "Focused on general Sciences like Physics, Chemistry, Biology, and Mathematics"
    }
  ];

  // Experience data
  const experience = [
    {
      role: "Technical assistant Intern",
      company: "Multico Constructive Pvt. Ltd.",
      period: "july 2024",
      achievements: [
        "Developed and maintained 20+ technical documents, ensuring accuracy and compliance with industry standards",
        "Analyzed data across 15+ projects, reducing troubleshooting time by 30% and improving quality control",
        "Collaborated on 5 major projects, improving project efficiency by 20% through effective task coordination",
        "Optimized project tracking and resource allocation, improving workflow efficiency by 25%"
      ]
    }
  ];

  // Services data
  const certificates = [
    {
      title: "Google Advanced Data Analytics",
      description: "Mastered statistical analysis, Python, regression models, and machine learning",
      logo:"/google.svg",
      link:"https://www.coursera.org/account/accomplishments/specialization/QQAL3Q1W5UGA?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
    },
    {
      title: "Flipkart GRiD 6.0 ",
      description: "Competed in a national hackathon focused on emerging technology and innovation",
      logo:"/flipkart.svg",
      link:"https://unstop.com/certificate-preview/8a19d7c3-ad6e-4921-bfe3-9e9735c65256"
    },
    {
      title: "React Native",
      description: "Learned to craft user-centered experiences with focus on usability, using React Native",
      logo:"/meta.svg",
      link:"https://www.coursera.org/account/accomplishments/verify/E4D9DQ58LPXE"
    }
  ];

  // Skills data
  const skills = [
    { name: "C/C++", percentage: 88 },
    { name: "Java", percentage: 92 },
    { name: "HTML", percentage: 95 },
    { name: "CSS/SCSS", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
  ];

  // Current year 
  const year: number = new Date().getFullYear(); 

  // Social Links
  const socials=[{
    index:1,
    logo:"/linkedin.svg",
    link: "https://www.linkedin.com/in/abhinav-chaudhary-94b55625b/"
  },{
    index:2,
    logo:"/github.svg",
    link: "https://github.com/abhinavchaudhary607"
  },{
    index:3,
    logo:"/insta.svg",
    link: "https://www.instagram.com/abhinav.chaudhary._/"
  }]

  // Resume Download
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; 
    link.download = "Abhinav-Chaudhary-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center py-4 px-8 border-b border-zinc-800 sticky top-0 bg-black/90 backdrop-blur-sm z-50"
      >
        <div className="text-orange-500 font-bold text-2xl">ABHI</div>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm hover:text-orange-500 transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
      </motion.header>

      <main className="flex-1" id="home">
        {/* Hero Section */}
        <section className="py-16 px-8 flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 space-y-4"
          >
            <h1 className="text-4xl font-bold">
              Hi, I'm <span className="text-orange-500">Abhinav Chaudhary</span>
            </h1>
            <h2 className="text-3xl font-bold">Software Engineer</h2>
            <div className="flex space-x-2">
              {[1, 2, 3, 4].map((star) => (
                <motion.svg
                  key={star}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: star * 0.1 }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#f97316"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </motion.svg>
              ))}
            </div>
            {/*Social Links*/}
            <div className="flex space-x-4">
              {socials.map((social) => (
                <a
                  key={social.index}
                  href={social.link}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:scale-125"
                  target="_none"
                >
                  <motion.img
                    key={social.index}
                    src={social.logo}  
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: social.index * 0.1 }}
                    className="w-full h-full object-contain"
                  />
                </a>
              ))}
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-4" onClick={downloadResume}>
              Download CV
            </Button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 mt-8 md:mt-0"
          >
            <img
              src="/pic1.png"
              alt="Professional portrait"
              className="w-100 h-100 mx-auto "
            />
          </motion.div>
        </section>

        {/* About Me Section */}
        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="py-16 px-8"
          id="about"
        >
          <motion.h2 {...fadeInUp} className="text-3xl font-bold text-center mb-12">About Me</motion.h2>
          <p className="text-center text-zinc-400 max-w-2xl mx-auto mb-12">
            Get to know more about me and my experience
          </p>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/3"
            >
              <img
                src="/pic2.jpg"
                alt="About me"
                className="w-full rounded-lg"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-2/3"
            >
              <p className="text-zinc-300 mb-4">
              Hi, I’m Abhinav Chaudhary – a passionate and curious software engineer who loves building things that live on the internet. Whether it’s a dynamic web app, a cloud-connected IoT project, or a clean and functional user interface, I enjoy turning ideas into real-world solutions. </p>
              <p className="text-zinc-300 mb-4">
              With experience in full-stack development, cloud computing, and automation, I bring both a strong technical foundation and a creative mindset to my work. I'm especially interested in solving real-world problems using modern technologies like JavaScript, Python, Django, React, and Node.js, and I’ve worked with frameworks and tools that power everything from dashboards to device monitoring systems. </p>
              <p className="text-zinc-300 mb-6">
              Outside of coding, you’ll find me exploring new tech, tinkering with Raspberry Pi or ESP8266 boards, or contributing to open-source projects. I'm constantly learning and always up for a challenge. </p>
              <p className="text-zinc-300 mb-6">Let’s build something awesome together.</p>
            </motion.div>
          </div>

          {/* Skills */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-8" id="skills">
           {skills.map((skill) => {
            const fillColor = '#f97316';
            return (
              <div key={skill.name} className="flex flex-col items-center">
                <div className="relative w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <div
                    className="absolute top-0 left-0 w-full h-full rounded-full"
                    style={{
                      background: `conic-gradient(${fillColor} ${skill.percentage * 3.6}deg, #e5e7eb ${skill.percentage * 3.6}deg)`,
                    }}
                  ></div>
                  <div className="absolute w-20 h-20 bg-black rounded-full flex items-center justify-center shadow-inner">
                    <span className="text-lg font-bold text-white-800">
                      {skill.percentage}%
                    </span>
                  </div>
                </div>
                <span className="mt-2 text-sm text-center font-medium text-white-700">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="py-16 px-8 bg-zinc-900"
        >
          <motion.h2 {...fadeInUp} className="text-3xl font-bold text-center mb-12">Education</motion.h2>
          <div className="max-w-4xl mx-auto" id="education">
            {education.map((edu, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                key={index}
                className="mb-8 bg-zinc-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold text-orange-500">{edu.degree}</h3>
                <p className="text-lg">{edu.school}</p>
                <p className="text-zinc-400">{edu.year}</p>
                <p className="mt-2">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="py-16 px-8"
        >
          <motion.h2 {...fadeInUp} className="text-3xl font-bold text-center mb-12">Experience</motion.h2>
          <div className="max-w-4xl mx-auto" id="experience">
            {experience.map((exp, index) => (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                key={index}
                className="mb-8 bg-zinc-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold text-orange-500">{exp.role}</h3>
                <p className="text-lg">{exp.company}</p>
                <p className="text-zinc-400">{exp.period}</p>
                <ul className="mt-2 list-disc list-inside">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-zinc-300">{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certificates Section */}
        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="py-16 px-8 bg-zinc-900"
          id="certificates"
        >
          <motion.h2 {...fadeInUp} className="text-3xl font-bold text-center mb-12">Certificates</motion.h2>
          <p className="text-center text-zinc-400 max-w-2xl mx-auto mb-12">
          Courses That Shaped My Journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
            {certificates.map((service, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                key={index}
              >
                <Card className="bg-zinc-800 border-zinc-700 hover:border-orange-500 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <img className="text-blue" src={service.logo} alt="Logo" width="40" height="40"/>
                    </div>
                    <a href={service.link} target="_none"><h3 className="text-white text-xl font-semibold mb-2">{service.title}</h3></a>
                    <p className="text-zinc-400">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Portfolio Section */}
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
                        <Button
                          variant="outline"
                          className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                        >
                          View Project
                        </Button>
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
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="py-16 px-8"
          id="contact"
        >
          <motion.h2 {...fadeInUp} className="text-3xl font-bold text-center mb-12">Contact me</motion.h2>

          <div className="max-w-4xl mx-auto">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Input
                  placeholder="Name"
                  className="bg-zinc-800 border-zinc-700 focus:border-orange-500"
                />
                <Input
                  placeholder="Email"
                  type="email"
                  className="bg-zinc-800 border-zinc-700 focus:border-orange-500"
                />
                <Input
                  placeholder="Subject"
                  className="bg-zinc-800 border-zinc-700 focus:border-orange-500"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your message"
                  className="bg-zinc-800 border-zinc-700 focus:border-orange-500 h-full min-h-[180px]"
                />
              </div>
              <div className="md:col-span-2 flex justify-end">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Send
                </Button>
              </div>
            </form>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-zinc-800">
        <div className="flex flex-col justify-between items-center">
          <p className="text-sm text-zinc-400 mb-4 mb-5">
            © {year} Abhinav Chaudhary Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};