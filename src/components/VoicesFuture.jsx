import React from "react";

export default function VoicesFuture() {
  const testimonials = [
    {
      text: "NeoVision completely transformed the way I interact with virtual reality.",
      name: "James Rizaki",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      text: "Our team has adopted NeoVision’s VR collaboration tools.",
      name: "Samantha Leonardo",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      text: "I've been gaming in VR for years, but NeoVision’s technology changed everything.",
      name: "Mark Trevor",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
  ];

  return (
    <section className="bg-black text-white py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-10">
            VOICES OF THE <br /> FUTURE
          </h2>

          <div className="w-40 h-[2px] bg-gray-700 mb-8"></div>

          <p className="text-gray-400 max-w-md leading-relaxed text-sm">
            Here, you'll hear firsthand from users, pioneers, and tech
            enthusiasts who are shaping the next generation of virtual
            reality and futuristic technology.
          </p>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="space-y-7">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#141414] to-[#1e1e1e] p-7 rounded-3xl flex items-center justify-between border border-gray-800 hover:border-gray-600 transition duration-300"
            >
              <div className="max-w-xs">
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {item.text}
                </p>
                <h4 className="text-white font-semibold text-sm">
                  {item.name}
                </h4>
              </div>

              <img
                src={`${item.img}?auto=format&fit=crop&w=200&q=80`}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-700"
              />
            </div>
          ))}

        </div>

      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-r from-transparent via-gray-700/20 to-transparent blur-3xl"></div>
    </section>
  );
}