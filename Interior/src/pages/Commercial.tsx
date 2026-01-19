import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ElectronicCity from "@/assets/ElectronicCity.jpeg";
import NothingBeforeCoffee from "@/assets/Nothing_Before_Coffee.jpeg";
import Saheb from "@/assets/Saheb.jpeg";
import CoffeeTime from "@/assets/Coffee_Time.jpeg";
import FarmingBerries from "@/assets/Farming_Berries.jpeg"
import PNCOffice from "@/assets/pnc_office.jpeg"
import ResidentialSuryansh from "@/assets/residential-suryansh.mp4";
import ResidentialKaran from "@/assets/residential-karan.mp4";
import ResidentialJaipur from "@/assets/residential-3.jpeg";

const categories = ["All", "Cafes", "Commercial", "Residential"];

const projects = [
  {
    id: 1,
    title: "Noida Electronics City Building A, Iconic Corenthum",
    category: "Commercial",
    location: "Noida",
    description: "Co-Working Space.",
    media: ElectronicCity,
    isVideo: false,
    slug: "Iconic Corenthum",
  },
  {
    id: 2,
    title: "Nothing Before Coffee",
    category: "Cafes",
    location: "New Delhi",
    description: "Contemporary Cafe's design that reflects the brand's global identity.",
    media: NothingBeforeCoffee,
    isVideo: false,
    slug: "nothing-before-coffee",
  },
  {
    id: 3,
    title: "The Sahed Realm",
    category: "Cafes",
    location: "Agra",
    description: "RoofTop To Enhance the Experience.",
    media: Saheb,
    isVideo: false,
    slug: "the-saheb-realm",
  },
  {
    id: 4,
    title: "Coffee Time",
    category: "Cafes",
    location: "Gurgaon",
    description: "Low Budget, Top Notch Experience.",
    media: CoffeeTime,
    isVideo: false,
    slug: "coffee-time",
  },
  {
    id: 5,
    title: "Farming Berries",
    category: "Cafes",
    location: "Gurgaon",
    description: "Low Budget, Top Notch Experience.",
    media: FarmingBerries,
    isVideo: false,
    slug: "farming-berries",
  },
  {
    id: 6,
    title: "PNC Office",
    category: "Commercial",
    location: "Agra",
    description: "Excelling the Briallance.",
    media: PNCOffice,
    isVideo: false,
    slug: "pnc-office",
  },
  {
    id: 7,
    title: "Suryansh's Residence",
    category: "Residential",
    location: "Agra",
    description: "Listen from the Client +91-8445641343.",
    media: ResidentialSuryansh,
    isVideo: true,
    slug: "suryansh-residence",
  },
  {
    id: 8,
    title: "Karan's Residence",
    category: "Residential",
    location: "Agra",
    description: "Modern residential interior design.",
    media: ResidentialKaran,
    isVideo: true,
    slug: "karan-residence",
  },
  {
    id: 9,
    title: "Jaipur Residence",
    category: "Residential",
    location: "Jaipur Sector-18",
    description: "Residential project located in Jaipur Sector-18.",
    media: ResidentialJaipur,
    isVideo: false,
    slug: "jaipur-sector-18",
  },
];

const Commercial = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <motion.img
          src="/images/hero/6.jpeg"
          alt="Commercial Interior"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-luxury pb-12">
            <motion.span
              className="text-label text-cream/70 mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Portfolio
            </motion.span>
            <motion.h1
              className="heading-display text-cream"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              All <span className="italic text-primary">Projects</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border">
        <div className="container-luxury">
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`tab-luxury ${activeFilter === category ? "active" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-luxury">
        <div className="container-luxury">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                >
                  <div
                    className="card-luxury group block"
                  >
                    <div className="aspect-[4/5] rounded-sm overflow-hidden mb-5">
                      {project.isVideo ? (
                        <video
                          src={project.media}
                          className="w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      ) : (
                        <motion.img
                          src={project.media}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-primary">{project.category}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{project.location}</span>
                      </div>
                      <h3 className="heading-card text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-luxury bg-secondary/50">
        <div className="container-luxury text-center">
          <motion.h2
            className="heading-section text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Elevate Your Business Space?
          </motion.h2>
          <motion.p
            className="text-muted-foreground mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Create an environment that enhances your brand and delights your customers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="btn-luxury">
                Let's Discuss Your Project
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Commercial;
