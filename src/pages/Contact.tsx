import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Phone, MapPin, Clock, Instagram, Facebook, MessageCircle, Mail, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useEffect } from "react";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    subject: z.string().min(5, {
        message: "Subject must be at least 5 characters.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
});

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast.success("Message sent successfully!", {
            description: "We'll get back to you as soon as possible.",
        });
        form.reset();
    }

    const locations = [
        {
            title: "Brown Art (DAIICT / TCS)",
            address: "Near Inflibnet Road, opp Daiict, Gh-0 towards reliance cross road, Gandhinagar",
            mapQuery: "DAIICT Gandhinagar",
        },
        {
            title: "Brown Art (Spicy Street)",
            address: "Shop no -3, The spicy street, opp landmark Building, kansar cross road, Kudasan, Gandhinagar",
            mapQuery: "Spicy Street Kudasan Gandhinagar",
        },
        {
            title: "Brown Art (Swarnim Park)",
            address: "Near small G-4 Understand, Swarnim Park lane road, Behind Ambedkar Hall, Sector -12c, Gandhinagar",
            mapQuery: "Sector 12c Gandhinagar",
        },
    ];

    return (
        <div className="min-h-screen bg-cream/30">
            <Navbar />

            <main className="pt-24 pb-20">

                {/* Hero Section */}
                <section className="container mx-auto px-6 mb-20 text-center">
                    <span className="inline-block px-4 py-2 bg-coral/10 text-coral rounded-full text-sm font-medium mb-6">
                        Get In Touch
                    </span>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-7xl text-chocolate mb-6">
                        We'd Love to Hear From You
                    </h1>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                        Have a question, feedback, or just want to say hello? Drop us a message or visit one of our outlets.
                    </p>
                </section>

                <section className="container mx-auto px-6 mb-24">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                        {/* Contact Form */}
                        <div className="w-full lg:w-3/5 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-chocolate/5">
                            <h2 className="text-3xl font-display text-chocolate mb-8">Send us a Message</h2>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-chocolate font-medium">Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Your Name" {...field} className="h-12 bg-cream/20 border-chocolate/20 focus:border-chocolate/50 hover:border-chocolate/40 transition-colors" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-chocolate font-medium">Email</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="email@example.com" {...field} className="h-12 bg-cream/20 border-chocolate/20 focus:border-chocolate/50 hover:border-chocolate/40 transition-colors" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="subject"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-chocolate font-medium">Subject</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="What is this regarding?" {...field} className="h-12 bg-cream/20 border-chocolate/20 focus:border-chocolate/50 hover:border-chocolate/40 transition-colors" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-chocolate font-medium">Message</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Type your message here..."
                                                        className="min-h-[150px] bg-cream/20 border-chocolate/20 focus:border-chocolate/50 hover:border-chocolate/40 transition-colors"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button
                                        type="submit"
                                        className="w-full md:w-auto bg-coral hover:bg-coral-light text-cream font-medium px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </Button>
                                </form>
                            </Form>
                        </div>

                        {/* Contact Info Side */}
                        <div className="w-full lg:w-2/5 space-y-8">
                            {/* Info Cards */}
                            <div className="bg-chocolate text-cream p-8 rounded-3xl shadow-lg">
                                <h3 className="font-display text-2xl mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                            <Phone className="w-5 h-5 text-coral" />
                                        </div>
                                        <div>
                                            <p className="text-cream/60 text-sm mb-1">Phone</p>
                                            <a href="tel:+919904624888" className="block text-lg hover:text-coral transition-colors">+91 99046 24888</a>
                                            <a href="tel:+919978900948" className="block text-lg hover:text-coral transition-colors">+91 99789 00948</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                            <Mail className="w-5 h-5 text-coral" />
                                        </div>
                                        <div>
                                            <p className="text-cream/60 text-sm mb-1">Email</p>
                                            <a href="mailto:hello@brownart.in" className="block text-lg hover:text-coral transition-colors">hello@brownart.in</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                            <Clock className="w-5 h-5 text-coral" />
                                        </div>
                                        <div>
                                            <p className="text-cream/60 text-sm mb-1">Business Hours</p>
                                            <p className="text-lg">Daily: 6:30 PM - 12:30 AM</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/10">
                                    <h4 className="font-display text-lg mb-4">Follow Us</h4>
                                    <div className="flex gap-4">
                                        <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-coral hover:scale-110 transition-all duration-300">
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-coral hover:scale-110 transition-all duration-300">
                                            <Facebook className="w-5 h-5" />
                                        </a>
                                        <a href="https://wa.me/919904624888" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-coral hover:scale-110 transition-all duration-300">
                                            <MessageCircle className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Locations Grid */}
                <section className="container mx-auto px-6">
                    <h2 className="text-3xl font-display text-chocolate mb-10 text-center">Visit Our Outlets</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {locations.map((loc, index) => (
                            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-soft border border-chocolate/5 hover:shadow-elevated transition-all duration-300 flex flex-col group h-full">
                                {/* Map Embed */}
                                <div className="h-56 w-full overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        scrolling="no"
                                        marginHeight={0}
                                        marginWidth={0}
                                        src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                                        className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                                        title={loc.title}
                                    ></iframe>
                                </div>

                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center mt-1">
                                            <MapPin className="w-5 h-5 text-coral" />
                                        </div>
                                        <div>
                                            <h3 className="font-display text-xl text-chocolate mb-2 group-hover:text-coral transition-colors">{loc.title}</h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {loc.address}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default Contact;
