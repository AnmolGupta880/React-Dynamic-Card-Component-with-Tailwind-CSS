import React from 'react';


function Card() {
  const data = [
    {
      name: "Sanam Teri Kasam",
      description: "The song is by Arijit",
      image: "https://images.unsplash.com/photo-1581264692613-6886eff81583?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Kya Mujhe Pyaar Hai",
      description: "Top played of 2024",
      image: "https://images.unsplash.com/photo-1516980907201-943c13a8d03c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];


  // Corrected onclick handler function
  const onclickhandler = () => { alert("Nice Choice!"); };


  return (
    <div className="w-full h-screen bg-teal-950 flex flex-col gap-10 justify-center items-center">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-[360px] flex px-4 py-4 bg-zinc-100 rounded-md shadow-md"
        >
          <div className="flex-1">
            <h3 className="font-semibold text-xl">{item.name}</h3>
            <p className="font-serif mt-2 text-gray-700">{item.description}</p>
            <button
              onMouseOver={onclickhandler}  // Use corrected function
              className="mt-3 px-3 py-2 bg-blue-500 rounded text-xs font-semibold text-white hover:bg-red-600"
            >
              Download now
            </button>
          </div>
          <img
            className="w-40 h-40 object-cover rounded ml-4"
            src={item.image}
            alt={item.name}
          />
        </div>
      ))}
    </div>
  );
}


export default Card;
