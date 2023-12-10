import Header from '../../widget/header/header';
import RegisterWidget from '../../widget/register-widget/register-widget';

function RegisterPage() {
  return (
    <>
      <Header onCreateOrderClick={() => {}} />
      <RegisterWidget />
    </>
  );
}

export default RegisterPage;
