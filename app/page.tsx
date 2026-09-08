import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <h3 className="text-lg font-semibold m-6">
          Season SignUp is Open - limited Spots available. Please register your
          team or as an individual player to secure your place in the 2026
          season.
        </h3>
        <div className="flex flex-wrap text-7xl font-extrabold py-3">
          <p>Join The Community.</p>
          <p>Play More.</p>
          <p>Love touch rugby!</p>
        </div>
        <p className=" flex-wrap text-lg">
          Sign up for the new season and join weekly community leagues across
          social, competitive and mixed divisions.Teams form fast - find
          teammates, friends and rivals nearby
        </p>
      </div>
      <div className="flex gap-6 m-8">
        <button className="bg-[#FF8C00] text-white py-2 px-4 rounded-4xl  hover:bg-[#FFA500]">
          Register Now
        </button>
        <button className=" text-black py-2 px-4 rounded-4xl border border-black w-64 h-15 hover:bg-gray-200">
          View Fixtures
        </button>
      </div>
      <div className="border border-black rounded-2xl m-8 p-4 w-250">
        <form className="gap-4 m-8 space-x-3">
          {" "}
          <input
            type="text"
            id="name"
            name="name"
            className="border border-black rounded-2xl px-2 py-1 w-64 h-15"
            placeholder="Name"
          />
          <input
            type="email"
            id="email"
            name="email"
            className="border border-black rounded-2xl px-2 py-1 w-64 h-15"
            placeholder="Email"
          />
          <button
            type="submit"
            className="bg-[#FF8C00] text-white py-2 px-4 rounded-2xl w-64 h-15 hover:bg-[#FFA500]"
          >
            Quick Sign Up
          </button>
        </form>
      </div>
      {/*how it works card*/}
      <div className="justify-center items-center border border-black rounded w-170 p-5 m-5 ">
        <h3 className="text-xl font-semibold pb-3">How It Works </h3>
        <p className="flex flex-wrap ">Create or join a team, choose your division, and secure your spot for the season.</p>
        <p>Fixtures and standings updated weekly.</p>
        <ul className=" p-3">
          <li>Simple Team Management</li>
          <li>Online Payments & Invoices</li>
        </ul>
      </div>
      {/* benefits card */}
      <div className="justify-center items-center border border-black rounded w-170 p-5 m-5">
        <h3 className="text-xl font-semibold pb-3">Benefits </h3>
        <p>play weekly, improves skills, and connect with a passionate community. Referees, drink deals and social included</p>
        <ul>
          <li>Refereed Matches</li>
          <li>local socials & events </li>
        </ul>
      </div>
      {/* league types card */}
      <div className="justify-center items-center border border-black rounded w-170 p-5 m-5">
        <h3 className="text-xl font-semibold pb-3">League Types</h3>
        <p>we cater to all play styles - casual social groups to competitive leagues, one touch and mixed divisions</p>
        <ul>
          <li>Social</li>
          <li>Competitive</li>
          <li>One Touch</li>
          <li>Mixed</li>
        </ul>
      </div>
      {/*latest news card*/}
    </div>
  );
}
