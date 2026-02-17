export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">ÉCLAT</h3>
            <p className="text-background/80">
              Experience culinary perfection in an atmosphere of refined elegance and timeless sophistication.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">Hours</h4>
            <div className="space-y-2 text-background/80 text-sm">
              <p>Monday - Thursday: 5:30 PM - 11:00 PM</p>
              <p>Friday - Saturday: 5:00 PM - 12:00 AM</p>
              <p>Sunday: 5:00 PM - 10:00 PM</p>
              <p className="pt-2 font-medium text-background">Closed Mondays in Summer</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">Contact</h4>
            <div className="space-y-2 text-background/80 text-sm">
              <p>+1 (555) 123-4567</p>
              <p>info@eclat-dining.com</p>
              <p>123 Luxury Avenue</p>
              <p>San Francisco, CA 94102</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/30 pt-8 flex flex-col md:flex-row justify-between items-center text-background/70 text-sm">
          <p>&copy; 2024 ÉCLAT. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-secondary transition-colors">Instagram</a>
            <a href="#" className="hover:text-secondary transition-colors">Facebook</a>
            <a href="#" className="hover:text-secondary transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
