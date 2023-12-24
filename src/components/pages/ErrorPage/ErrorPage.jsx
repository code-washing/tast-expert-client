// shared components
import LinkBtn from "../../shared/LinkBtn/LinkBtn";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center py-sectionGapLg">
      <div className="max-w-[90rem] 3xl:max-w-full px-6 md:px-8 lg:px-12 2xl:px-0 mx-auto 3xl:px-[7rem]">
        <div>
          {/* error message */}

          <p className="text-center text-3xl font-semibold">
            404 | No page found
          </p>

          {/* link to go back to home */}
          <LinkBtn
            text="Go to Home"
            url="/"
            modifyClasses="w-max mx-auto mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
