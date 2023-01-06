import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import foto from '../../../assets/me.png';
import linkedin from '../../../assets/linkedin.png';
import git from '../../../assets/git.png';

export function HomeHero() {
  return (
    <Container>
      <div>
        <img src={foto} alt="Minha foto"/>
        <div>
          <a href='https://www.linkedin.com/in/marcosviniciussa/'><img src={linkedin} alt="Linkedin" className='linkedin'/></a>
          <a href='https://github.com/Marcola20'><img src={git} alt="git" className='git'/></a>
        </div>
        
      </div>
        
      <div>
        <TextContainer>
          <h1>Olá,</h1>
          <h2>sou Marcos Vinicius!</h2>
        </TextContainer>
        <InfosContainer>

          <CodeItem>
            <span className='comment'>// Sobre mim</span>
            <span className='purple'>Informações </span>{'\u007B'}
            <div>
              Nome: <span className='blue'>Marcos Vinicius,</span>
            </div>
            <div>
              Sobrenome: <span className='blue'>Alves de Souza,</span>
            </div>
            <div>
              Idade: <span className='blue'>23 anos</span>
            </div>
            {'\u007D'}
          </CodeItem>

          <CodeItem>
            <span className='purple'>Formação Acadêmica </span>{'\u007B'}
            <div>
              Curso: <span className='blue'> Bacharelado Eng. de Software,</span>
            </div>
            <div>
              Faculdade: <span className='blue'> PUCPR,</span>
            </div>
            <div>
              Conclusão: <span className='blue'> Dezembro/2024</span>
            </div>
            {'\u007D'}
          </CodeItem>

          <CodeItem>
            <span className='purple'>Ocupação </span>{'\u007B'}
            <div>
              Função: <span className='blue'> Estagiário Eng. de Software,</span>
            </div>
            <div>
              Empresa: <span className='blue'> B2K Technology Solutions</span>
            </div>
            {'\u007D'}
          </CodeItem>

        </InfosContainer>
      </div>
    </Container>
  );
}
