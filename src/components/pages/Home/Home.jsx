// components
import Banner from "./Banner/Banner";
import InnerContainer from "./../../containers/InnerContainer/InnerContainer";

const Home = () => {
  return (
    <div className="space-y-sectionGapMd sm:space-y-sectionGapLg 2xl:space-y-sectionGapXl mb-sectionGapMd sm:mb-sectionGapLg 2xl:mb-sectionGapXl">
      {/* banner */}
      <section>
        <InnerContainer>
          <Banner />
        </InnerContainer>
      </section>
    </div>
  );
};

export default Home;
