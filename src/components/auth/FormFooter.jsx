import google from "../../assets/images/google.png";

const FormFooter = ({ isRegister }) => {
  return (
    <>
      <div className="flex items-center mt-12 mb-6">
        <div className="flex-grow border-t border-[#919EAB3D]/50"></div>
        <span className="mx-4 text-lGray text-sm">OR</span>
        <div className="flex-grow border-t border-[#919EAB3D]/50"></div>
      </div>

      <button
        className="w-full border border-[#919EAB52] py-[11px] rounded-lg
     flex items-center justify-center gap-4 text-lGray text-[15px] font-bold"
      >
        <img src={google} alt="Google" className="h-6 w-6" />
        Continue with Google
      </button>

      <p className="text-center text-sm text-dGray mt-8">
        {isRegister ? (
          <>
            Already have an account?{" "}
            <a href="/login" className="text-[#49AE44] font-semibold">
              Login
            </a>
          </>
        ) : (
          <>
            Don’t have an account?{" "}
            <a href="/register" className="text-[#49AE44] font-semibold">
              Get started
            </a>
          </>
        )}
      </p>
    </>
  );
};

export default FormFooter;
