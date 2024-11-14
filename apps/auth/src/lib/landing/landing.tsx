import AuthLinks from "./auth-links";

export function Landing() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url(/images/landing-bg.jpg)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <div className="text-center px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Auth</h1>
          <p className="text-xl mb-6">
            A secure and simple way to manage your account.
          </p>
          <AuthLinks />
        </div>
      </div>
    </div>
  );
}

export default Landing;
