import React from "react";

import { SizeVariantsView } from "@/components/Shared/SizeVariantsView";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import { Card } from "@/components/Home/Card";
import { Galarysection } from "@/components/Home/galarysection";
import { Anyquestion } from "@/components/Home/Anyquestion";
import { ReviewSection } from "@/components/Home/ReviewCard ";
import { ContactUs } from "@/components/Home/ContactUs";
import { Headerpart } from "@/components/Headerpart";

export const Home = () => {
  return (
    <section>
      <Headerpart />

      <WhyChooseUs />

      <Card></Card>

      <Galarysection />

      <Anyquestion />

      <ReviewSection />

      <ContactUs />
    </section>
  );
};
