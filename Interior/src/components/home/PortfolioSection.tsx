import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = ["Featured", "Residences", "Spas & Salons", "Restaurants & Cafes"];

const projects = [
  {
    id: 1,
    title: "Treasures of Time",
    category: "Residential",
    image: "/images/residences/1.jpeg",
    href: "/residences/treasures-of-time",
    tags: ["Featured", "Residences"],
  },
  {
    id: 2,
    title: "Zen Home",
    category: "Residential",
    image: "/images/residences/2.jpeg",
    href: "/residences/zen-home",
    tags: ["Featured", "Residences"],
  },
  {
    id: 3,
    title: "Tattva Spa",
    category: "Commercial",
    image: "/images/commercial/1.jpeg",
    href: "/commercial/tattva-spa",
    tags: ["Featured", "Spas & Salons"],
  },
  {
    id: 4,
    title: "Toni & Guy",
    category: "Commercial",
    image: "/images/commercial/2.jpeg",
    href: "/commercial/toni-guy",
    tags: ["Featured", "Spas & Salons"],
  },
  {
    id: 5,
    title: "Saffron Restaurant",
    category: "Commercial",
    image: "/images/commercial/3.jpeg",
    href: "/commercial/saffron-restaurant",
    tags: ["Featured", "Restaurants & Cafes"],
  },
  {
    id: 6,
    title: "White Garden",
    category: "Commercial",
    image: "/images/commercial/4.jpeg",
    href: "/commercial/white-garden",
    tags: ["Restaurants & Cafes"],
  },
];

export const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("Featured");

  const filteredProjects = projects.filter((project) =>
    project.tags.includes(activeTab)
  );

  return (
    <section className="section-luxury bg-secondary/50">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-label mb-4 block">Our Portfolio</span>
          <h2 className="heading-section text-foreground mb-4">
            Spaces We've <span className="italic text-primary">Transformed</span>
          </h2>
          <div className="divider-luxury" />
        </motion.div>


        {/* View All Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/residences" className="btn-luxury-outline">
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
