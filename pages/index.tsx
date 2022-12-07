import { Container } from "../components/Container";
import { FormNewProject } from "../components/FormNewProject";

export default function Home() {
  return (
    <section id="home" className="grid wrapper bg-black gap-2">
      <Container>
        <div>
          <FormNewProject />
        </div>
      </Container>
    </section>
  );
}
