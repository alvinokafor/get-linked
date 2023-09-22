import React from "react";
import Container from "../partials/container";

export default function criteria() {
  return (
    <div className="relative overflow-hidden">
      <Container>
        <div className="relative">
          <div className="bg-[#140D27] py-16 flex flex-col lg:flex-row text-white items-center gap-x-12">
            <img
              className="sm:w-[510px] sm:h-[387px] 2xl:w-auto 2xl:h-auto"
              src="./images/criteria-img.png"
              alt=""
            />

            <div className="space-y-4 basis-3/5 text-center lg:text-left mt-6">
              <h2 className="text-xl relative z-20 w-3/5 mx-auto leading-10 lg:mx-0 md:text-[2rem] lg:w-1/2 font-bold font-heading">
                Judging Criteria{" "}
                <span className="text-primary">Key Attributes</span>
              </h2>
              <div className="font-body z-20 relative leading-7 text-sm sm:text-base space-y-14">
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
                    Judges would consider the completeness and robustness of the
                    solution.
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
                    Judges would consider the complexity of the code, the use of
                    advanced technologies or algorithms, and the scalability of
                    the solution.
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

                <button className="py-4 z-30 px-[52px] rounded-md bg-gradient hover:bg-none border border-[#903AFF] hover:border-[#903AFF] transition-all duration-150">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <img
            className="absolute h-[13px] w-[11px] lg:h-auto lg:w-auto top-10 left-32 lg:top-40 animate-pulse"
            src="./images/purple-star1.png"
            alt=""
          />
          <img
            className="absolute h-[10px] w-[8px] lg:h-auto lg:w-auto top-52 left-40 lg:top-[450px] lg:left-72 animate-pulse"
            src="./images/dim-star.png"
            alt=""
          />
          <img
            className="absolute h-[10px] w-[8px] lg:h-auto lg:w-auto bottom-32 right-0 lg:top-[750px] lg:left-[470px] animate-pulse"
            src="./images/hero-star.png"
            alt=""
          />
        </div>
      </Container>
      <img
        className="absolute z-10 opacity-70 top-40 -left-20"
        src="./images/lens-flare.png"
        alt=""
      />
      <img
        className="absolute opacity-70 bottom-0 left-52 lg:left-[800px] lg:top-60"
        src="./images/lens-flare.png"
        alt=""
      />
    </div>
  );
}
