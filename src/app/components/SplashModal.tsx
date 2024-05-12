'use client';
import Logo from './Logo';

interface SplashModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function SplashModal({ setModalOpen }: SplashModalProps) {
  return (
    <div className="fixed inset-0 z-50 h-dvh w-dvw bg-green px-6 py-10 text-white ">
      <div className="flex h-full flex-col justify-between gap-8 lg:mx-auto lg:w-max lg:justify-center">
        <Logo color="white" />
        <div className="w-60 lg:w-full">
          <h1 className="mb-4 text-5xl font-[760]">Treat yourself.</h1>
          <p className="text-title">
            Find the best restaurants in your city and get it delivered to your
            place!
          </p>
        </div>
        <button
          onClick={() => setModalOpen(false)}
          className="mx-auto w-full rounded-lg border-small border-white py-5 text-center shadow-box-shadows transition hover:bg-white hover:text-green"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default SplashModal;
