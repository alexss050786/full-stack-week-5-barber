import { Button } from "../_components/ui/button";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold text-center">About</h1>
      <p className="text-center">
        This is the about page. You can edit this page by editing the
        <code className="font-mono font-bold">src/app/about/page.tsx</code> file.
      </p>
      <Button>Click me</Button>
    </div>
  );
}

export default About;
