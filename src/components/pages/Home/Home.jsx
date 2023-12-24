// components
import Banner from "./Banner/Banner";
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";
import TargetAudience from "./TargetAudience/TargetAudience";

const Home = () => {
  return (
    <div className="space-y-sectionGapMd sm:space-y-sectionGapLg 2xl:space-y-sectionGapXl mb-sectionGapMd sm:mb-sectionGapLg 2xl:mb-sectionGapXl">
      {/* banner */}
      <section>
        <InnerContainer>
          <Banner />
        </InnerContainer>
      </section>

      {/* target audience */}
      <section id="learn-more">
        <InnerContainer>
          <TargetAudience />
        </InnerContainer>
      </section>
    </div>
  );
};

export default Home;
