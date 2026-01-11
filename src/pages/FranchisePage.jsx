import Header from "@/components/Header";
import Franchise from "@/components/Franchise";
import Footer from "@/components/Footer";

const FranchisePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <Header />

      {/* Page Content */}
      <main className="pt-[72px]">
        {/* Franchise Section */}
        <section className="py-16">
          <Franchise />
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default FranchisePage;
