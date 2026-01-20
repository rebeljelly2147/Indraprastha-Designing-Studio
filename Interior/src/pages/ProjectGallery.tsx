import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Ruler } from "lucide-react";
import { commercialProjects, residentialProjects } from "@/data/projects";

const ProjectGallery = () => {
    const { slug } = useParams<{ slug: string }>();
    const location = useLocation();
    const navigate = useNavigate();

    // Determine the type based on the current URL path
    const type = location.pathname.includes("/commercial/") ? "commercial" : "residences";

    // Find the project based on type and slug
    const projects = type === "commercial" ? commercialProjects : residentialProjects;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <Layout>
                <div className="min-h-[60vh] flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="heading-section text-foreground mb-4">Project Not Found</h1>
                        <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
                        <Link to={`/${type}`} className="btn-luxury">
                            Back to Projects
                        </Link>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
                <motion.img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/50 to-transparent" />
                <div className="absolute inset-0 flex items-end">
                    <div className="container-luxury pb-12">
                        <motion.button
                            onClick={() => navigate(`/${type}`)}
                            className="flex items-center gap-2 text-cream/80 hover:text-cream mb-6 transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Back to {type === "commercial" ? "Commercial" : "Residential"} Projects</span>
                        </motion.button>

                        <motion.h1
                            className="heading-display text-cream mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {project.title}
                        </motion.h1>

                        <motion.div
                            className="flex flex-wrap items-center gap-4 text-cream/80"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{project.location}</span>
                            </div>
                            {"area" in project && (
                                <>
                                    <span className="w-1 h-1 rounded-full bg-cream/60" />
                                    <div className="flex items-center gap-2">
                                        <Ruler className="w-4 h-4" />
                                        <span>{project.area}</span>
                                    </div>
                                </>
                            )}
                            {"category" in project && (
                                <>
                                    <span className="w-1 h-1 rounded-full bg-cream/60" />
                                    <span className="text-primary">{project.category}</span>
                                </>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Project Description */}
            <section className="section-luxury bg-secondary/30">
                <div className="container-luxury max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h2 className="heading-section text-foreground mb-6">About This Project</h2>
                        <div className="divider-luxury mb-8" />
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {project.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="section-luxury">
                <div className="container-luxury">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="heading-section text-foreground mb-4">
                            Project <span className="italic text-primary">Gallery</span>
                        </h2>
                        <div className="divider-luxury" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {project.gallery.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group"
                            >
                                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                                    <motion.img
                                        src={image}
                                        alt={`${project.title} - Image ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-luxury bg-espresso">
                <div className="container-luxury text-center">
                    <motion.h2
                        className="heading-section text-cream mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Inspired by This Project?
                    </motion.h2>
                    <motion.p
                        className="text-cream/80 mb-8 max-w-xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Let's create something extraordinary together. Get in touch to start your journey.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to="/contact" className="btn-luxury">
                                Start Your Project
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default ProjectGallery;
