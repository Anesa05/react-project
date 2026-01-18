// src/pages/AdoptPet.tsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Dog {
  name: string;
  age: string;
  desc: string;
  img: string;
}

const dogsData: Dog[] = [
  { name: "Rex", age: "2 year old", desc: "Rex is a happy dog who loves to play outside. He is friendly with everyone he meets. Rex enjoys cuddles and short walks in the park.", img: "/photos/dogi1.jpg" },
  { name: "Golden", age: "3 year old", desc: "Golden is a smart and playful dog. He loves playing fetch and running around. Golden is very gentle and enjoys being with children.", img: "/photos/golden-retriever.jpg" },
  { name: "Bella", age: "1.5 year old", desc: "Bella is cheerful and full of energy. She loves playing with kids and other dogs. Bella is very affectionate and enjoys being petted.", img: "/photos/dogi.jpg" },
  { name: "Max", age: "3 year old", desc: "Max is a friendly dog who loves going on long walks. He enjoys exploring new places and meeting new people. Max is very obedient and easy to train.", img: "/photos/dogi3.jpg" },
  { name: "Lilo", age: "3 year old", desc: "Lilo is a calm and gentle dog. She enjoys relaxing at home and being around people. Lilo loves soft toys and quiet playtime.", img: "/photos/dogi4.jpg" },
  { name: "Snow", age: "3 year old", desc: "Snow is a very gentle and kind dog. He loves being with people and is good with other pets. Snow enjoys relaxing in sunny spots and light exercise.", img: "/photos/dogi5.webp" },
  { name: "Moose", age: "8 year old", desc: "Moose is playful and full of energy. She loves running, jumping, and exploring new areas. Luna is very curious and enjoys making new friends.", img: "/photos/dogi6.jpg" },
  { name: "Coco", age: "5 year old", desc: "Coco is lively and loves attention. He enjoys playing with toys and meeting new people. He is friendly and always happy to see her friends.", img: "/photos/dogi7.jpg" },
  { name: "Luna3", age: "4 year old", desc: "Luna3 is energetic and playful. She loves outdoor activities and running in the park. She is affectionate and enjoys cuddles after playtime.", img: "/photos/dogi8.jpg" },
  { name: "Ace", age: "1 year old", desc: "Ace is cheerful and loves making friends. He enjoys playing games and exploring new places. Ace is loving and always ready for a hug.", img: "/photos/dogi9.jpg" },
];

const AdoptPet: React.FC = () => {
  const [selectedDog, setSelectedDog] = useState<Dog | null>(null);

  const handleAdopt = () => {
    // Redirect to registration page
    window.location.href = "/register";
  };

  return (
    <div>
      <Navbar />
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Adopt a Pet</h1>
        <p>Here you can view pets available for adoption.</p>

        <div className="gallery">
          {dogsData.map((dog) => (
            <div
              key={dog.name}
              className="dog-card"
              onClick={() => setSelectedDog(dog)}
            >
              <img src={dog.img} alt={dog.name} />
              <div className="info">
                <h3>{dog.name}</h3>
                <p>Age: {dog.age}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedDog && (
          <div className="modal" style={{ display: "block" }}>
            <div className="modal-content">
              <span className="close" onClick={() => setSelectedDog(null)}>
                &times;
              </span>
              <img src={selectedDog.img} alt={selectedDog.name} />
              <h2>{selectedDog.name}</h2>
              <p>Age: {selectedDog.age}</p>
              <p>{selectedDog.desc}</p>
              <button className="adopt-btn" onClick={handleAdopt}>
                Adopt
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AdoptPet;
