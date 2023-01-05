import NavLink from './NavLink';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Página Inicial" path="/"/>
        <NavLink title="Projetos" path="/projetos"/>
        <NavLink title="Contato" path="/contato"/>
      </ul>
    </Container>
  );
}
