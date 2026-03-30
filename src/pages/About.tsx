import Layout from "@/components/Layout";

const AboutPage = () => (
  <Layout>
    <section className="bg-surface py-20">
      <div className="container max-w-3xl text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold">Our Story</h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Founded in 2020, LUXE was born from a simple belief: everyday essentials should be beautifully crafted, 
          ethically made, and built to last. We partner with artisans and manufacturers who share our commitment 
          to quality and sustainability.
        </p>
      </div>
    </section>

    <section className="container py-16">
      <div className="grid md:grid-cols-3 gap-10">
        {[
          { title: "Quality First", desc: "Every product is crafted from premium materials, rigorously tested, and built to stand the test of time." },
          { title: "Ethically Made", desc: "We work exclusively with fair-trade certified suppliers and factories that uphold the highest labor standards." },
          { title: "Sustainable Impact", desc: "From recycled packaging to carbon-neutral shipping, we're committed to reducing our environmental footprint." },
        ].map((v) => (
          <div key={v.title} className="text-center space-y-3">
            <h3 className="font-display text-xl font-bold">{v.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-primary text-primary-foreground py-16">
      <div className="container grid md:grid-cols-4 gap-8 text-center">
        {[
          { num: "10K+", label: "Happy Customers" },
          { num: "500+", label: "Products" },
          { num: "50+", label: "Countries" },
          { num: "4.9", label: "Avg Rating" },
        ].map((s) => (
          <div key={s.label}>
            <p className="font-display text-4xl font-bold text-accent">{s.num}</p>
            <p className="mt-1 text-sm text-primary-foreground/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container py-16 max-w-3xl">
      <h2 className="font-display text-3xl font-bold text-center mb-8">Our Mission</h2>
      <p className="text-muted-foreground leading-relaxed text-center">
        We believe that thoughtful design can transform the ordinary into the extraordinary. 
        Our mission is to create products that bring joy to your daily routine while treading 
        lightly on the planet. Each item in our collection tells a story of craftsmanship, 
        innovation, and conscious creation.
      </p>
    </section>
  </Layout>
);

export default AboutPage;
