import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/AdoptPet.css";

interface Dog {
  name: string;
  age: string;
  desc: string;
  img: string;
}

const dogsData: Dog[] = [
  { name: "Rex", age: "2 year old", desc: "Friendly dog", img: "/public/photos/dogi1.jpg" },
  { name: "Bella", age: "1.5 year old", desc: "Playful and cute", img: "/public/photos/dogi2.jpg" }
];

export default function AdoptPet() {
  const [selectedDog, setSelectedDog] = useState<Dog | null>(null);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <main style={{ padding: "80px 20px" }}>
        <h1>Adopt a Pet</h1>

        <div className="gallery">
          {dogsData.map((dog) => (
            <div key={dog.name} className="dog-card" onClick={() => setSelectedDog(dog)}>
              <img src={dog.img} alt={dog.name} />
              <p>{dog.name}</p>
            </div>
          ))}
        </div>

        {selectedDog && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setSelectedDog(null)}>&times;</span>
              <img src={selectedDog.img} alt={selectedDog.name} />
              <h2>{selectedDog.name}</h2>
              <p>{selectedDog.age}</p>
              <p>{selectedDog.desc}</p>
              <button className="adopt-btn" onClick={() => navigate("/regjistrimi")}>Adopt</button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
