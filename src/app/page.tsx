import Header from '../components/Header';
import MyButton from '../components/UI/MyButton';
import Heading from '../components/UI/Heading';
import Paragraph from '../components/UI/Paragraph';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <Heading level="h1">Welcome to EDURA</Heading>
          <Heading level="s1" style={{ marginTop: '1rem' }}>Your online university platform</Heading>
          
          <div style={{ marginTop: '3rem', textAlign: 'left', maxWidth: '800px', margin: '3rem auto 0' }}>
            <Heading level="h2">Typography Examples</Heading>
            <div style={{ marginTop: '2rem', display: 'grid', gap: '1.5rem' }}>
              <Heading level="h1">Heading H1 - Main Title</Heading>
              <Heading level="h2">Heading H2 - Section Header</Heading>
              <Heading level="h3">Heading H3 - Subsection</Heading>
              <Heading level="h4">Heading H4 - Medium Header</Heading>
              <Heading level="h5">Heading H5 - Small Header</Heading>
              <Heading level="h6">Heading H6 - Smallest Header</Heading>
              <Heading level="s1">Subtitle S1 - Large Subtitle</Heading>
              <Heading level="s2">Subtitle S2 - Small Subtitle</Heading>
              
              <div style={{ marginTop: '2rem' }}>
                <Heading level="h3" style={{ marginBottom: '1rem' }}>Paragraph Examples</Heading>
                <Paragraph level="p1">
                  This is Paragraph P1 with 16px font size, 26px line height, and Regular 400 font weight using Roboto font. 
                  This variant is perfect for main body text and longer content sections where readability is important.
                </Paragraph>
                <Paragraph level="p2" style={{ marginTop: '1rem' }}>
                  This is Paragraph P2 with 14px font size, 24px line height, and Regular 400 font weight using Roboto font. 
                  This smaller variant is ideal for secondary text, captions, or smaller content areas.
                </Paragraph>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <MyButton primary>Primary Button</MyButton>
            <MyButton>Default Button</MyButton>
            <MyButton error>Error Button</MyButton>
          </div>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <MyButton primary rounded>Primary Rounded</MyButton>
            <MyButton rounded>Default Rounded</MyButton>
            <MyButton error rounded>Error Rounded</MyButton>
          </div>
        </div>
      </main>
    </>
  );
}
