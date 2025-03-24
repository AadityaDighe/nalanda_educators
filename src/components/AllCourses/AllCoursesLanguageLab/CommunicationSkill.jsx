import practicalImg from "../../../assets/images/practicalImg.png";

const CommunicationSkill = () => {
  const practicals = Array.from({ length: 15 }, (_, index) => index + 1);

  return (
    <>
      <div className="container my-5">
        <div className="text-center">
          <h5 className="text-dark">Communication Skill</h5>
          <p className="w-100 mx-auto">
            At Nalanda, educators often emphasize various practical approaches
            to enhance communication skills. The methods might be inspired by
            both traditional and modern techniques to address different aspects
            of communication, from speaking and listening to non-verbal
            communication and interpersonal interaction.
          </p>
        </div>

        <div className="practicalNos row d-flex justify-content-center">
          {practicals.map((practical) => (
            <div
              key={practical}
              className="btn d-flex justify-content-center align-items-center mx-4 text-center col-12 col-sm-6 col-md-4 col-lg-2 border my-3"
              title={
                "Click to listen to the provided content, solve the exercises, and practice by speaking and recording your responses"
              }
            >
              <img src={practicalImg} alt="img" className="img-fluid" />
              <p className="mt-3">
                Practical: {practical.toString().padStart(2, "0")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CommunicationSkill;
