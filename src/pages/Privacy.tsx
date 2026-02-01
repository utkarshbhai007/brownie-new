import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-32 pb-12 bg-background">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="font-display text-4xl md:text-5xl text-chocolate mb-8">Privacy Policy</h1>
                    <div className="prose prose-lg text-muted-foreground">
                        <p className="mb-4">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                        <p className="mb-6">
                            At Brown Art, we value your privacy and are committed to protecting your personal information.
                            This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or order from us.
                        </p>

                        <h2 className="font-display text-2xl text-chocolate mt-8 mb-4">1. Information We Collect</h2>
                        <p className="mb-4">
                            We may collect personal information such as your name, phone number, email address, and delivery address when you place an order or contact us.
                            We also collect non-personal information about your device and browsing usage to improve our website.
                        </p>

                        <h2 className="font-display text-2xl text-chocolate mt-8 mb-4">2. How We Use Your Information</h2>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>To process and deliver your orders.</li>
                            <li>To communicate with you regarding your orders or inquiries.</li>
                            <li>To improve our products, services, and website functionality.</li>
                            <li>To send promotional offers or updates, only if you have opted in.</li>
                        </ul>

                        <h2 className="font-display text-2xl text-chocolate mt-8 mb-4">3. Data Security</h2>
                        <p className="mb-4">
                            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
                            However, no method of transmission over the internet is 100% secure.
                        </p>

                        <h2 className="font-display text-2xl text-chocolate mt-8 mb-4">4. Cookies</h2>
                        <p className="mb-4">
                            Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings,
                            but this may affect some website functionalities.
                        </p>

                        <h2 className="font-display text-2xl text-chocolate mt-8 mb-4">5. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about this Privacy Policy, please contact us at: <br />
                            <strong>Email:</strong> contact@brownart.in <br />
                            <strong>Phone:</strong> +91 99046 24888 / +91 99789 00948
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Privacy;
