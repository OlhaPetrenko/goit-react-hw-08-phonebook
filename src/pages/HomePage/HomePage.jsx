import Section from 'components/Section/Section';
function HomePage() {
  return (
    <Section>
      <h1 style={{ textAlign: 'center', fontSize: '46px' }}>Привіт!!!</h1>
      <p style={{ textAlign: 'center', fontSize: '36px' }}>
        Це головна сторінка сайту. Трохи не схоже...
      </p>
      <p style={{ textAlign: 'center', fontSize: '36px' }}>
        Для продовження роботи треба зареєструватися або здійснити вхід
      </p>
    </Section>
  );
}

export default HomePage;
