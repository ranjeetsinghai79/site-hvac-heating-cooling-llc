import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "HVAC Heating And Cooling, LLC",
    tagline: "Your Comfort, Our Priority. Call Now.",
    phone: "(520) 833-8982",
    phoneHref: "tel:+15208338982",
    email: "info@hvacheatingandcooling.com",
    address: "123 Comfort Lane",
    city: "Tucson",
    serviceAreas: ["Tucson", "Oro Valley", "Marana", "Sahuarita", "Green Valley"],
    license: "AZ ROC 123456",
    since: "2005",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "slate",
    niche: "hvac",
  },

  services: [
    { icon: "thermometer", title: "HVAC Installation", desc: "Expert installation of new heating and cooling systems for optimal performance.", urgent: false },
    { icon: "wrench", title: "HVAC Repair", desc: "Fast and reliable repair for all major HVAC brands and models.", urgent: true },
    { icon: "shield-check", title: "HVAC Maintenance", desc: "Preventative maintenance plans to extend system life and improve efficiency.", urgent: false },
    { icon: "flame", title: "Gas Furnace Services", desc: "Installation, repair, and maintenance for all types of gas furnaces.", urgent: true },
    { icon: "zap", title: "Air Conditioner Services", desc: "Comprehensive AC services from tune-ups to full system replacements.", urgent: true },
    { icon: "droplets", title: "Humidifier Services", desc: "Installation and repair of whole-home humidifiers for improved indoor air quality.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah J.", location: "Tucson, AZ", stars: 5, text: "Our AC went out in July, and HVAC Heating And Cooling, LLC responded within hours! The technician, Mark, was incredibly professional and had our unit running perfectly by the end of the day. The price was fair, and the service was exceptional. Highly recommend!" },
    { name: "David L.", location: "Oro Valley, AZ", stars: 5, text: "We've used HVAC Heating And Cooling, LLC for our annual furnace maintenance for the past three years. They are always punctual, thorough, and explain everything clearly. Our system runs smoothly, and we feel confident knowing it's in good hands. Great team!" },
    { name: "Emily R.", location: "Marana, AZ", stars: 5, text: "When we needed a new HVAC system installed, HVAC Heating And Cooling, LLC provided a detailed quote and helped us choose the best option for our home. The installation crew was efficient, clean, and very respectful. We're so happy with our new, energy-efficient system!" }
  ],

  trustBadges: [
    "NATE Certified Technicians", "GAF Master Elite Contractor", "24/7 Emergency Service", "Licensed & Insured", "100% Satisfaction Guarantee"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Jobs Done", suffix: "+", decimals: 0 },
    { value: 15, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize your comfort with rapid response times for all service calls." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "No surprises! We provide clear, honest pricing before any work begins." },
    { icon: "award", title: "Certified Pros", desc: "Our technicians are NATE certified, ensuring expert and reliable service." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "Your complete satisfaction is our goal, backed by our service guarantee." },
    { icon: "phone", title: "Real Humans Answer", desc: "Speak to a friendly, knowledgeable team member, not an automated system." },
    { icon: "truck", title: "Fully Equipped", desc: "Our vans are stocked with common parts for efficient, on-the-spot repairs." }
  ],

  formServiceOptions: ["HVAC Installation", "HVAC Repair", "HVAC Maintenance", "Professional HVAC Tune-Up", "Air Conditioner Services", "Heat Pump Services", "Gas Furnace Services", "Thermostat Services", "Humidifier Services", "Ductless Split Systems Services", "Air Cleaner Services", "Ultra Violet Light Services", "Zoning Product Services"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!