import { useRef } from 'react';
import Header from '../../widget/header/header';
import Footer from '../../widget/footer/footer';
import Banner from '../../widget/banner/banner';
import Feedbacks from '../../entities/ui/feedbacks/feedbacks';
import Questions from '../../widget/questions/questions';
import Application from '../../widget/application/application';
import './main.scss';

export default function Main() {
  const createOrderRef = useRef(null);
  return (
    <>
      <Header
        onCreateOrderClick={() => {
          createOrderRef.current.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      <Banner />
      <Application innerRef={createOrderRef} />
      <Feedbacks />
      <Questions />
      <Footer />
    </>
  );
}
