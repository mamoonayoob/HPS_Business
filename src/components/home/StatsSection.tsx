import {
  Package,
  Building2,
  Truck,
  MapPin,
  Users,
  Plane,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const stats = [
  { icon: Package, value: "1M+", label: "Shipments/Day" },
  { icon: Building2, value: "150+", label: "Hubs" },
  { icon: Truck, value: "3,500+", label: "Service Centres" },
  { icon: MapPin, value: "20,000+", label: "Pin Codes" },
  { icon: Users, value: "28,000+", label: "Representatives" },
  { icon: Plane, value: "52+", label: "Cargo Airports" },
];

export function StatsSection() {
  return (
    <section className="home-section--stats">
      <Container>
        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="home-stat-card">
              <div className="home-stat-icon-wrap">
                <stat.icon className="text-secondary-cyan" strokeWidth={2} />
              </div>
              <p className="home-stat-value">{stat.value}</p>
              <p className="home-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
