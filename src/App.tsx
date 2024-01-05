import Form from "./components/Form";
import TechImg from "./assets/images/tech-img.jpg";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen w-full flex items-center justify-center">
      <div className="flex w-auto bg-[#212122] rounded-xl">
        <img src={TechImg} alt="main image" className="w-96 object-fill rounded-l-xl" />
        <div className="flex flex-col items-start justify-center w-96 px-8">
          <p className="text-white text-xs mb-3 font-rubik">
            ❤️ by <span className="text-[#6961E9]">2M+</span> subscribers
          </p>
          <h1 className="text-white text-4xl mb-3 font-rubik font-semibold">
            Technical News Made Simple
          </h1>
          <p className="text-white text-xs font-rubik">
            Subscribe and get daily dose of the latest, most important technical developments
            delivered in simple, plain English.{" "}
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
