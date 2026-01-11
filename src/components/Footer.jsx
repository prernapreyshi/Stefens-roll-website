import { UtensilsCrossed, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 px-4 mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
              <UtensilsCrossed className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Stefens Rolls</h3>
              <p className="text-xs text-muted-foreground">Delivered in 20 minutes</p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground flex items-center gap-2">
  <span className="text-accent">♥</span>
  Thank you for choosing Stefens Rolls
  <span className="text-accent">♥</span>
</p>

          
          <p className="text-sm text-muted-foreground">
            Fresh. Fast. Flawless.

          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
