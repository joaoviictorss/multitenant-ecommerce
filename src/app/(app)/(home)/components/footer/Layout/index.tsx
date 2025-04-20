import { FooterData } from "../data";

const Footer = (_: FooterData) => {
  return (
    <footer className="flex border-t justify-between font-medium p-6">
      <div className="flex items-center gap-2">
        <p>Bazar.io, Inc.</p>
      </div>
    </footer>
  );
};

export { Footer };
