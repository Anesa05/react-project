import img1 from "../assets/photos/body2-1.jpeg"
import img2 from "../assets/photos/body2-2.jpg"
import img3 from "../assets/photos/body2-3.jpg"

type Service = {
  title: string
  description: string
  image: string
  button: string
}

const services: Service[] = [
  {
    title: "Register",
    description: "Create an account to find or register your pet quickly and easily",
    image: img1,
    button: "Register"
  },
  {
    title: "Vet",
    description: "Find the nearest veterinarians and get quick help for your pet",
    image: img2,
    button: "Vet portal"
  },
  {
    title: "Report Lost",
    description: "Report a lost pet or search the list to find it as soon as possible",
    image: img3,
    button: "Report"
  }
]

const Services = () => {
  return (
    <section className="body2">
      <div className="body2-1">
        <h2>What we offer</h2>
      </div>

      <div className="pets-container">
        {services.map((service, index) => (
          <div className="pet-card" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#" className="btn">{service.button}</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
