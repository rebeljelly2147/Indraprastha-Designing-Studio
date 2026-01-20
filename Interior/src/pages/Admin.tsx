import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import {
    LayoutDashboard,
    FolderKanban,
    FileText,
    Mail,
    Image,
    Users,
    Settings
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const adminMenuItems = [
    {
        title: "Dashboard",
        description: "Overview and analytics",
        icon: LayoutDashboard,
        href: "/admin/dashboard",
        color: "text-blue-500"
    },
    {
        title: "Manage Projects",
        description: "Add, edit, or delete projects",
        icon: FolderKanban,
        href: "/admin/projects",
        color: "text-purple-500"
    },
    {
        title: "Blog Posts",
        description: "Create and manage blog content",
        icon: FileText,
        href: "/admin/blog",
        color: "text-green-500"
    },
    {
        title: "Inquiries",
        description: "View contact form submissions",
        icon: Mail,
        href: "/admin/inquiries",
        color: "text-orange-500"
    },
    {
        title: "Image Gallery",
        description: "Manage project images",
        icon: Image,
        href: "/admin/gallery",
        color: "text-pink-500"
    },
    {
        title: "Team Members",
        description: "Manage team and users",
        icon: Users,
        href: "/admin/team",
        color: "text-indigo-500"
    },
];

const Admin = () => {
    const { currentUser } = useAuth();

    return (
        <Layout>
            <section className="section-luxury bg-secondary/30">
                <div className="container-luxury">
                    <motion.div
                        className="text-center max-w-2xl mx-auto mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="heading-display text-foreground mb-4">
                            Admin <span className="italic text-primary">Portal</span>
                        </h1>
                        <p className="text-muted-foreground">
                            Welcome back, {currentUser?.email}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {adminMenuItems.map((item, index) => (
                            <motion.div
                                key={item.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link to={item.href}>
                                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                                        <CardHeader>
                                            <div className="flex items-center gap-3">
                                                <div className={`p-2 rounded-lg bg-secondary ${item.color}`}>
                                                    <item.icon className="w-6 h-6" />
                                                </div>
                                                <CardTitle>{item.title}</CardTitle>
                                            </div>
                                            <CardDescription>{item.description}</CardDescription>
                                        </CardHeader>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Card className="bg-primary/5 border-primary/20">
                            <CardContent className="pt-6">
                                <p className="text-sm text-muted-foreground">
                                    <strong>Note:</strong> These admin pages are currently placeholders.
                                    You can build out each section based on your specific needs.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default Admin;
