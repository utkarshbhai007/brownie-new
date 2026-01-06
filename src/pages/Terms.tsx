import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-32 pb-12 bg-background">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="font-display text-4xl md:text-5xl text-chocolate mb-8">Terms of Service</h1>
                    <div className="prose prose-lg text-muted-foreground">
                        <p className="mb-4">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                        <p className="mb-6">
                            Welcome to Brown Art. By accessing or using our website, you agree to be bound by these Terms of Service.
                            Please read them carefully before placing an order.
                        </p>

                        <h2 className="font-display text-2xl text-chocolate mt-8 mb-4">1. Acceptance of Terms</h2>
                        <p className="mb-4">
                            By accessing this website, we assume you accept these terms and conditions. Do not continue to use Brown Art if you do not agree
                            to take all of the terms and conditions stated on this page.
                        </p>

                        <h2 className="font-display text-2xl text-chocolate mt-8 mb-4">2. Products and Pricing</h2>
                        <p className="mb-4">
                            All products listed on the website are subject to availability. Prices for our products are subject to change without notice.
                            We reserve the right to modify or discontinue any product at any time.
                        </p>

                        <h2 className="font-display text-2xl text-chocolate mt-8 mb-4">3. Orders and Delivery</h2>
                        <p className="mb-4">
                            We reserve the right to refuse any order you place with us. Delivery times are estimates and may vary based on location and
                            unforeseen circumstances.
                        </p>

                        <h2 className="font-display text-2xl text-chocolate mt-8 mb-4">4. Intellectual Property</h2>
                        <p className="mb-4">
                            The content, layout, design, data, databases and graphics on this website are protected by intellectual property laws.
                            You may not copy, reproduce, republish, upload, post, transmit, or distribute any material from this website without our prior written permission.
                        </p>

                        <h2 className="font-display text-2xl text-chocolate mt-8 mb-4">5. Governing Law</h2>
                        <p className="mb-4">
                            These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the
                            exclusive jurisdiction of the courts in that location.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Terms;
