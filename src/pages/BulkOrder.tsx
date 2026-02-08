import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
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
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useEffect } from "react";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, {
        message: "Phone number must be at least 10 digits.",
    }),
    company: z.string().optional(),
    date: z.date({
        required_error: "A date for the event is required.",
    }),
    quantity: z.string({
        required_error: "Please select an estimated quantity.",
    }),
    message: z.string().optional(),
});

const BulkOrder = () => {
    // scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast.success("Bulk order inquiry received!", {
            description: "We'll get back to you shortly to discuss your event.",
        });
        form.reset();
    }

    return (
        <div className="min-h-screen bg-cream">
            <Navbar />

            <main className="pt-24 pb-16 px-6">
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-chocolate">
                            Bulk Orders & Catering
                        </h1>
                        <p className="text-lg text-chocolate/80 max-w-2xl mx-auto">
                            Planning a corporate event, wedding, or large gathering? Let us sweeten the occasion with our handcrafted treats.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-chocolate/10 shadow-xl">
                        <Form {...form}>
                            <form action="https://formsubmit.co/contact@brownart.in" method="POST" className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-chocolate font-medium">Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Your Name" {...field} className="bg-white/80 border-chocolate/20 focus:border-chocolate/50 hover:border-chocolate/40 transition-colors" />
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
                                                    <Input placeholder="email@example.com" {...field} className="bg-white/80 border-chocolate/20 focus:border-chocolate/50 hover:border-chocolate/40 transition-colors" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-chocolate font-medium">Phone Number</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="+91 98765 43210" {...field} className="bg-white/80 border-chocolate/20 focus:border-chocolate/50 hover:border-chocolate/40 transition-colors" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="company"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-chocolate font-medium">Company (Optional)</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Company Name" {...field} className="bg-white/80 border-chocolate/20 focus:border-chocolate/50 hover:border-chocolate/40 transition-colors" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="date"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                                <FormLabel className="text-chocolate font-medium">Event Date</FormLabel>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <FormControl>
                                                            <Button
                                                                variant={"outline"}
                                                                className={cn(
                                                                    "w-full pl-3 text-left font-normal bg-white/80 border-chocolate/20 focus:border-chocolate/50 hover:border-chocolate/40 hover:bg-white/90 transition-all",
                                                                    !field.value && "text-muted-foreground"
                                                                )}
                                                            >
                                                                {field.value ? (
                                                                    format(field.value, "PPP")
                                                                ) : (
                                                                    <span>Pick a date</span>
                                                                )}
                                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                            </Button>
                                                        </FormControl>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                            mode="single"
                                                            selected={field.value}
                                                            onSelect={field.onChange}
                                                            disabled={(date) =>
                                                                date < new Date()
                                                            }
                                                            initialFocus
                                                            className="bg-white"
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="quantity"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-chocolate font-medium">Estimated Quantity</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-white/80 border-chocolate/20 focus:border-chocolate/50 hover:border-chocolate/40 transition-colors">
                                                            <SelectValue placeholder="Select quantity" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent className="bg-white">
                                                        <SelectItem value="10-50">10 - 50 items</SelectItem>
                                                        <SelectItem value="50-100">50 - 100 items</SelectItem>
                                                        <SelectItem value="100-500">100 - 500 items</SelectItem>
                                                        <SelectItem value="500+">500+ items</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-chocolate font-medium">Special Requests / Message</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Tell us more about your event..."
                                                    className="min-h-[120px] bg-white/80 border-chocolate/20 focus:border-chocolate/50 hover:border-chocolate/40 transition-colors"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="flex justify-center pt-4">
                                    <Button
                                        type="submit"
                                        className="bg-coral hover:bg-coral-light text-cream font-medium px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    >
                                        Submit Inquiry
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BulkOrder;
