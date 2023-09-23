import React from "react";
import Container from "../partials/container";
import AnimateY from "../partials/animate-y";

export default function criteria() {
  return (
    <div className="relative overflow-hidden">
      <Container>
        <div className="relative">
          <div className="flex flex-col items-center gap-x-12 bg-[#140D27] py-16 text-white lg:flex-row">
            <img
              className="sm:h-[387px] sm:w-[510px] 2xl:h-auto 2xl:w-auto"
              src="./images/criteria-img.png"
              alt=""
            />

            <AnimateY staggerAmount={0.35}>
              <div className="mt-6 basis-3/5 space-y-4 text-center lg:text-left">
                <h2 className="relative z-20 mx-auto w-3/5 font-heading text-xl font-bold leading-10 md:text-[2rem] lg:mx-0 lg:w-1/2">
                  Judging Criteria{" "}
                  <span className="text-primary">Key Attributes</span>
                </h2>
                <div className="relative z-20 space-y-14 font-body text-sm leading-7 sm:text-base">
                  <div className="space-y-5">
                    <p>
                      <strong className="text-primary">
                        Innovation and Creativity:
                      </strong>{" "}
                      Evaluate the uniqueness and creativity of the solution.
                      Consider whether it addresses a real-world problem in a
                      novel way or introduces innovative features.
                    </p>
                    <p>
                      <strong className="text-primary">Functionality:</strong>{" "}
                      Assess how well the solution works. Does it perform its
                      intended functions effectively and without major issues?
                      Judges would consider the completeness and robustness of
                      the solution.
                    </p>
                    <p>
                      <strong className="text-primary">
                        Impact and Relevance:
                      </strong>{" "}
                      Determine the potential impact of the solution in the real
                      world. Does it address a significant problem, and is it
                      relevant to the target audience? Judges would assess the
                      potential social, economic, or environmental benefits.
                    </p>
                    <p>
                      <strong className="text-primary">
                        Technical Complexity:
                      </strong>{" "}
                      Evaluate the technical sophistication of the solution.
                      Judges would consider the complexity of the code, the use
                      of advanced technologies or algorithms, and the
                      scalability of the solution.
                    </p>
                    <p>
                      <strong className="text-primary">
                        Adherence to Hackathon Rules:
                      </strong>{" "}
                      Judges will Ensure that the team adhered to the rules and
                      guidelines of the hackathon, including deadlines, use of
                      specific technologies or APIs, and any other
                      competition-specific requirements.
                    </p>
                  </div>

                  <button className="z-30 rounded-md border border-[#903AFF] bg-gradient px-[52px] py-4 transition-all duration-150 hover:border-[#903AFF] hover:bg-none">
                    Read More
                  </button>
                </div>
              </div>
            </AnimateY>
          </div>
          <img
            className="absolute left-32 top-10 h-[13px] w-[11px] animate-pulse lg:top-40 lg:h-auto lg:w-auto"
            src="./images/purple-star1.png"
            alt=""
          />
          <img
            className="absolute left-40 top-52 h-[10px] w-[8px] animate-pulse lg:left-72 lg:top-[450px] lg:h-auto lg:w-auto"
            src="./images/dim-star.png"
            alt=""
          />
          <img
            className="absolute bottom-32 right-0 h-[10px] w-[8px] animate-pulse lg:left-[470px] lg:top-[750px] lg:h-auto lg:w-auto"
            src="./images/hero-star.png"
            alt=""
          />
        </div>
      </Container>
      <img
        className="absolute -left-20 top-40 z-10 opacity-70"
        src="./images/lens-flare.png"
        alt=""
      />
      <img
        className="absolute bottom-0 left-52 opacity-70 lg:left-[800px] lg:top-60"
        src="./images/lens-flare.png"
        alt=""
      />
    </div>
  );
}
