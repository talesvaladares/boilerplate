import * as S from './styles';

export function Main({
  title = 'React Avançado',
  description = 'TypeScript, ReactJs, NextJs, Styled Components'
}) {
  return (
    <S.Wrapper>
      <S.Logo src="img/logo.svg" alt="Imagem de um átomo e react avançado escrito ao lado" />
      <S.Title>{title}</S.Title>
      <S.Description>
        {description}
      </S.Description>
      <S.Illustration
        src="img/hero-illustration.svg"
        alt='Desenvolvedor sentado olhando para código no computador'
      />
    </S.Wrapper>
  );
}